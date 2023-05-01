const express = require("express");
const connectDB = require("./backend/config/db");
const taskRoute = require("./backend/routes/TaskRoute.js");

require("dotenv").config();
const port = process.env.PORT;
const app = express();

connectDB();

app.use(express.json());

app.use("/api/v1/task", taskRoute);

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(port, () => {
  console.log("server listening at port :", port);
});
