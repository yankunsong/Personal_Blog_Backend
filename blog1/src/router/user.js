const handleUserRouter = (req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split("?")[0];

  // Login
  if (method === "POST" && path === "/api/user/login") {
    return { msg: "login API" };
  }
}

module.exports = handleUserRouter;