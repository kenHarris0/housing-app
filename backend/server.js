const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
const route = require("./routes/routes");

const app = express();
app.use(cors());
app.use(express.json());

connection();
app.use("/login", route);
app.listen(5000, () => {
  console.log("Server Running");
});
