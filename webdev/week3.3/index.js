
function addtask(){
    console.log("clicked");
    const div=document.createElement("div");
    div.className="boxdiv";
    const h2=document.createElement("h2");
    h2.className="boxh2";
    const h4=document.createElement("h4");
    h4.className="boxh4";
    h2.innerHTML=document.querySelector(".a").value;
    h4.innerHTML=document.querySelector(".b").value;

    div.appendChild(h2);
    div.appendChild(h4);

    const main=document.querySelector(".to-do");
    main.appendChild(div);



    const inadd=document.getElementsByClassName("btn");
}