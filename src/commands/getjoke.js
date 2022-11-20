const axios = require("axios");
const { jokeApi } = require("../utils/apis");

const getjoke = async (params) => {
  const { message } = params;
  try {
    const response = await axios.request(jokeApi);
    const data = await response.data;
    if (data.type === "single") {
      message.channel.send(data.joke);
    } else if (data.type === "twopart") {
      const convertedJoke = `${data.setup}\n${data.delivery}`;
      message.channel.send(convertedJoke);
    }
  } catch (error) {
    console.log(error);
    message.channel.send("unable to get joke");
  }
};

module.exports = getjoke;
