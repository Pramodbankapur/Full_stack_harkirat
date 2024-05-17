const express = require("express");
const app = express();
const zod = require("zod")
const schema = zod.array(zod.number());

app.use(express.json());

app.post("/zod", function(req,res){
    // cars= [1 ,2]
    const cars = req.body.cars;
    const response = schema.safeParse(cars)
    res.send({
        response
    })
});

app.listen(3000);