const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './index.js',
  mode: 'development',
  module: {
    rules: [
      {
        loader: ['vue-style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        loader: 'vue-loader',
        test: /\.vue$/
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.min.js'
    }
  }
}