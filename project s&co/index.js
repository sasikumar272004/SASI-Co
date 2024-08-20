







var tl = gsap.timeline()





function page1animation (){
    
gsap.from("nav h1",{
   
    y:30,
    delay:3.5,
    opacity:0,
    duration:.5, 
    stagger:.4

})

gsap.from(" a",{
    x:20,
    y:30,
    delay:3.5,
    opacity:0,
    duration:.5, 
    stagger:.2
    
})



gsap.from(".one" ,{
    opacity:0,
    y:100, 
    delay:4,
    duration:.5,
    stagger:.1

})
gsap.from(".two",{
    opacity:0,
    y:100,    
    delay:4,
    duration:.5,
    stagger:-.1


})
gsap.to(".sco span", {
    rotate: 360,
    duration: 0.8,
    delay: 1,
    repeat: -1,
    repeatDelay:3,
    ease: "power2.inOut"
  });
  gsap.to(".side", {
    rotateX: 360,
    duration: 0.8,
    delay: 1,
    repeat: -1,
    repeatDelay:3,
    ease: "power2.inOut"
  });

  gsap.to(".F", {
    rotateY: 360,
    duration: 0.8,
    delay: 1,
    repeat: -1,
    repeatDelay:3,
    ease: "power2.inOut"
  });

  gsap.from(".c",{
    x:-80,
   
    opacity:0,
    duration:.3,
    stagger:.5,
    delay:5.3,
})  
gsap.from(".F",{
    x:-80,
 
    opacity:0,
    duration:.3,
    stagger:.5,
    delay:5.5
})  
gsap.from(".t",{
    x:-80,
   
    opacity:0,
    duration:.3,
    stagger:.5,
    delay:5.7
})  

gsap.from(".box img",{
    opacity:0,
    y:-70,    
    duration:2,
    ease:"bounce.out",
    delay:5,

})





gsap.to(".sun",{
    scale:2.8,
    scrollTrigger:{
        trigger:".page1",
        scoller:"body",
        start:"top 0%",
        scrub:5

    }
})
gsap.to(".roc",{
    scale:2,
    y:-1500,
    scrollTrigger:{
        trigger:".page1",
        scoller:"body",
        start:"top 0%",
        scrub:3

    }
})
gsap.to(".sco",{
    y:500,
    opacity:0,
    scrollTrigger:{
        trigger:".page1",
        scoller:"body",
        start:"top 0%",
        scrub:3

    }
})

gsap.to(".side",{
    x:100,
    scrollTrigger:{
        trigger:".page1",
        scoller:"body",
        start:"top 0%",
        scrub:3

    }
})



gsap.to(".cap",{
    y:500,
    opacity:0,    
    scrollTrigger:{
        trigger:".page1",
        scoller:"body",
        start:"top 0%",
        scrub:3

    }
})

 
}
page1animation();
// page2 
function page2animation(){
    

gsap.from(".roc2",{
    opacity:0,

    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        start:"80%",
        scrub:1

    }  
})
gsap.to(".roc2",{
    rotate:80,
    y:-700,
    x:800,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"-2%",
        scrub:1

    }  
})







gsap.to(".rev ",{
    width: "100% ",

    
         
    scrollTrigger:{
        trigger:".page1",
        scoller:"body",
        start:"90%",
        end:"117%",
       
        scrub:5

    }
})
gsap.from(".p1  ",{
    x:-100,
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".page2",
        start:"top 0%",        
         
    }
  
})
gsap.from(".p2  ",{
    x:-100,
    y:100,
    opacity:0,
    
    scrollTrigger:{
        trigger:".page2",
        start:"top 0%",        
         
    }
  
})

gsap.to(".mvdiv",{
    y:-150,
    scrollTrigger:{
        trigger:".page2",
        start:"top 0%",
        scrub:1,
    }
})

}
page2animation();
// page3

function page3animation(){
     
gsap.to(".p3tit",{
    width:"100%",
    duration:1.5,
    scrollTrigger:{
     trigger:".page3",
     start:"top 12%",
     
    }
 })
 
 gsap.to(".p3cap",{
     width:"100%",
     duration:.5,
     scrollTrigger:{
      trigger:".page3",
      start:"top 10%",
      
     }
  })
  gsap.from(".roc3",{
     opacity:0,
     ease:"bounce.out",
     duration:1,
     scrollTrigger:{
      trigger:".page3",
      start:"top 10%",
      
     }
  })
 
  
 
  if (window.innerWidth > 1300) {
    gsap.to(".roc3",{
        rotate:0,
        y:730,
        x:-40,
        scale:.55, 
        scrollTrigger:{
            trigger:".page3",
            start:"top 0%",
            stop:"top 100%",
            scrub:1,
        }         
       
    })
  }
 


}

 
page3animation();




// page4

gsap.to(".right , .left",{
    height:"100%",
    duration:2,
    scrollTrigger:{
        trigger:".page4",
        start:"top 8%",
        
    } 
})

 








 

window.addEventListener("wheel", (dets)=>{
    if(dets.deltaY > 0){
        gsap.to(".mvh1",{
            transform:"translateX(-300%)",
            ease:"none",
            duration:20,
            repeat:-1
        })

    } else {
        gsap.to(".mvh1",{
            transform:"translateX(100%)",
            ease:"none",
            duration:20,
            repeat:-1
        })

    }
})





function loaderanimtion (){
    var load = document.querySelector(".loader")
setTimeout(()=>{
    load.style.opacity="0%"
},3000)
var load = document.querySelector(".loader")
setTimeout(()=>{
    load.style.top="-100%"
},4000);
}
loaderanimtion();


var countElement = document.querySelector(".count");
var update = 1;

function updateCount() {
    countElement.innerHTML = update + '%';
    update++;
    if (update <= 100) {
        setTimeout(updateCount, 20);
    }
}

updateCount();










 




 








