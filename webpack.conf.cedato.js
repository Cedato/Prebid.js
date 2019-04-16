var path = require('path');
var helpers = require('./gulpHelpers');

module.exports = {
  entry: {
    'bid-adapters': './cedato/bid-adapters'
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      '../src/adapters/bidderFactory': '../cedato/bidderFactory.js',
      '../src/config': '../cedato/config.js',
      '../src/Renderer': '../cedato/Renderer.js',
    },
    modules: [
      path.resolve('.'),
      'node_modules'
    ],
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    chunkFilename: '[hash]/js/[id].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve('./node_modules'), // required to prevent loader from choking non-Prebid.js node_modules
        use: [
          {
            loader: 'babel-loader',
            options: helpers.getAnalyticsOptions(),
          }
        ]
      },
      { // This makes sure babel-loader is ran on our intended Prebid.js modules that happen to be in node_modules
        test: /\.js$/,
        include: helpers.getArgModules().map(module => new RegExp('node_modules/' + module + '/')),
        use: [
          {
            loader: 'babel-loader',
          }
        ],
      }
    ]
  },
  plugins: [
    // new webpack.NormalModuleReplacementPlugin(
    //   /some\/path\/config\.development\.js/,
    //   './config.production.js'
    // ),
    // new RequireEnsureWithoutJsonp(),

    // // this plugin must be last so it can be easily removed for karma unit tests
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'prebid',
    //   filename: 'prebid-core.js',
    //   minChunks: function (module, count) {
    //     return !(count < 2 || neverBundle.indexOf(path.basename(module.resource)) !== -1)
    //   }
    // })
  ]
};
