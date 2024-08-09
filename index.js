const express = require("express");
const Location = require("./models/location.model.js");
const locationRoute = require("./routes/location.route.js");
const app = express();

const mongoose = require("mongoose");

//middle ware
app.use(express.json());
//routes
app.use("/api/locations", locationRoute);

mongoose
  .connect(
    "mongodb+srv://masongilldev:rRm4yvYFEnA1aGPd@nodeapi.ufu3u.mongodb.net/Node-API?retryWrites=true&w=majority&appName=nodeAPI"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB");
  });

app.get("/", (req, res) => {
  res.send("Hello from node apiiii");
});
