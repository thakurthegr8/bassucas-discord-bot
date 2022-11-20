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
            url: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${args[0]}`,
          },
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = createqr;
