const jwt = require("jsonwebtoken")
// const SECRET_KEY = process.env.SECRET_KEY
const SECRET_KEY = "NOTESAPI"

const auth = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if(token){
            token = token.split(" ")[1]
            let user = jwt.verify(token, SECRET_KEY)
            req.userID = user.id
            req.route_category = user.route_category
        }
        else{
            return res.status(401).json({message: "Unauthorized User -  no token"})
        }

        next()
    } catch (error) {
        res.status(401).json({message: "Unauthorized User"})
    }
}

module.exports = auth;