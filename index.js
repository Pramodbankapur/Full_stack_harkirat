const express = require("express");
const app = express();

const users = [{
        name : "Jhon",
        kidneys : [{
            healthy :false
        }]
}];
app.use(express.json());  
//middlewares.
//filers in js.
//query parameters are very much used in get requests.that is after ? mark.
app.get ("/",function(req , res){
    const Jhonkidneys=users[0].kidneys;
    const numberOfKidneys=Jhonkidneys.lenght;
    let numberOfHealthyKidneys = 0;
    for (let i=0; i<Jhonkidneys.lenght; i++){
        if (Jhonkidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys +1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys,
    })
})


app.post('/',function(req ,res){
    const isHealthy= req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg:"done post.!"
    })
})
app.listen(3000);