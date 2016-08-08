var path = require('path');

module.exports = {
  app: {
    port: process.env.PORT || 8080,
    templates: {
      views: path.join(process.cwd(), 'src/pages'),
      extname: ".hbs",
      layoutsDir: path.join(process.cwd(), '*'),
      partialsDir: path.join(process.cwd(), '*')
    }
  }
}
