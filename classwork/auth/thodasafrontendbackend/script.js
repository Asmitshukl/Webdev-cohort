const express=require("express");
const jwt=require("jsonwebtoken");
const { message } = require("prompt");
const app=express();
app.use(express.json());

const JWT_SECRET="SALLBYMKCUS";

let users=[];

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})


app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    
    users.push({
        username:username,
        password:password
    });
    return res.status(200).send({
        message:"u are in"
    })
})

app.post("/signin",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const finduser=users.find((user)=>{
        if(user.username===username && password===user.password){
            return user;
        }
        else {
            return null;
        }
    })
    console.log(finduser);
    if(finduser){
        const token=jwt.sign({
            username:username
        },JWT_SECRET);
        console.log(token);
        return res.status(200).send({
            token:token
        });
    }
    else{
        return res.status(404).send({
            message:"u are not logged in"
        });
    }
})

function auth(req,res,next){
    const token=req.headers.token;
    console.log(token);
    const decodedtoken=jwt.verify(token,JWT_SECRET);
    const username=decodedtoken.username;
    console.log(username);
    if(username){
        req.username=username;
        console.log("here");
        next();
    }
    else{
        return res.status(401).send({
            message:"u are not a valid user"
        })
    }
}

app.get("/me",auth,(req,res)=>{
    const merauser=req.username;
    const finduser=users.find((user)=>{
        if(user.username===merauser){
            return user;
        }else{
            return null;
        }
    })
    if(finduser){
        console.log(finduser);
        return res.status(200).send({
            message:"u are something",
            finduser:finduser
        })
    }
    else{
        return res.status(400).send({
            message:"u are not valid"
        })
    }
})

app.listen(3000);

