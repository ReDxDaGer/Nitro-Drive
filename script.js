const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function cursorAnimation(){
    var cursor = document.querySelector("#video-container")
    var btn = document.querySelector("#play")
    cursor.addEventListener("mouseenter",function(){
        gsap.to(btn,{
            scale:1,
            opacity:1
        })
    })
    cursor.addEventListener("mouseleave",function(){
        gsap.to(btn,{
            scale:0,
            opacity:0
        })
    })
    cursor.addEventListener("mousemove",function(dets){
        gsap.to(btn,{
            left:dets.x,
            top:dets.y
        })
    })
}
function headingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,    
        stagger:0.3
    })
    gsap.from("#page1 #video-container",{
        scale:0.5,
        opacity:0,
        delay:1.2,
        duration:0.9,  
        stagger:0.3
    })
}
function preloader(){
    var loader = document.getElementById("preloader")
    window.addEventListener('load',function(){
        loader.style.display = "none";
    })
}
function pagecrsr(){
    var pge = document.querySelector("#page3")
    var crsr = document.querySelector("#cursor")
    pge.addEventListener("mousemove",function(dets){
        gsap.to(crsr,{
            opacity:0.6,
            left:dets.x,
            top:dets.y
        })
    })
    pge.addEventListener("mouseleave",function(dets){
        gsap.to(crsr,{
            opacity:0,
        })
    })
}
preloader();
headingAnimation();
cursorAnimation();
pagecrsr();