const updatecounter=()=>{
    // t++;
    let c=new Date();
    let t=c.toLocaleTimeString();
    console.log(t);
}
setInterval(updatecounter,1000);