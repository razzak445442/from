var Scound=document.querySelector(".ScoundDiv");
var singup=document.querySelector(".btn");
singup.addEventListener("click",function(){
    Scound.classList.add("extcss");
    singup.classList.add("extcss1");

    setTimeout(function(){
        Scound.classList.remove("extcss")
        singup.classList.remove("extcss1")
        Scound.classList.add("shaw");

    

    },5000)

});