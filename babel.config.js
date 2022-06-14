module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV);

  const isTest = api.env("test");

  const defaultEnvConfig = {
    modules: false,
    targets: {
      node: "16",
      browsers: ["last 3 Chrome versions", "last 3 Firefox versions", "last 3 Safari versions", "last 3 Edge versions"],
    },
  };

  const testEnvConfig = {
    targets: {
      node: "current",
    },
  };

  const presets = [["@babel/preset-env", isTest ? testEnvConfig : defaultEnvConfig], "@babel/preset-typescript"];

  const plugins = [];

  return {
    presets,
    plugins,
  };
};
