const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const petRoute = require("./routes/petroutes");

dotenv.config();

// Connect DB
mongoose
  .connect(
    // `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@vs-shop.vks61.mongodb.net/VS-Shop?retryWrites=true&w=majority`,
    `mongodb+srv://vsshop:12345@vs-shop.vks61.mongodb.net/VS-Shop?retryWrites=true&w=majority`,
    {
      //   useCreateIndex: true,
      useNewUrlParser: true,
      //   useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(cors());

// Route
app.use("/pet", petRoute);

app.listen(5000, () => console.log("Server is running"));
