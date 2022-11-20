require("dotenv").config();
const express = require("express");
const app = express();
const { Client, GatewayIntentBits } = require("discord.js");
const commands = require("./commands");

app.get("/", (req, res) => res.status(200).json("bassucas discord bot is running"));

app.listen(3000, () => console.log("bot is listening"));

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const token = process.env.BOT_TOKEN;

const prefix = "/";

bot.on("ready", () => {
    console.log(bot.user);
    console.log(`${bot.user.tag} just showed up`);
});

bot.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
        const command = message.content
            .trim()
            .substring(prefix.length)
            .split(/\s+/);
        const [commandName, ...args] = command;
        console.log(command);
        if (commands[commandName]) {
            const params = { message, args };
            commands[commandName](params);
        } else {
            //   commands.getcommands(message);
        }
    } else {
        message.channel.send(`Hi,${message.author.username}`);
    }
});

bot.login(token);
