const bulkdelete = async (params) => {
  const { message } = params;
  try {
    message.channel.bulkDelete(100);
  } catch (error) {
    console.log(error);
    message.channel.send("An error occurred during bulk deletion of messages");
  }
};

module.exports = bulkdelete;
