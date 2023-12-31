/* eslint-disable no-restricted-syntax */
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    methods: "GET,POST,PATCH,DELETE,OPTIONS",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
const port = process.env.APP_PORT || 5000;
const { setUpRoutes } = require("./src/routes/index");

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

setUpRoutes(app);
