const express = require('express')
//import Sha256 from './sha256'
const {urlRouter}=require("./routes/url.js");
const {connectToMongoDb}=require("./connect/connect.js");


const app = express()
const port = 3000
connectToMongoDb("mongodb://localhost:127.0.0.1:27017/shorturl")
.then(()=>{consle.log("connected")})

app.get('/', async(req, res) => {
    console.log(req.body)
    //await Sha256(req.body)
})

app.use("/url",urlRouter());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 