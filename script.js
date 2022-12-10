window.onload=function(){

let menu=document.querySelector("#muestra-menu");
menu.addEventListener("click",muestra);
let menuizq= document.querySelector(".muestramenu");
let wrapper=document.querySelector(".wrapper");
let tapa= document.querySelector(".destapa");


function muestra(){
   if (menuizq.style.left=="-100px") {
      menuizq.style.left="0";
      wrapper.style.left="100px";
      document.body.style.overflow="hidden";
      tapa.classList.replace("destapa","tapa");
      
   } else {
      menuizq.style.left="-100px";
      wrapper.style.left="0";
      document.body.style.overflowY="scroll";
      tapa.classList.replace("tapa","destapa");

   }
   // tapa.classList.replace("destapa","tapa");
}

}