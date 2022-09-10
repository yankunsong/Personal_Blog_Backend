const handleBlogRouter = (req, res) => {
  const method = req.method;

  // get list of blogs
  if (method === "GET" && req.path === "/api/blog/list") {
    return { msg: "get list of blogs API" };
  }

  // get blog detail
  if (method === "GET" && req.path === "/api/blog/detail") {
    return { msg: "get blog detail API" };
  }

  // create a new blog
  if (method === "POST" && req.path === "/api/blog/new") {
    return { msg: "create a new blog API" };
  }

  // update a blog
  if (method === "POST" && req.path === "/api/blog/update") {
    return { msg: "update a blog API" };
  }

  // delete a blog
  if (method === "POST" && req.path === "/api/blog/del") {
    return { msg: "delete a blog API" };
  }
};

module.exports = handleBlogRouter;
