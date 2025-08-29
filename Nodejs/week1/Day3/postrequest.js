const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello Welcome");
  } else if (req.url === "/read" && req.method === "POST") {
    const data = req.body;
    console.log(data);

    let str = "";
    req.on("data", (chunk) => {
      str += chunk;
      // console.log(chunk);
    });

    console.log(str);

    req.on("end", () => {
      console.log(str);
    });

    res.end("Data ready successfully");
  } else if (req.url === "/data" && req.method === "GET") {
    const data = fs.readFileSync("1.json", "utf-8");

    res.end(data);
  } else {
    res.end("Not Founde");
  }
});

server.listen(3000, () => {
  console.log("Server is runnning on port 3000");
});
