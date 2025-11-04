const fs=require("fs");
function readthefile(send){
    fs.readFile("a.txt","utf-8",function(err,data){
        send(data);
    })
}
function readfile(filename){
    return new Promise(readthefile);
}
const p=readfile();
function callback(content){
    console.log(content);
}
p.then(callback);