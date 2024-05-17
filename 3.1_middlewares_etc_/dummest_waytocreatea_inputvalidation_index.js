// const express = require("express");
// const app = express();

// console.log("helo");

// app.get("/health-checkup", function (req, res) {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if (!(username == "admin" ||password == "admin")) {
//         res.status(400).json({"msg" : "somthing wrong with your inputs.."})
//         return
//     }
//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(400).json({"msg": "somthig up with your inputs 2"})
//         return
//     }
//     // do somthig about your logic here..
//     res.json({
//         msg :"your two kidneys are fine..!"
//     })
// });

// app.listen(2000);