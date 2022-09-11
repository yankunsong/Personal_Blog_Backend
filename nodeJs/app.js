const querystring = require("querystring");
const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");

// handle POST request
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      resolve({});
      return;
    }
    if (req.headers["content-type"] !== "application/json") {
      resolve({});
      return;
    }
    let postData = "";
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });
    req.on("end", () => {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(JSON.parse(postData));
    });
  });
  return promise;
};

const serverHandle = (req, res) => {
  // set response header
  res.setHeader("Content-Type", "application/json");

  // get path
  const url = req.url;
  req.path = url.split("?")[0];

  // get query
  req.query = querystring.parse(url.split("?")[1]);

  getPostData(req).then((postData) => {
    req.body = postData; 
    
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
  });
};

module.exports = serverHandle;
