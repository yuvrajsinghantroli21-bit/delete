const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/message", (req, res) => {
  res.json({ text: "hello from node.js backend" });
});

app.listen(5000, () => {
  console.log("server is runong at http://localhost:5000");
});
