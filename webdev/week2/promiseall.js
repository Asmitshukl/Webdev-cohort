//method 1

// function wait(){
//     console.log("hi");
// }
// function wait2(){
//     console.log("hi there");
//     setTimeout(wait,5000);
// }
// function wait3(){
//     console.log("hello there");
//     setTimeout(wait2,3000);
// }
// setTimeout(wait3,1000);
 
//method 2 agar aaisa soch rahai ho toh aaise nahi hosakta ye wrong no hai

// function setimeoutpromisified(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms));
// }
// function wait(t){
//     console.log("hi");
//     setimeoutpromisified(t);
// }
// function wait2(t){
//     console.log("hi there");
//     setimeoutpromisified(t);
//     wait(5000);
// }
// function wait3(t){
//     console.log("hello");
//     setimeoutpromisified(t);
//     wait2(3000);
// }
// wait3(1000);

//the right way to do this is
function settimeoutpromisified(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
settimeoutpromisified(1000).then(function(){
    console.log("hi");
    settimeoutpromisified(3000).then(function(){
        console.log("hi there");
        settimeoutpromisified(5000).then(function(){
            console.log("hello there");
        })
    })
})