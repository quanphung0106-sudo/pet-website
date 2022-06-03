const authRouter = require("./auth");
const userRouter = require("./users");
const cartRouter = require("./cart");

function route(app) {
  app.use("/api/auth", authRouter);
  app.use("/api/users", userRouter);
  app.use("/api/cart", cartRouter);
}

module.exports = route;
