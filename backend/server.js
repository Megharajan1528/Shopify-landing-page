const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/content", (req, res) => {
  const data = JSON.parse(fs.readFileSync("data.json"));
  res.json(data);
});

app.post("/content", (req, res) => {
  fs.writeFileSync("data.json", JSON.stringify(req.body, null, 2));
  res.send({ message: "Content updated successfully" });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
