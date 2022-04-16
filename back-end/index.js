const express = require("express");
const app = express();
const port = 8800;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const path = require("path");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to the MongoDB!");
  }
);

//midleware
app.use(express.json());
app.use(helmet());

app.use('/api/users', (req, res) => {
    res.send("Hello guys!");
})

app.listen(port, () => {
    console.log(`Backend server is listening at http://localhost:${port}`);
});
