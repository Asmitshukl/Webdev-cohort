// class rectangle{
//     constructor(w,h){
//         this.w=w;
//         this.h=h;
//     }
//     area(){
//         console.log("area: ",this.w*this.h);
//     }
// }
// const a=new rectangle(4,5);
// console.log(a.area());
// const map=new Map();
// map.set('name','asmit');
// map.set('age',20);
// console.log(map.get('name'));
// function promosified(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms));
// }
// function callback(){
//     console.log("3 sec have passed");
// }
// promosified(3000);
// setTimeout(callback,3000);

// function promisified(ms){
//  return new Promise(resovle=>setTimeout(resovle,ms));
// }
// function timeout(resolve){
//     setTimeout(resolve,3000);
// }
// timeout(promisified(3000).then(callback));
// function t(resolve){
//     return setTimeout(resolve,3000);
// }
// function main(){
//     console.log("my time is 3s");
// }
// t(main);
// const fs=require("fs");
// // const ws=requrie("")
// function setimeout(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// function readfile(){
//     const val=fs.readFileSync("a.txt","utf-8");
//     console.log(val);
// }
// function writefile(){
//     fs.writeFileSync("a.txt","your name is asmit");; 
// }
// setimeout(4000).then(writefile);

// const fs=require("fs");

// function readthefile(sendthefinalvalue){
//     fs.readFile("a.txt","utf-8",function(err,data){
//         sendthefinalvalue(data);
//     })
// }

// function readfile(filename){
//     return new Promise(readthefile);
// }

// const p=readfile("a.txt");

// function callback(content){
//     console.log(content);
// }
// p.then(callback);

// const fs=require("fs");
// fs.readFile("a.txt","utf-8",function(err,content){
//     console.log(content);
// });

// function run(){
//     console.log("i will run");
// }
// setTimeout(run,3000);
// console.log("i will run immediatedaly");
// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function solve() {
// 	await setTimeoutPromisified(1000);
// 	console.log("hi");
// 	await setTimeoutPromisified(3000);
// 	console.log("hello");
// 	await setTimeoutPromisified(5000);
// 	console.log("hi there");
// }

// solve();
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
	console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback)
