// function settimeout(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms));
// }
// function callback(i){
//     console.log(i);
// }
// for(let i=0;i<100;i++){
//     settimeout(1000*i).then(()=>callback(i));
// }
let counter = 0; 

const updateCounter = () => {
  counter++; 
  console.log(counter); 

  setTimeout(updateCounter, 1000);
};

updateCounter();