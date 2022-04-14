const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'layout',
      filename: 'remoteEntry.js',
      remotes: {
        home: 'home@http://localhost:3002/remoteEntry.js',
        nav: 'nav@http://localhost:3003/remoteEntry.js'
      },
      exposes: {},
      shared: {}
    })
  ],
  devServer: {
    port: 3001
  }
}