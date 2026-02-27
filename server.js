const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/message", (req, res) => {
  res.json({ text: "hello from node.js backend" });
});

app.listen(process.env.PORT, () => {
  console.log("server is runong at http://localhost:5000");
});
