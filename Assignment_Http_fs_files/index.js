const express = require("express");
const fs = require("fs");
const app = express();
app.get("/files/:CHAD",function(req,res){
    const name =req.params.CHAD;
    console.log(name);
    fs.readFile(name ,"UTF-8" ,function(err,data){
        res.json({
            data
        });
    })
});
app.listen(3002);