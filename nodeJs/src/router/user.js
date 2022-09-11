const { loginCheck } = require("../controller/userController");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleUserRouter = (req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split("?")[0];

  // Login
  if (method === "POST" && path === "/api/user/login") {
    const { username, password } = req.body;
    const result = loginCheck(username, password);
    return result.then((data) => {
      if (data.username) return new SuccessModel(data);
      return new ErrorModel("login failed");
    });
  }
};

module.exports = handleUserRouter;
