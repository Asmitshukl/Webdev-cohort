function promisified(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
function call(){
    console.log("promise has resolved");
}
promisified(3000).then(call);