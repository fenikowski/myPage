const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + "/build/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(express.static(path.join(__dirname, "build")));

app.get("/cv-es", function(req, res) {
  res.attachment("Igor Fenikowski CV.pdf", "build", "cvspanish.pdf");
  res.end();
});

app.get("/cv-en", function(req, res) {
  res.attachment("Igor Fenikowski CV.pdf", "build", "cvspanish.pdf");
  res.end();
});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port);
