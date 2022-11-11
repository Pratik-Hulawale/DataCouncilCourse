/* Buttons */
let red1=document.querySelector(".red-btn")
let yellow=document.querySelector(".yellow-btn")
let green=document.querySelector(".green-btn")

//Colors 
let redc=document.querySelector(".noactive1")
let greenc=document.querySelector(".noactive2")
let yellowc=document.querySelector(".noactive3")

red1.addEventListener('click',function(){
    redc.classList.add("red");
    greenc.classList.remove("green")
    yellowc.classList.remove("yellow")
});

green.addEventListener('click',function(){
    greenc.classList.add("green");
    redc.classList.remove("red")
    yellowc.classList.remove("yellow")
});

yellow.addEventListener('click',function(){
    yellowc.classList.add("yellow");
    redc.classList.remove("red")
    greenc.classList.remove("green")
});

