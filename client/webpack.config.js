const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// default for webpack is dist
const outputPath = path.resolve(__dirname, 'build');

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src/index.js')],
  },
  output: {
    path: outputPath,
    publicPath: '/',
    filename: '[name].[hash].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: /node_modules/,
          enforce: true,
        },
      },
    },
    runtimeChunk: false,
  },
  devServer: {
    port: 3000,
    contentBase: outputPath,
    publicPath: '/',
    historyApiFallback: true,
    proxy: [
      {
        context: ['/graphql', '/subscriptions', '/favicon.ico'],
        target: 'http://localhost:3002',
        ws: true,
      },
    ],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@containers': path.resolve(__dirname, './src/containers/'),
      '@store': path.resolve(__dirname, './src/store/'),
      '@themes': path.resolve(__dirname, './src/themes/'),
    },
  },
};
