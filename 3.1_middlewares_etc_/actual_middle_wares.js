// const express = require("express");

// const app = express();

// let numberOfRequest = 0;

// function calculateRequests (req ,res ,next){
    
//     numberOfRequest++;
//     console.log(numberOfRequest);
//     next();
// }
// app.use(calculateRequests)

// function userMiddlewares(req ,res,next){
//     if( username !="admin" && password !="admin"){
//         res.status(403).json({
//             msg: "Incorrect inputs..!"
//         }) 
//     }
//     else{
//         next();
//     }
// };

// function kidneyMiddlewares (req ,res ,next){
//     if(kidneyId !=1 || kidneyId !=2){
//         res.status(403).json({
//             msg:"incorrect id ..!"
//         })
//     }
//     else{
//         next();
//     }
// }


// app.get("/middlewares",userMiddlewares ,kidneyMiddlewares ,function(req ,res){
//     //do some logic here..!
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;
    
//     res.send("no need to worry your heart is healthy  ..")
// })



// console.log("Running..!")
// app.listen(2001);