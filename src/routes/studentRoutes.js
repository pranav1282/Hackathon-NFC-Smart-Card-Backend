const express = require("express");
const {
    getDetail,
    studentDetails
} = require("../controllers/studentControlles")
const studentRouter = express.Router();

studentRouter.get("/", getDetail);

studentRouter.post("/details", studentDetails);

module.exports = studentRouter;