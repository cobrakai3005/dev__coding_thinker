const express = require("express");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();
app.get("/", (req, res) => {
  res.send(`<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
  <input type="text" name="name" />
  <input type="submit" />
</form>`);
});

app.post("/profile", upload.single("avatar"), (req, res, next) => {
  console.log(req.body.name);
  if (req.file) {
    console.log(req.file);
    console.log("File Saved SuccessFully");
  } else {
    console.log("Unabel to send File");
  }

  res.send("Done");
});

app.listen(8080, () => {});
