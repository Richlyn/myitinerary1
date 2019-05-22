const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth");
const keys = required("./keys");

passport.use(
  new GoogleStrategy(
    {
      //options for strategy
      callbackURL: "/api/users/google/redirect",
      clientID: "keys.google.clientID",
      clientSecret: "keys.google.clientSecret"
    },
    () => {
      //passport callback function
    }
  )
);
