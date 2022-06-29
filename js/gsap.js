// Load transitions
const tl = gsap.timeline();
tl
    .fromTo('.sub_loading', { y:-30 , opacity:0 }, { duration:.7 , opacity:1 , y:0 , ease:'easeInOut' })
    .fromTo('.loading_bar', { opacity:0 }, { opacity:1 })
    .fromTo('.loader', { width:'0' }, { duration:1 , width:'100%' })
    .to('.loading>div', { opacity:0 , duration:1,
        onComplete: function(){
            document.querySelector('.loading').remove()
        }
    })
// After loading home page
    .fromTo('.menuTrigger_open>span', { scale:0 , opacity:0 }, { scale:1, opacity:1 , stagger:.1 , duration:1 },3.2)
    .fromTo('.header-home', { x:-40 , opacity:0 }, { x:0, opacity:1 , duration:.5 },4.2)
    .fromTo('.header-about-container>span', { x:-40 , opacity:0 }, { x:0, opacity:1 , stagger:.1 , duration:.5 },4.3)
    .fromTo('.contact>a', { x:-40 , opacity:0 }, { x:0, opacity:1 , stagger:.1 , duration:.5 },4.4)
    .fromTo('.slideNavi-next', { x:-200 , opacity:0 }, { duration:1 , x:0 , opacity:1 , ease: 'Expo.easeInOut' } ,3.2)
    .fromTo('.slideNavi-prev', { x:200 , opacity:0 }, { duration:1 , x:0 , opacity:1 , ease: 'Expo.easeInOut' },3.2)
    .fromTo ('.slideHome-container>span' , {y: 100 , opacity:0 } ,{ duration: 1.5 , y:0 , opacity:1 ,stagger:.2 , ease:'Expo.easeInOut' },3)
    .fromTo ('video', { opacity:0 }, { opacity:1 },3.3)
// After loading project page
    .fromTo('.slideWorks_container>div' ,{y:300} ,{ease: 'elastic.out(2,2)', y:0 , stagger:.2 , duration:2},3)
    .fromTo('.slideWorks_visit', { opacity:0 , scale:0 }, { opacity:1 , scale:1 })
    .fromTo('.slideWorks_title' ,{y:300} ,{ease: 'elastic.out(2,2)', y:0 , duration:2 },3)
    .fromTo('.slideWorks_tech_icon>span>i', { opacity:0 , scale:0}, {opacity:1 ,scale:1 , stagger:.1 })

      
