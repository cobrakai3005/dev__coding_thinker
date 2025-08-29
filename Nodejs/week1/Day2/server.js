const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my app");
  } else if (req.url === "/data") {
    fs.readFile("./1.txt", "utf-8", (er, data) => {
      if (er) {
        console.log(err);
        res.end("Coud not get File");
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/create") {
    fs.writeFile("1.txt", "Himansuh", (err) => {
      if (err) {
        console.log(err);
        res.end("Coud not  Fwriteile");
      } else {
        res.end("success");
      }
    });
  } else if (req.url === "/Wstream") {
    const data = fs.createReadStream("2.txt", "utf-8");
    data.write("Welcome to data -2 of node js");
    res.end("FFile created successfully");
  } else if (req.url === "/Rstream") {
    const data = fs.createReadStream("2.txt", "utf-8");
    data.pipe(res);
    data.end("FFile created successfully");
  } else {
    res.end("Not founf");
  }
});
server.listen(3000);
