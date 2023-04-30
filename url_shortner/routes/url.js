const express=require("express");
const {generateNewUrl}=require("../controllers/url")

const router=express.Router();

router.post("/",generateNewUrl()
    );

module.exports=router;



// Instead of this:

// app.post('/user/all',Controller.Create);
// You try for:

// app.post('/user/all', function(req, res){
//   Controller.Create
// });





