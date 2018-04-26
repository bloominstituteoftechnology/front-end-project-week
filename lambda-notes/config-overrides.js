module.exports = function override(config, env) {
  config.resolve.alias = { ...config.resolve.alias, 'jquery-ui': 'jquery-ui/ui' };

  return config;
}
