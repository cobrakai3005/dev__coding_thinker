const express = require("express");

const app = express();

app.use(express.json());

//Get Routes/Methods
app.get("/", (req, res) => {
  res.send("Welcome to my app");
});

//POST Rout / Methdo --- > create write operation

app.post("/add-student", (req, res) => {
  const data = req.body;
  console.log("Data: ", data);

  res.send("data read successfully");
});

app.listen(8080, () => {
  console.log("Server is running on prot 8080");
});
