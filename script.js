//making cursor circle move with cursor

const crsr = document.querySelector("#cursor");
const crsrBlur = document.querySelector("#cursorback");

document.addEventListener('mousemove',(e)=>{
    crsr.style.left=(e.x-(10))+"px"
    crsr.style.top=(e.y-(10))+"px"
    crsrBlur.style.left=(e.x-150)+"px"
    crsrBlur.style.top=(e.y-150)+"px"
});








//while using scrolltrigger remember that start abd end are the starting and ending points of trigger element while scoller start and end are of scrollers.

gsap.to('.navbar',{
    backgroundColor :"black",
    duration:0.5,
    height:'100px',
    scrollTrigger:{
        trigger: ".navbar",
        scroller:".main",
        // markers:true,
        scrub: 1,
        start:"top -10%",
        end:"top -11%"
    }
})

//for chnaging color of main on scrolling to page2

gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:'#page2',
        scroller:".main",
        start:"top 75%",
        // markers:true,
        scrub:1,
        end:"top 30%"

    }
})



let navH = document.querySelectorAll('.navbar h4');

navH.forEach((nav)=>{
    nav.addEventListener('mouseover',function(){
        
        crsr.style.backgroundColor='transparent';
        crsr.style.height='100px'
        crsr.style.width='100px'
        crsr.style.border="3px solid white"
        // crsr.style.transition="all 0.3s ease-in-out"
    })

    nav.addEventListener('mouseout',function(){
        crsr.style.backgroundColor='rgb(148, 182, 10)'
        // crsr.style.transition="transform 0.3s ease-in-out"
        crsr.style.height='20px'
        crsr.style.width='20px'
        crsr.style.border="0px"
    })
})