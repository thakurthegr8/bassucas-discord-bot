const axios = require("axios");
const { getweatherApi } = require("../utils/apis");

const getweather = async (params) => {
  const { message, args } = params;
  if (!args) {
    message.channel.send("Please enter city");
    return;
  }
  try {
    const response = await axios.request(getweatherApi(args[0]));
    const data = await response.data;
    const heading = `${data.name} Temperature\n`;
    const temperature = `${data.main.temp} degF\n`;
    message.channel.send(`${heading}${temperature}`);
  } catch (error) {
    console.log("unable to get weather");
    message.channel.send(`${heading}${temperature}`);
  }
};

module.exports = getweather;
