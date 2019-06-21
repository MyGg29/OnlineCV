const express = require('express');
const i18next = require('i18next');
const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');
const path = require('path');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App
const app = express();
var routes = require("./routes/myroutes.js");
i18next.use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
  debug: true,
  whitelist: ["en", "fr"],
  preload: ["en", "fr"],
  backend: {
    loadPath:"./locales/{{lng}}.json"
  }
});
app.set("views", path.join(__dirname, "views"));
app.set("view engine","pug");
app.use(routes);
app.use(express.static('src/public'));
/*
app.get('/', (req, res) => {
  res.send('Hello world\n');
});
*/

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
