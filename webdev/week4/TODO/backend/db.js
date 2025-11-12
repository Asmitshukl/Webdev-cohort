const mongoose=require("mongoose");
const schema=mongoose.Schema;
const ObjectId = schema.ObjectId;

const user=new schema({
    email:"string",
    password:"string",
});
const todo=new schema({
    userId: ObjectId,
    title:"string",
    description:"string",
    done:"boolean",
})

const usermodel=mongoose.model('users',user);
const todomodel=mongoose.model("todos",todo);

module.exports={
    usermodel:usermodel,
    todomodel:todomodel
}