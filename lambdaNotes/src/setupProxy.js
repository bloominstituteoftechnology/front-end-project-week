const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/auth/google", { target: "http://localhost:7000" }, "/api/*", {
      target: "http://localhost:7000"
    })
  );
};
