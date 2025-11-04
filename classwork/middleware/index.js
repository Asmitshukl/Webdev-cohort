const express =require("express");

const app=express();

app.get("/ride1",function(req,res){
    res.json({
        msg:"you have succesfully rided"
    })
})

app.listen(3000);