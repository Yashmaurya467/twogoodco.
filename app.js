function videoanimation(){
var videocon=document.querySelector(".video-container")
var playbtn=document.querySelector(".play")
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0,
    })
})
videocon.addEventListener("mousemove",function(dets){
    playbtn.style.left=dets.x+"px";
    playbtn.style.top=dets.y+"px";
})
gsap.from(".video-container",{
   scale:0.8,
   opacity:0,
   delay:1.5 
})
}
videoanimation();

function loadinganimation(){
gsap.from(".page1 h1",{
    y:30,
    opacity:0,
    stagger:1,
    duration:0.3
})
}
loadinganimation();
function cursoranimation(){
var cursor=document.querySelector(".cursor");
var page3=document.querySelector(".page3")
page3.addEventListener("mouseenter",function(){
    cursor.style.opacity=1;
})
page3.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x+"px"
    cursor.style.top=dets.y+"px";
})
page3.addEventListener("mouseleave",function(){
    cursor.style.opacity=0;
})
}
cursoranimation();

gsap.to(".nav-b",{
    y:-50,
    opacity:0,
    scrollTrigger:{
        trigger:".nav-b svg",
        scroller:"body",
        start:"top 0%",
        scrub:2
    }
})
gsap.to(".nav2",{
    opacity:0.5,
    scrollTrigger:{
        trigger:".nav2",
        scroller:"body",
        start:"top 3%",
        scrub:2,
    }
})
gsap.to(".nav2 i",{
    opacity:0,
    scrollTrigger:{
        trigger:".nav2 i",
        scroller:"body",
        start:"top 3%",
        scrub:2,
    }
})
gsap.to(".nav-a",{
    y:-50,
    opacity:1,
    scrollTrigger:{
        trigger:".nav-b ",
        scroller:"body",
        start:"top 0%",
        scrub:2,
    }
})
var box=document.querySelector(".box");
var h1=document.querySelector(".box h1")
box.addEventListener("mouseenter",function(){
    h1.style.opacity=1;
})
box.addEventListener("mouseleave",function(){
    h1.style.opacity=0;
})

function bluecursor(){
var cursor3=document.querySelector(".cursor3");
var page4=document.querySelector(".page4");
page4.addEventListener("mouseenter",function(){
    cursor3.style.opacity=1;
})
page4.addEventListener("mousemove",function(dets){
    cursor3.style.left=dets.x+"px";
    cursor3.style.top=dets.y+"px";
})
page4.addEventListener("mouseleave",function(){
    cursor3.style.opacity=0;
})
}
bluecursor()

var cursor2=document.querySelector(".cursor2");
var page2=document.querySelector(".page2");
page2.addEventListener("mouseenter",function(){
    cursor2.style.opacity=1;
})
page2.addEventListener("mousemove",function(dets){
    cursor2.style.left=dets.x+"px";
    cursor2.style.top=dets.y+"px";
})
page2.addEventListener("mouseleave",function(){
    cursor2.style.opacity=0;
})