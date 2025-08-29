const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.write("Hello World");
  res.end();
});

app.patch("/update/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  console.log(data);

  const CompleteData = JSON.parse(fs.readFileSync("1.json", "utf-8"));
  const studentData = CompleteData.students;
  const newData = studentData.map((el) => {
    if (el.id === id) {
      return { ...el, ...data };
    } else {
      return el;
    }
  });
  console.log(newData);

  CompleteData.students = newData;
  fs.writeFileSync("1.json", JSON.stringify(CompleteData));
  res.send(CompleteData);
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  console.log(data);

  const CompleteData = JSON.parse(fs.readFileSync("1.json", "utf-8"));
  const studentData = CompleteData.students;
  const newData = studentData.filter((el) => el.id !== id);
  console.log(newData);

  CompleteData.students = newData;
  fs.writeFileSync("1.json", JSON.stringify(CompleteData));
  res.send(CompleteData);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
