const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  // module: {
  //   rules: [
  //     {
  //       test: /\.m?js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['@babel/preset-react', '@babel/preset-env'],
  //           plugins: [
  //             ["babel-plugin-styled-components", {
  //               "namespace": "my-app0"
  //             }],
  //             '@babel/plugin-transform-runtime'
  //           ],
  //         },
  //       },
  //     },
  //   ],
  // },
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'parentcontainer',
      remotes: {
        // reporting: 'reporting@http://localhost:3001/remoteEntry.js',
        workflow: 'workflow@http://localhost:3002/remoteEntry.js'
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
