const express = require("express");
const path = require('path');
const {
  applyHbs
} = require('./template');

const app = express();
const config = require('./settings');

applyHbs(app)

app.use(express.static("dist"));

// app.use(["/morty"], function(request, response) {
//   let reqPath = path.join(__dirname, "./");
//   response.sendFile(
//     path.resolve(reqPath, "index.html")
//   );
// });

app.get(["/api"], function(request, response) {
  setTimeout(() =>
  response
      .header('Content-Type', 'application/json')
      .send(
        { text: 'Hello world!' }
      )
  , 1000);
  });

  app.use(["/"], function (request, response) {

    response.render("index.hbs", {
        ...config,
    });
});

app.listen(3000, () => console.log("Listening on port 3000!"));

module.exports = app;