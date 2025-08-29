const express = require("express");

const { dbConnect, User } = require("./db");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcom to my app");
});

app.post("/create", async (req, res) => {
  const { name, age } = req.body;
  try {
    const user = new User.create({ name, age });
    res.send("User Save Successfully");
  } catch (er) {
    res.send("Somthing went wrong");
  }
});
app.get("/read", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (er) {
    console.log(er);
    res.send("Somthing went wrong");
  }
});
app.get("/read/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findById(id);
    res.json(users);
  } catch (er) {
    console.log(er);
    res.send("Somthing went wrong");
  }
});
app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    await User.findByIdAndUpdate(id, { name, age });
    res.send("User Data Updated");
  } catch (er) {
    console.log(er);
    res.send("Somthing went wrong");
  }
});
app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await User.findByIdAndDelete(id);
    res.send("User Data Deleted");
  } catch (er) {
    console.log(er);
    res.send("Somthing went wrong");
  }
});
app.listen(3000, () => {
  dbConnect();
  console.log("Server is Running");
});
