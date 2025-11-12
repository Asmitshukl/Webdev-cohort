const express=require("express");
const app=express();
const { message } = require("prompt");
app.use(express.json());

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

const users=[];

app.post("/signup",(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;

    users.push({
        username,
        password
    });
    res.json({
        message:"u are in"
    });
})

app.post("/signin",(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    let found=users.find((u)=>{
        if(u.username===username && u.password===password){
            return true;
        }
        else {
            return false;
        } 
    });
    if(found){
        let token=generateToken();
        console.log(token);
        found.token=token;
        res.json({
            token:token
        })
    }
    else{
        return res.status(400).json({
            message:"u are fake"
        });
    }
    console.log(users);
})
app.listen(3000);