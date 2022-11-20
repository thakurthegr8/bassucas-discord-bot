//checks for environment variables

const init = () => {
  const { BOT_TOKEN, RAPID_API_KEY } = process.env;
  if (!(BOT_TOKEN || RAPID_API_KEY)) {
    throw "Missing tokens! please check env.json file";
  }
};

module.exports = init;
