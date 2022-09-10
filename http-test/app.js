const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const path = url.split("?")[0];
  const query = url.split("?")[1];
  const queryObj = querystring.parse(query);

  // set response header
  res.setHeader("Content-Type", "application/json");
  const resData = { method, url, path, queryObj };

  if (method === "GET") {
    res.end(JSON.stringify(resData));
  }

  if (method === "POST") {
    console.log(`Request content type is: ${req.headers["content-type"]}`);
    // accept data
    let body = "";
    req.on("data", (data) => {
      body += data.toString();
    });
    req.on("end", () => {
      resData.body = body;
      res.end(JSON.stringify(resData));
    });
  }
});
server.listen(8000);
console.log("Server is running on port 8000");
