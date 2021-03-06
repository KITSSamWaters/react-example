const path = require('path')

const APP_DIR = path.join(__dirname, 'src')
const BUILD_DIR = path.join(__dirname, 'dist')

const config = {
    entry: [
        // App starts here
        APP_DIR + '/index.jsx'
    ],
    mode: 'development',
    module: {
        rules: [
            {
              // Don't look in this folder
              exclude: /node_modules/,
              // Only look in this folder
              include: APP_DIR,
              // Files need to match this pattern to be compiled
              test: /\.css$/,
              // Apply these rules to it if it matches
              use: [
                {loader: "style-loader"},
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    localIdentName: "[name]__[local]___[hash:base64:5]",
                    modules: true,
                    sourceMap: true
                  }
                }
              ]
            },
            {
              // Don't look in this folder
              exclude: /node_modules/,
              // Only look in this folder
              include: APP_DIR,
              // Files need to match this pattern to be compiled
              test: /\.jsx?$/,
              // Apply these rules to it if it matches
              use: [
                {loader: 'babel-loader'}
              ]
            }
        ]
    },
    output: {
        // What to name the built file
        filename: 'bundle.dev.js',
        // Where the built file should go
        path: BUILD_DIR
    },
    resolve: {
      extensions: ['.css', '.js', '.jsx']
    }
}

module.exports = config
