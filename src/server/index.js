var path = require("path");
const express = require("express");
const cors = require("cors");
const mockAPIResponse = require("./mockAPI.js");

const app = express();

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function(req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(3001, function() {
  console.log("Example app listening on port 3001!");
});

app.get("/test", cors(), function(req, res) {
  res.send(mockAPIResponse);
});
