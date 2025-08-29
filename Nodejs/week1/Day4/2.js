const express = require("express");

const app = express();

//Middleware Chain
const middleware = (req, res, next) => {
  console.log("1");
  next();
  console.log("2");
};

//Method to use Middleware
app.use(middleware);

app.use((req, res, next) => {
  console.log("3");
  next();
  console.log("4");
});

//Time Logger Middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();

  const end = Date.now();

  console.log(end - start, "MS");
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(3000, () => {
  console.log("Server is running Port");
});
