const jokeApi = {
  method: "GET",
  url: "https://jokeapi-v2.p.rapidapi.com/joke/Any",
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": "jokeapi-v2.p.rapidapi.com",
  },
};

const createQrApi = (data) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;

const getweatherApi = (city) => ({
  method: "GET",
  url: `https://open-weather13.p.rapidapi.com/city/${city}`,
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  },
});

module.exports = { jokeApi, createQrApi, getweatherApi };
