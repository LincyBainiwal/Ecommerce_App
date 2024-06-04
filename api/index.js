const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extendend: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
const { error } = require("console");

mongoose
.connect("mongodb+srv://Lincy:LincyBainiwal@cluster0.deu3lbq.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to Mongodb")
})
.catch((err) => {
    console.log("Error occured", err);
});

app.listen(port, () => {
    console.log("Server is running");
});