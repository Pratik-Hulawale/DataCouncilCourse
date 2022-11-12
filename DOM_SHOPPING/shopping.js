let List=document.querySelector("ul");
let buttton =document.querySelector("button");
let input=document.querySelector("#item");

buttton.addEventListener('click',function(){

    let text=input.value;
    input.value='';
    console.log(text);

    let listitem =document.createElement("li")
    let delbtn=document.createElement("BUTTON")
    let mains=document.createElement("section");
    delbtn.innerHTML="DELETE";
    mains.innerHTML=text;
    mains.appendChild(delbtn);

    listitem.appendChild(mains)
    List.appendChild(listitem);

    delbtn.addEventListener('click',function(){
        List.removeChild(listitem)

    })
});
