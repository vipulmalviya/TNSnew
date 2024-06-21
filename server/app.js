const config = require('config');
const dotenv = require('dotenv');
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const usersRouter = require("./routes/usersRouter");
const movieRouter = require("./routes/movieRouter");
const watchlistRouter = require("./routes/watchlistRouter");
const userModal = require("./models/userModal");
const cors = require('cors');
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

const PORT = 3000;

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const callbackUrl = `${process.env.BASE_URL}/auth/google/callback`;
const clientUrl = process.env.CLIENT_URL;

console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

app.use(express.json());
// const _dirname= path.dirname("")
// const buildpath = path.join(_dirname,"../client/dist")
// app.use(express.static(buildpath));

app.use(cors({
  origin: ['http://localhost:5173', 'https://thenextstream.in'],
  credentials: true,   
  optionsSuccessStatus: 200
}));


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy({
    clientID: clientId,
    clientSecret: clientSecret,
    callbackURL: callbackUrl,
    scope: ["profile", "email"],
  },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await userModal.findOne({ googleId: profile.id });
        if (!user) {
          user = new userModal({
            googleId: profile.id,
            email: profile.emails[0].value
          });
          await user.save();
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get("/auth/google/", passport.authenticate("google", { scope: ["profile", "email"] }));
app.get("/auth/google/callback", passport.authenticate("google", {
  successRedirect: `${clientUrl}/home`,
  failureRedirect: `${clientUrl}/login`,
}));

app.get("/login/success", async (req, res) => {
  if (req.user) {
    res.status(200).json({ message: "User logged in", user: req.user });
  } else {
    res.status(400).json({ message: "Not authorized" });
  }
});

app.use("/", usersRouter);
app.use('/', movieRouter);
app.use('/', watchlistRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
