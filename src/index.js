const express = require('express');
const app = express();
const studentRouter = require('./routes/studentRoutes');
const auth = require("./middlewares/auth")

const mongoose = require('mongoose')
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config();

app.use(express.json())

app.use(cors())



const userRouter = require('./routes/userRoutes');
const { collection } = require('./models/user');

app.use('/users', userRouter);
app.use('/students',auth , studentRouter);

app.get("/", (req, res)=>{
    res.send("Smart card")
})

app.use(auth);

// app.use((req, res, next)=>{
//     console.log("HTTP Mehtod: " + req.method + ", URL : " + req.url);
//     next()
// })

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT, (req, res)=>{
    console.log('server listning on port : ' +  PORT)
})
}).catch((err)=>{
    console.log(err);
})


// route collection
