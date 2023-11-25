require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const recipeRoutes = require("./routes/recipes");
const userRoutes = require("./routes/user");

// express app
const app = express();

// enables cors 
app.use(cors());

// middleware added to pass the req body to every request
app.use(express.json());

// middleware to log every request
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/recipes", recipeRoutes);
app.use("/api/user", userRoutes);

// to test the server is running or not
// app.get('/', (req, res) => {
//     res.json({msg: "Welcome to the app"});
// })

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`listening on port 4000 `);
    });
  })
  .catch((e) => {
    console.log(`db error`, e);
  });
