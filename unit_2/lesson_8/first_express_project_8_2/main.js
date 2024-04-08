"use strict";

const port = 3000,
  express = require("express"),
  app = express();
app
  .get("/", (req, res) => {
    console.log("req.param", req.params);
    console.log("req.body", req.body);
    console.log("req.url", req.url);
    console.log("req.query", req.query);
    res.send("Hello, Universe!");
  })
  .listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
  });
