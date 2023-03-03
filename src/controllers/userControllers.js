const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const { json } = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// const SECRET_KEY = "NOTESAPI"

const signup = async (req, res) => {
  const { username, email, password, contact, route_category, bus_number } =
    req.body;
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await userModel.create({
      email: email,
      password: hashedPassword,
      username: username,
      contact: contact,
      route_category: route_category,
      bus_number: bus_number,
    });

    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
        route_category: result.route_category,
      },
      process.env.SECRET_KEY
    );

    res.status(201).json({
      user: result,
      token: token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
const signin = async (req, res) => {
  const { email, password, contact } = req.body;
  try {
    var existingUser;
    if (contact) {
      existingUser = await userModel.findOne({ contact: contact });
    } else if (email) {
      existingUser = await userModel.findOne({ email: email });
    }
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);

    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
        route_category: existingUser.route_category,
      },
      process.env.SECRET_KEY
    );

    res.status(200).json({
      user: existingUser,
      token: token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  signin,
  signup,
};
