const express = require("express");
const data = require("./links");
const { default: mongoose } = require("mongoose");

const app = express();

const port = 8000;

app.get("/", async function (req, res) {
  console.log(req.query);
  const link = req.query.link;
  const pass = req.query.pass;
  await data.create({
    link: link,
    pass: pass,
  });
  res.send("Link Saved");
});
app.get("/links", async function (req, res) {
  const response = await data.find();
  return res.send(response);
});

app.listen(port, async function (err) {
  if (err) {
    console.log("Error in running the server", err);
  }
  await mongoose.connect(
    "mongodb+srv://wxomi:wxomi@mymapit.fcmcfds.mongodb.net/"
  );
  console.log("Yup!My Express Server is running on Port", port);
});
