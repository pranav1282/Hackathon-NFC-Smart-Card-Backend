const mongoose = require("mongoose")

const RouteSchema = mongoose.Schema({
    route_category : {
        type: String,
        // require: true
    },
    student_list : {
        type: Array,
        // require: true
    }
}, {timestamps : true}) 

module.exports = mongoose.model("Route", RouteSchema)