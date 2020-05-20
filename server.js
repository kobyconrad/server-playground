const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(cors());

app.get("/get", (req, res) => {
  //   console.log(req);
  res.send("Hello World!");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
