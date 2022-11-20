const { createQrApi } = require("../utils/apis");

const createqr = async (params) => {
  const { message, args } = params;
  if (!args) {
    message.channel.send("Please enter data");
    return;
  }
  try {
    message.channel.sendTyping();
    await message.channel.send({
      content: "Here's your qr code",
      embeds: [
        {
          thumbnail: {
            url: createQrApi(args[0]),
          },
        },
      ],
    });
  } catch (error) {
    message.channel.send("unable to generate qr code");
  }
};

module.exports = createqr;
