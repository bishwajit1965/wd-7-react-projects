const express = require("express");
const cors = require("cors");

require("dotenv").config();
app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("COFFEE STORE SERVER IS RUNNING");
});

app.listen(port, () => {
  console.log(`Coffee store server is running on port: ${port}`);
});
