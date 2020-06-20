const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const exportedConfig = {
  entry: __dirname + '/browser.ts',
  devtool: 'source-map',
  optimization: {
    minimize: true,
  },
  mode: 'production',
  externals: [
    nodeExternals({whitelist: ['api-mount-client', 'api-mount-server']}),
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    sourceMapFilename: 'index.js.map',
    libraryTarget: 'umd',
    library: 'ApiMount',
  },
  resolveLoader: {
    modules: [__dirname + '/node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: __dirname + '/tsconfig.json',
            },
          },
        ],
      },
    ],
  },
}

module.exports = exportedConfig
