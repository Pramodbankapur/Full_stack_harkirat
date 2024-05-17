// const express = require("express")
// const app = express()
//  app.use(express.json())//this is use for extract a body .
// app.post("/inputvalidation", function(req,res){
//     const kidneys = req.body.kidneys;
//     const kidneyLength = kidneys.length;
//     res.send("you have "+ kidneyLength + " kidneys");
// });
// app.listen(3000);

// //input validatition need for a specific reason because a wrong input can also enter by clint so your responsablity to take care of a input validation. 

// // globalcatches are used for input validation

// // if above all things are not good going or server is not gooing good then you should use like below for input validation for not show any confidential things in your server.

// app.use(function(err,req,res,next){
//     res.json({
//         msg: "somthing up with our server please visit after some times..!"
//     })
//     console.log(err)
// })