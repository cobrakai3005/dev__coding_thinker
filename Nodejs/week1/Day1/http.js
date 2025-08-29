const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to my application");
    res.end();
  } else if (req.url === "/data") {
    res.end("Data ....");
  } else {
    res.end("Not Found");
  }
});

server.listen(8080, () => {
  console.log("Server is running ");
});
