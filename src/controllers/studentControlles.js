const studentModel = require("../models/student");
const routeModel = require("../models/routeCollection");

const getDetail = async(req, res)=>{
    try {
        const cityList = await routeModel.find({route_category: req.route_category})
        const notSubscribed = await routeModel.find({route_category: "Not_Subscribed"})
        res.status(200).json({cityList, notSubscribed})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
}

const studentDetails = async(req, res)=>{
    try {
        const studentDetail = await studentModel.find({enroll_number: req.body.enroll_number})
        res.status(200).json({studentDetail})
        // console.log(req.body.enroll_number);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
}

module.exports ={
    getDetail,
    studentDetails
}