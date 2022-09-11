const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require("../controller/blogController");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const handleBlogRouter = (req, res) => {
  const method = req.method;

  // get list of blogs
  if (method === "GET" && req.path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    const result = getList(author, keyword);
    return result.then((data) => {
      return new SuccessModel(data);
    });
  }

  // get blog detail
  if (method === "GET" && req.path === "/api/blog/detail") {
    const id = req.query.id;
    const result = getDetail(id);
    return result.then((data) => {
      return new SuccessModel(data);
    });
  }

  // create a new blog
  if (method === "POST" && req.path === "/api/blog/new") {
    req.body.author = "admin";
    const result = newBlog(req.body);
    return result.then((data) => {
      return new SuccessModel(data);
    });
  }

  // update a blog
  if (method === "POST" && req.path === "/api/blog/update") {
    const id = req.query.id;
    const result = updateBlog(id, req.body);
    return result.then((bool) => {
      if (bool) return new SuccessModel();
      return new ErrorModel("update failed");
    });
  }

  // delete a blog
  if (method === "POST" && req.path === "/api/blog/del") {
    const id = req.query.id;
    const author = req.query.author || "admin";
    const result = delBlog(id, author);
    return result.then((bool) => {
      if (bool) return new SuccessModel();
      return new ErrorModel("delete failed");
    });
  }
};

module.exports = handleBlogRouter;
