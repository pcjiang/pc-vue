const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        use: path.resolve(__dirname, './src/MyLoader/my-loader.js')
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    overlay: {
      warnings: true,
      errors: true,
    },
    open: true,
  },
}