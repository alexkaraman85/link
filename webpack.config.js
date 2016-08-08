module.exports = {
    entry: {
      register: './src/pages/register/register-client.js',
      dashboard: './src/pages/dashboard/dashboard-client.js'
    },
    output: {
      path: 'src/assets',
      filename: "[name].bundle.js",
      chunkFilename: "[id].bundle.js"
    },
    module: {
      loaders: [
          { test: /\.css$/, loader: "style!css" }
      ]
    }
};
