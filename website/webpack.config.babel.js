import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';

import data from './data';

export default {
  entry: './website/site.js',
  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      { test: /\.js$/, loader: 'babel-loader', include: /website/ },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data),
  ],
};
