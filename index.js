const express = require("express");
const data = require("./links");
const { default: mongoose } = require("mongoose");

const app = express();

const port = 8000;

app.get("/", async function (req, res) {
  console.log(req.query);
  const link = req.query.link;
  const pass = req.query.pass;
  if (typeof link !== "string" || typeof pass !== "string") {
    // Return an error response if not
    return res.status(400).json({ error: "Invalid link or pass" });
  }
  await data.create({
    link: link,
    pass: pass,
  });
  return res.redirect(link);
});
app.get("/links", async function (req, res) {
  const response = await data.find();
  return res.send(response);
});
app.get("/ping", async function (req, res) {
  return res.status(200).json({
    message: "pong",
  });
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
