const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = (config) => {
  return {
    ...config,
    externals: [nodeExternals({ modulesDir: path.resolve(__dirname, '../../node_modules') })],
  };
};
