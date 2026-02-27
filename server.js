const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "https://guileless-pie-6f9d7d.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

app.get("/api/message", (req, res) => {
  res.json({ text: "hello from node.js backend" });
});

app.listen(process.env.PORT, () => {
  console.log("server is runong at http://localhost:5000");
});
