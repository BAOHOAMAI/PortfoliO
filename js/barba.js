
// AnimationEnter page 

const TransitionEnter = (container) => {
    const tl = gsap.timeline();

    tl.from (container, { autoAlpha:0 , duration:.6 , x:-2000 , opacity:0 })
      .fromTo('.slideNavi-next', { x:-200 , opacity:0 }, { duration:1 , delay:.3 , x:0 , opacity:1 , ease: 'Expo.easeInOut' } ,0)
      .fromTo('.slideNavi-prev', { x:200 , opacity:0 }, { duration:1 , delay:.3 , x:0 , opacity:1 , ease: 'Expo.easeInOut' },0)

    return tl;
};

const animationEnter = (container) => {
    const tl = gsap.timeline();

    tl.fromTo('.slideWorks_title', { x:-200 , opacity: 0 }, { opacity:1 , x:0},.4)
      .fromTo('.slideWorks_container>div', { x:-200 , opacity: 0 }, { x:0 , opacity:1 , stagger:.2 },.3)
      .fromTo('.slideHome-container>span', { x:-200 , opacity: 0 }, { x:0 , opacity:1 , stagger:.2 },.3)
      .fromTo('.slideWorks_visit', { scale:0 }, { scale:1 },2.25)
      .fromTo('.slideWorks_tech_icon>span>i', { scale:0 }, { scale:1 , stagger:.1 },1.3)
      .fromTo('.menuTrigger_open>span', { y:20 , opacity:0 }, { y:0 , opacity:1 , stagger:.1 },1)

    return tl;
}

// Enter About Section 

const animationAboutEnter =  (container) => {
    const images = container.querySelectorAll('.list_thumb');
    const aboutNums= container.querySelectorAll('.list_num');
    const abouTitles = container.querySelectorAll('.list_title');

    const tl = gsap.timeline();
            tl
                .fromTo( images, {y:-401}, {y:0, stagger:.1},0)
                .fromTo( aboutNums, {x:-401}, {x:0,stagger:.1},.5)
                .fromTo( abouTitles, {x:-401}, {x:0,stagger:.1},.5)
                .fromTo( abouTitles, {x:-401}, {x:0,stagger:.1},.5)
                .fromTo('.menuTrigger_close>span', { scale:0 }, { scale:1 , stagger:.25 },1.3)

        return tl ;
} ;
// Barbajs

barba.init({

    sync: true,

    transitions: [
        {
            name: 'about',
            to: {
                namespace: ['about-section']
            },
            once({next}) {
                animationAboutEnter(next.container);
            },
            enter({next}) {
                animationAboutEnter(next.container);
            },
        },

        {
            name: 'main',
            
            once({next}) {
                animationEnter(next.container);
                TransitionEnter(next.container);
            },
            enter({next}) {
                animationEnter(next.container);
                TransitionEnter(next.container);
            },
        },
    ]
});
