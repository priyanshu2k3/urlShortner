const crypto=require("crypto");
function GenerateUrl(mainUrl){
const hash= crypto.createHash("sha256");
const url=hash.update(mainUrl).digest("base64");
console.log(url)
return(url)}


GenerateUrl("www.google.com");
