const studentModel = require("../models/student");

const verifyCard = async (req, res) => {
  try {
    const enroll_number = req.body.enroll_number;
    const student_detail = await studentModel.findOne({
      enroll_number: req.body.enroll_number,
    });
    res.status(200).json({ student_detail });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  verifyCard,
};
