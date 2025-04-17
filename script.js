

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



gsap.to("#quote1",{
    x:"10vw",
    y:40,
    scrollTrigger:{
        scroller:".main",
        trigger:"#page4 #quote",
        // start:"bottom 70%",
        // end:"top 30%",
        // markers:true,
        scrub:2
    }
})

gsap.to("#quote2",{
    x:"-10vw",
    y:-40,
    scrollTrigger:{
        scroller:".main",
        trigger:"#page4 #quote",
        // start:"bottom 70%",
        // end:"top 30%",
        // markers:true,
        scrub:1
    }
})


gsap.from("#aboutuscontainer",{
    y:30,
    opacity:0,
    scrollTrigger:{
        trigger:"#aboutuscontainer",
        scroller:".main",
        start:"top 70%",
        end:"bottom 90%",
        // markers:true,
        scrub:3
    }
})



gsap.from(".card",{
    scale:0.5,
    opacity:0,
    scrollTrigger:{
        scroller:".main",
        trigger:".card",
        start:"top 100%",
        end:"bottom 60%",
        // markers:true,
        scrub:1
    }
})

gsap.from("#boxes h1",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#box1",
        scroller:".main",
        // markers:true,
        start:"top 100%",
        end:"bottom 90%",
        scrub:2
    }
})




//making cursor circle move with cursor

const crsr = document.querySelector("#cursor");
const crsrBlur = document.querySelector("#cursorback");

document.addEventListener('mousemove',(e)=>{
    crsr.style.left=(e.x-(10))+"px"
    crsr.style.top=(e.y-(10))+"px"
    crsrBlur.style.left=(e.x-150)+"px"
    crsrBlur.style.top=(e.y-150)+"px"
});


let nav=document.querySelectorAll('.navbar');

let navH = document.querySelectorAll('.navbar h4');

//applying transistion on all makes laggy

navH.forEach((nav)=>{
    const p = nav.addEventListener('mouseenter',function(event){
        
        crsr.style.backgroundColor='transparent';
        crsr.style.scale="4"
        crsr.style.border="0.5px solid white"
        crsr.style.transition="scale 0.3s ease-in-out,background-color 0.3s ease-in-out,border 0.3s ease-in-out"
    })

    nav.addEventListener('mouseleave',function(event){
        crsr.style.backgroundColor='rgb(148, 182, 10)'
        // crsr.style.transition="transform 0.3s ease-in-out"
        crsr.style.scale="1"
        crsr.style.border="0px"
    })
})



const quotes=["Absolutely loved the experience! The staff looked after me ensured I was enjoying the range and gave me helpful tips to get the best out of my game. Digital screens to see my progress. I’ll be back 😁 🏌🏽‍♀️","Pleasantly surprised to discover the mini golf is open until 10pm during weekdays 😊 Always enjoy visit here, cafe does some nice goodies too 👍🏽","Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children enterntained during the holidays. Worth a visit if you haven’t been.","Definitely one of the best places to hit some golf balls, the TopTracer in most of the bays is a fantastic addition for the price! I’m yet to try the Mini golf but everyone seems to be having fun over there!","I absolutely love the adventure golf here. It seems every time I come they’ve added a new feature. My mum and I usually come together and it’s such a laugh. The designs for the holes are creative and the two different courses makes it more fun as you can complete both and compare your scores!"]

const p = document.querySelector("#nextquote p");



setInterval(function(){
    let i =Math.floor(Math.random()*quotes.length);
    p.innerHTML=quotes[i];
},5000);

