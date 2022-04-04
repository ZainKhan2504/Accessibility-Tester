const pa11y = require("pa11y");

const run = async () => {
  const response = await pa11y("https://zainalikhan.netlify.app/");

  console.log(response);
};

run();
