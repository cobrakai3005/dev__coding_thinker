const express = require("express");

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.write("Hello World");
  res.end();
});

app.get("/data", (req, res) => {
  res.send("data ................");
});
app.get("/read", (req, res) => {
  res.send({ msg: "Reading.....", data: "data.........." });
});
app.get("/find", (req, res) => {
  res.status(200).json({ msg: "Reading.....", data: "data.........." });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
