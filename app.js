var express = require("express");
var path = require("path");

var app = express();
app.use(express.static(__dirname));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(process.env.PORT, function() {
  console.log("server is listening");
});
// process.env.PORT
