const axios = require("axios");

const options = (city) => ({
  method: "GET",
  url: `https://open-weather13.p.rapidapi.com/city/${city}`,
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  },
});

const getweather = async (params) => {
  const { message, args } = params;
  if (!args) {
    message.channel.send("Please enter city");
    return;
  }
  try {
    const response = await axios.request(options(args[0]));
    const data = await response.data;
    console.log(data);
    message.channel.send(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

module.exports = getweather;
