const { loginCheck } = require("../controller/userController");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleUserRouter = (req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split("?")[0];

  // Login
  if (method === "POST" && path === "/api/user/login") {
    const { username, password } = req.body;
    const res = loginCheck(username, password);
    if (res) return new SuccessModel();
    return new ErrorModel("login failed");
  }
};

module.exports =  handleUserRouter ;
