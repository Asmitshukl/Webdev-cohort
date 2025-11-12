const axios=require("axios");


async function main(){
    const response=await axios.get("https://httpdump.app/dumps/6f63fcaa-1fc3-4439-80dd-787bd957a90d",{
        data:{
            username:"asmit",
        },
        header:{
            "authoriztion":"asmit"
        }
    });
}
main();