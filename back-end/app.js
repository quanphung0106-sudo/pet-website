const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const productRouter = require("./routers/product.router");
const cors = require('cors')

require("dotenv/config");
const api = process.env.API_URL;
const connect = process.env.MONGO;
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(cors())
app.options('*',cors())

app.use(`${api}/products`, productRouter);

//connect Database
mongoose
  .connect(connect)
  .then(() => {
    console.log("mongo connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8080, () => {
  console.log("server is running");
});
