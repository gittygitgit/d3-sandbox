const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.css' ]
  },
  module: {
    rules: [
      // App styles
      {
        test: /\.css$/,
        include: [
          path.join(__dirname, 'src')
        ],
        exclude: [path.join(__dirname, 'src/public/css')],
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      },
      // Vendor styles shouldn't be loaded as modules
      {
        test: /\.css$/,
        include: [ 
          path.join(__dirname, 'node_modules'),
          path.join(__dirname, 'src/public/css')
         ],
        //exclude: [ path.join(__dirname, 'node_modules/react-virtualized') ],
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: false
            }
          }
        ]
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          { loader : 'babel-loader' }
        ]
      },
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/index.html'
      }
    ]),
  ]
}
