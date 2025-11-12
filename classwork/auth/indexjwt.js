const express=require("express");
const jwt=require("jsonwebtoken");
const { message } = require("prompt");
const JWT_SECRET="aabrakadabra";
const app=express();
app.use(express.json());

let users=[];

function auth(req,res,next){
    const token=req.headers.token;
    const decodedtoken=jwt.verify(token,JWT_SECRET);
    const username=decodedtoken.username;
    const check=users.find((user)=>{
        if(user.username===username){
            return true;
        }
        else return false;
    })
    if(check){
        return res.json(401).send({
            message:"already loogged in"
        })
    }
    else{
        req.user=username;
        next();
    }
}
// app.use(auth);
app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    //check if the user is already present or not if present dont create an id

    users.push({
        username:username,
        password:password
    });
    res.json({
        message:"u ar in"
    });
});

app.post("/signin",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const finduser=users.find((user)=>{
        if(user.username===username && user.password===password){
            return true;
        }
        else{
            return false;
        }
    })
    if(finduser){
        const token=jwt.sign({
            username:username
        },JWT_SECRET);
        res.json({
            token:token
        })
    }
    else{
        res.status(403).send({
            message:"invalid password"
        })
    }
    console.log(users)
})
// app.use(auth);
app.get("/me",(req,res)=>{
    const token=req.headers.token;
    const decodedinformation=jwt.verify(token,JWT_SECRET);
    console.log(decodedinformation);
    const username=decodedinformation.username;
    let finduser=users.find((user)=>{
        if(username===user.username){
            return user.username;
        }
        else{
            return null;
        }
    })
    if(finduser){
        res.json({
            username:finduser.username,
            password:finduser.password,
        })
    }
    else{
        res.json({
            message:"token invalid"
        })
    }
})
app.listen(3000);