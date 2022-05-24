const express = require("express");
const app = express();
const port = 8800;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const route = require("./routes/index");
const cors = require("cors");

const petRoute = require("./routes/petroutes");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the MongoDB!");
  })
  .catch((error) => {
    console.log(`Can not connect to database, ${error}`);
  });

//midleware
app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
//Routes init
route(app);
app.use("/pet", petRoute);

app.listen(port, () => {
  console.log(`Backend server is listening at http://localhost:${port}`);
});
