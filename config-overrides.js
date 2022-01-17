const Dotenv = require("dotenv-webpack");

module.exports = function override(config, env) {
  return { ...config, plugins: [...config.plugins, new Dotenv()] };
};
