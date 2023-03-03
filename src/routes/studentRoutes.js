const express = require("express");
const { verifyCard } = require("../controllers/studentControlles");
const studentRouter = express.Router();

studentRouter.post("/", verifyCard);

module.exports = studentRouter;
