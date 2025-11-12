const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
const JWT_SECRET="ilovek";
app.use(express.json());
const {usermodel,todomodel}=require("./db");

const mongoose=require("mongoose");
const { message } = require("prompt");
mongoose.connect("mongodb+srv://Cluster0:CT1XjsMEMGtsrQC0@cluster0.ox0lifc.mongodb.net/todo-app")

app.post("/signup",async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    await usermodel.create({
        email:email,
        password:password,
    })
    res.json({
        message:"u are in",
    })
})

app.post("/signin",async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const user=await usermodel.findOne({
        email:email,
        password:password
    })
    if(user){
        const token=jwt.sign({
            id:user._id.toString(),
        },JWT_SECRET)
        return res.json({
            token:token,
        })
    }
    else{
        return res.json({
            message:"u are not logged in"
        })
    }
})

function auth(req,res,next){
    // const token=localStorage.getItem('token');
    const token=req.headers.token;
    console.log(token);
    const decodedata=jwt.verify(token,JWT_SECRET);
    if(decodedata){
        req.userId=decodedata.id;
        next();
    }
    else{
        return res.json({
            message:"u are an unauthorized person"
        })
    }
}

app.post("/todos", auth,async (req,res)=>{
    const userId=req.userId;
    const title=req.body.title;
    const description=req.body.description;
    await todomodel.create({
        userId:userId,
        title:title,
        description:description
    });
    res.json({
        message:"todo created"
    })
})

app.get("/todo",auth,async(req,res)=>{
    try{
        const userId=req.userId;
        const todos=await todomodel.find({
        userId,
    })
    todos.forEach((user)=>{
        console.log("title: "+ user.title);
        console.log("title: "+ user.description);
    })
    return
    }catch(e){
    res.json({
        message:"the id is invalid",
    });
    }
})

app.listen(3000);
console.log(`app is running on port ${3000}`)