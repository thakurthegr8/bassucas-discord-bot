const bulkdelete = async (params) => {
  const { message } = params;
  try {
    message.channel.bulkDelete(100);
  } catch (error) {
    console.log(error);
  }
};

module.exports = bulkdelete;
