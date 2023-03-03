const mongoose = require("mongoose")

const StudentSchema = mongoose.Schema({
    name : {
        type: String
    },
    contact : {
        type: Number
    },
    enroll_number : {
        type: String
    },
    route_category : {
        type: String
    }
})

module.exports = mongoose.model("Student", StudentSchema)