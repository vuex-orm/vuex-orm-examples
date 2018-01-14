const path = require('path')
const webpack = require('webpack')

const rootDir = path.join(__dirname, '.')

const config = {
  devtool: 'inline-source-map',

  entry: {
    main: ['webpack-hot-middleware/client', `${rootDir}/src/app.js`]
  },

  output: {
    path: `${rootDir}/js`,
    filename: '[name].js',
    publicPath: '/js/'
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.vue$/, exclude: /node_modules/, loader: 'vue-loader' }
    ]
  },

  resolve: {
    extensions: ['.js', '.vue']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.entry.main.shift()
  config.output.path = `${rootDir}/public/js`

  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  )
} else {
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.plugins.push(new webpack.NoEmitOnErrorsPlugin())
}

module.exports = config
