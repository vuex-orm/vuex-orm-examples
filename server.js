const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

const rootDir = path.join(__dirname, '.')

const app = express()
const compiler = webpack(WebpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/js',
  stats: {
    colors: true,
    chunks: false,
    modules: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static('public'))

module.exports = app.listen(3000, () => {
  console.log(`Server listening on http://localhost:3000, Ctrl+C to stop`)
})
