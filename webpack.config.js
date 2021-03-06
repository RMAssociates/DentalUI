var webpack = require('webpack');
var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var bs = require("browser-sync").create();

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    publicPath: '/src/client',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
                {
                    test : /\.jsx?/,
                    exclude : /node_modules/,
                    include : APP_DIR,
                    loader : 'babel',
                    // Options to configure babel with
                    query: {
                      plugins: ['transform-runtime'],
                      presets: ['es2015', 'stage-0'],
                    }
                },
                { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=1000&mimetype=application/font-woff"},
                { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?limit=10000&publicPath=/src/client/public/"},
                { test: /\.scss$/, loader: "style!css!sass"},
               // { test: /\.css$/,  loader: "style-loader!css-loader!autoprefixer-loader" }
            ]
            },
  plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery:"jquery",
    "window.jQuery":"jquery",
    "Tether": "tether"
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.NoErrorsPlugin(),
  new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['src/client'] }
    })
   // new BrowserSyncPlugin({
   //      host: 'localhost',
   //      port: 3000,
   //      proxy: 'http://localhost:8080/'
   //  },
   //    // plugin options
   //    {
   //      // prevent BrowserSync from reloading the page
   //      // and let Webpack Dev Server take care of this
   //      reload: false
   //    }
   //  )
  ]
};

module.exports = config;