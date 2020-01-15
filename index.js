const express = require('express');
const i18next = require('i18next');
const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');
const path = require('path');
// Constants
const PORT = 80;
const HOST = '0.0.0.0';
// App
const app = express();
var routes = require("./src/routes/myroutes.js");
i18next.use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
  debug: false,
  whitelist: ["en", "fr"],
  fallbackLng: ["fr"],
  preload: ["en", "fr"],
  backend: {
    loadPath: __dirname + "/src/locales/{{lng}}.json"
  }
});
app.set("views", __dirname + "/src/views");
app.set("view engine","pug");
app.use(i18nextMiddleware.handle(i18next));
app.use(routes);
app.use(express.static('src/public'));


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
