const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");

const serverHandle = (req, res) => {
  // set response header
  res.setHeader("Content-Type", "application/json");

  // get path
  const url = req.url;
  req.path = url.split("?")[0];

  // try blog router first
  const blogData = handleBlogRouter(req, res);
  if (blogData) {
    res.end(JSON.stringify(blogData));
    return;
  }

  // try user router second
  const userData = handleUserRouter(req, res);
  if (userData) {
    res.end(JSON.stringify(userData));
    return;
  }

  // not found
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not found");
};

module.exports = serverHandle;
