const commandsList = require("../utils/commandsList");

const getcommands = (message) => {
  try {
    const commands = commandsList.reduce(
      (prev, curr) => prev + "\n" + curr.command,
      ""
    );
    const prefix = "Here are the commands.";
    console.log(`${prefix}${commands}`);
    message.channel.send(`${prefix}${commands}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getcommands;
