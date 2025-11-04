// const prompt = require("prompt-sync")();
let add=0;
const d1=new Date();
// const userInput = prompt("the value upto:");
for(i=1;i<=100000000;i++){
    add+=i;
}
const d2=new Date();
const v=d2-d1;
console.log(v);