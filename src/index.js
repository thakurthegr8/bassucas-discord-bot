require("dotenv").config();
const init = require("./__init__");

//checking existing environment variables
init();

const { Client, GatewayIntentBits } = require("discord.js");
const commands = require("./commands");

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
    if (commandName === "getcommands") {
      commands.getcommands(message);
      return;
    }
    if (commands[commandName]) {
      const params = { message, args };
      commands[commandName](params);
    } else {
      commands.getcommands(params);
    }
  } else {
    message.channel.send(`Hi,${message.author.username}`);
  }
});

bot.login(token);
