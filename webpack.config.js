const path = require('path');

module.exports = {
  entry: {
    homepage: './js/App.js',
    default: './js/Default.js',
    cssDoodlePage: './js/DoodlePage.js',
    about: './js/AboutPage.js',
    resume: './js/Resume.js'
  },
  output: {
    path: path.join(__dirname, "src"),
      filename: "[name].entry.js"
},
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
      },
      {
        test: /\/.+\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
            options: {
              indentedSyntax: true,
              outputStyle: 'expanded',
              browsers: 'last 2 versions'
            }
          }
        ]
      },
    ]
  }
};
