const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
//const product = "./routes/product.js";
const router = require("../server/routes/product.js");

if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const app = express();
//the use of this router must come from routes
app.use("/api/product", router);

app.use(express.static(path.join(__dirname, "./public")));

app.use(express.json());
app.use(cookieParser());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

app.use((err, req, res, next) => {
  res.status(500).send({ error: err });
});

module.exports = app;
