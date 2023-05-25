const express = require("express");

const app = express();

const port = 8000;

app.get("/", function (req, res) {
  console.log(req.query);
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server", err);
  }
  console.log("Yup!My Express Server is running on Port", port);
});
