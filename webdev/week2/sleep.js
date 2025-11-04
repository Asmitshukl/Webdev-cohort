function settime(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
function callback(){
    console.log("hi there");
}
settime(3000).then(()=>callback());