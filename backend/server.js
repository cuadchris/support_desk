const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
