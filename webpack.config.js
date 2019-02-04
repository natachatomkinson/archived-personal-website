const path = require('path');

module.exports = {
  entry: {
    homepage: ['./js/GoogleAnalytics.js','./js/App.js'],
    default: ['./js/GoogleAnalytics.js', './js/Default.js'],
    cssDoodlePage: ['./js/GoogleAnalytics.js', './js/DoodlePage.js'],
    about: ['./js/GoogleAnalytics.js', './js/AboutPage.js'],
    resume: ['./js/GoogleAnalytics.js', './js/Resume.js']
  },
  output: {
    path: path.join(__dirname, "src"),
      filename: "[name].entry.js"
},
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              importLoaders: 1
            }
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
      }
    ]
  }
};
