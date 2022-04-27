const express = require("express");
const app = express();
const port = 8800;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const route = require("./routes/index");
const cors = require("cors");
const session = require("express-session");
const cookieSession = require("cookie-session");
const passport = require("passport");
// const passportSetup = require("../passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const User = require("./app/models/User");
const User = mongoose.model("User");

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

const keys = {
  GOOGLE_CLIENT_ID:
    "882914818879-hiujdoq6gtg66pgaf1p73qidobf1bd0q.apps.googleusercontent.com",
  GOOGLE_CLIENT_SECRET: "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",
}

passport.use(
  new GoogleStrategy(
    {
      clientID:
      keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, profile);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

//midleware
app.use(express.json());
app.use(helmet());
app.use(
  cookieSession({
    name: "session",
    keys: ["quan"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "hihi",
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
//Routes init
route(app);

app.listen(port, () => {
  console.log(`Backend server is listening at http://localhost:${port}`);
});
