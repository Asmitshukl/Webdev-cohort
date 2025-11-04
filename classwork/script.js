// let i=0;
// function increment(){
//     i++;
//     document.querySelector('h4').innerHTML=i;
// }
// setInterval(increment,1000);
function deleteit(){
    const del=document.querySelector("h4");
    const parentdel=del.parentNode
    parentdel.removeChild(del);
}
function addit(){
    const ele=document.querySelector("input");
    const val=ele.value;
    const divel=document.querySelector("div");
    divel.innerHTML=val;
    const parentofdivel=document.querySelector("body");
    parentofdivel.appendChild(val);
}