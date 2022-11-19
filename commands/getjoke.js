const axios = require("axios");

const options = {
  method: "GET",
  url: "https://jokeapi-v2.p.rapidapi.com/joke/Any",
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": "jokeapi-v2.p.rapidapi.com",
  },
};

const getjoke = async (params) => {
  const { message } = params;
  try {
    const response = await axios.request(options);
    const data = await response.data;
    console.log(data);
    if (data.type === "single") {
      message.channel.send(data.joke);
    } else if (data.type === "twopart") {
      const convertedJoke = `${data.setup}\n${data.delivery}`;
      message.channel.send(convertedJoke);
    }
  } catch (error) {
    console.log(data);
  }
};

module.exports = getjoke;
