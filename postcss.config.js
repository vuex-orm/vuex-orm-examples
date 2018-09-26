const path = require('path')

const rootDir = path.join(__dirname, '.')

module.exports = {
  plugins: {
    'postcss-import': { root: rootDir, path: [`${rootDir}/src`] },
    'postcss-nested': {},
    'postcss-css-variables': {},
    'autoprefixer': {}
  }
}
