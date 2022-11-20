const bulkadd = async (params) => {
  const { message, args } = params;
  if (!args) {
    message.channel.send("please add at least one message");
    return;
  }
  try {
    args.forEach((item) => message.channel.send(item));
  } catch (error) {
    console.log(error);
  }
};

module.exports = bulkadd;
