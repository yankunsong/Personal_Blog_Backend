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
    return new SuccessModel(result);
  }

  // get blog detail
  if (method === "GET" && req.path === "/api/blog/detail") {
    const id = req.query.id;
    const result = getDetail(id);
    return new SuccessModel(result);
  }

  // create a new blog
  if (method === "POST" && req.path === "/api/blog/new") {
    const data = newBlog(req.body);
    return new SuccessModel(data);
  }

  // update a blog
  if (method === "POST" && req.path === "/api/blog/update") {
    const id = req.query.id;
    const res = updateBlog(id, req.body);
    if (res) return new SuccessModel(res);
    return new ErrorModel("update failed");
  }

  // delete a blog
  if (method === "POST" && req.path === "/api/blog/del") {
    const id = req.query.id;
    const res = delBlog(id, req.body);
    if (res) return new SuccessModel(res);
    return new ErrorModel("delete failed");
  }
};

module.exports = handleBlogRouter;
