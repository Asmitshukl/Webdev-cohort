const express=require("express");
const jwt=require("jsonwbetoken");
const { message } = require("prompt");
const JWT_SECRET="xyz";
const app=express();
app.use(express.json());

const users=[];

app.post("/signup",()=>{
    const email=req.body.email;
    const password=req.body.password;
    const confirmpassword=req.body.confirmpassword;
    if(password===confirmpassword){
        users.push({
        email:email,
        password:password
        })
        res.json({
            message:"u are in"
        })
    }
    else{
        return res.json({
            message:"password and confirm password is not correct"
        })
    }
})
app.post("/sigin",(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const finduser=users.find((user)=>{
        if(user.email===email){
            return user;
        }
        else{
            return null;
        }
    });
    if(finduser){
        const token=jwt.sign({
            email:email
        },JWT_SECRET);
        res.json({
            user:finduser,
            token:token
        })
    }
    else{
        return res.json({
            message:"user is not found"
        });
    }
})


