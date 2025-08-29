const express = require("express");

const cors = require("cors");
const studentRoutes = require("./routes/student.route");
const teachertRoutes = require("./routes/teacher.route");
const app = express();

//Middlware
app.use(cors());

app.use("/student", studentRoutes);
app.use("/teacher", teachertRoutes);

app.listen(8080, () => {
  console.log("Server Started");
});
