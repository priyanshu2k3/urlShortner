const shortid = require('shortid');

const URL=require('../models/url');       
async function generateNewUrl(req,res){
    const body=req.body;
    if (!body.url) return res.status(400).json({error:"url is required"});
    const shortId=shortid.generate();
    await URL.create({
        shortId:shortId,
        redirectUrl:body.url,
        visitHistory:[],

    })
return res.json({id:shortId});
}

module.exports={generateNewUrl,
}
