const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const developmentConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
};
const productionConfig = { mode: 'production', devtool: 'source-map' };

module.exports = (env) => {
  switch (env) {
    case 'development':
      return merge(commonConfig, developmentConfig);
    case 'production':
      return merge(commonConfig, productionConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};
