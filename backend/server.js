const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

//All routes from UserRoutes will have /api/users/ in front of it.
app.use("/api/users", require("./routes/UserRoutes"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
