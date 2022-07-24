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
    .fromTo('.header-home', { x:-40 , opacity:0 }, { x:0, opacity:1 , duration:.7 },4.3)
    .fromTo('.header-about-container>span', { x:-40 , opacity:0 }, { x:0, opacity:1 , stagger:.1 , duration:.7 },4.4)
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

// AnimationEnter page 

const nextBtn = document.querySelector('.slideNavi-next');
const prevBtn = document.querySelector('.slideNavi-prev');
const TransitionEnter = (container) => {
    const tl = gsap.timeline();

    tl.from (container, { autoAlpha:0 , duration:.6 , translateX: '-100%' , opacity:0 })
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

const animationAboutEnter = (container) => {
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

// Contact Form

const formAnimation = () => {

        const contactBtn = document.querySelector('.js-contact');
        const modal = document.querySelector('.js-modal');
        const modalClose = document.querySelector('.js-modal-close');
    
        function showContactForm() {
            modal.classList.add('open');
            const tl = gsap.timeline();
            tl 
                .fromTo('.title-1', { x:-200 , opacity:0 }, { duration:1 , x:0 , opacity:1 , ease: 'Expo.easeInOut' },0)
                .fromTo('.title-2', { x:200 , opacity:0 }, { duration:1 , x:0 , opacity:1 , ease: 'Expo.easeInOut' },0)
        }
        
        
        function hideContactForm() {
            modal.classList.remove('open');
        }
    
        modalClose.addEventListener('click',hideContactForm);
        contactBtn.addEventListener('click',showContactForm);

        // Textarea Contact Form

        const textarea = document.querySelector('textarea');

        textarea.addEventListener('keyup',e => {
        textarea.style.height = '76px';
        let scHeight = e.target.scrollHeight;
        textarea.style.height = `${scHeight}px`;
        }) 
}

// Info Form

const infoForm = () => {
    const openInfoBtn = document.querySelector('.slideWorks_info');
    const closeInfoBtn = document.querySelector('.slideInfo_back');
    const infoModal = document.querySelector('.slideInfo');
    const infoBackground = document.querySelector('.slideInfo::before');
    function openInfoModal() {
        infoModal.classList.add('active')
        const tl = gsap.timeline();
        tl 
        .from (infoModal, { autoAlpha:0 , duration:.6 , translateX: '-100%' , opacity:0 })
            // .fromTo('.title-2', { x:200 , opacity:0 }, { duration:1 , x:0 , opacity:1 , ease: 'Expo.easeInOut' },0)
    }

    function closeInfoModal() {
        const tl = gsap.timeline();
        tl 
        .to (infoModal, { autoAlpha:0 , duration:1 , translateX: '0%' , opacity:0 })
        infoModal.classList.remove('active')
    }

    openInfoBtn.addEventListener('click', openInfoModal)
    closeInfoBtn.addEventListener('click', closeInfoModal) 
}

// Validation form

function validator (options) {
    var selectorRules = {};

    function validate (inputElement,rule) {
        var errorMessage;    
        var rules = selectorRules[rule.selector];
        var errorElement = inputElement.parentElement.querySelector('.error-message');

        for (var i = 0; i < rules.length; i++) {
            errorMessage = rules[i] (inputElement.value)
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerHTML = errorMessage;
            inputElement.classList.add('invalid');
        } else {
            errorElement.innerHTML = '';
            inputElement.classList.remove('invalid');
        }
        return !errorMessage;
    }

    var formElement = document.querySelector(options.form);

    if (formElement) {

        formElement.onsubmit = function (e) {
            e.preventDefault(); 

            var isFormValid = true;
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid =validate (inputElement,rule);
                
                if(!isValid) {
                    isFormValid = false;
                }
            });
            if (isFormValid) {
                showSuccessMessage();
            } 
        }

        options.rules.forEach(function (rule) {

            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.error-message');

            if (inputElement) {
                inputElement.onblur = function () {
                    validate (inputElement,rule);
                }
                inputElement.oninput = function () {
                    errorElement.innerHTML = '';
                    inputElement.classList.remove('invalid');
                }
            }
        })
    }

    // Thank you message
    
    var success = document.querySelector('.popup');
    function showSuccessMessage () {
        success.classList.add('active');
    }
    function removeMessage () {
        success.classList.remove('active');
    }
    const closeMessage = document.querySelector('.message-close');
    closeMessage.addEventListener('click',removeMessage);
}

validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value){
            return value ? undefined : 'This form is required'
        }
    }
}

validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Invalid email format'
        }
    }
}

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
                formAnimation();
                validator ({
                    form : '#form-1',
                    rules : [
                    validator.isRequired('#your_name'),
                    validator.isRequired('#your_email'),
                    validator.isEmail('#your_email'),
                    validator.isRequired('#text-area'),
                ],
                })
            },
            enter({next}) {
                animationAboutEnter(next.container);
                formAnimation();
                validator ({
                    form : '#form-1',
                    rules : [
                    validator.isRequired('#your_name'),
                    validator.isRequired('#your_email'),
                    validator.isEmail('#your_email'),
                    validator.isRequired('#text-area'),
                ],
                })
            },
        },
        
        {
            name: 'main',
            to: {
                namespace: ['home-section']
            },
            once({next}) {
                animationEnter(next.container);
                TransitionEnter(next.container);
            },
            enter({next}) {
                animationEnter(next.container);
                TransitionEnter(next.container);
            },
            leave(data) {
                data.current.container.remove();
            }
        },

        {
            name: 'projects',
            
            once({next}) {
                infoForm();
                animationEnter(next.container);
                TransitionEnter(next.container);
            },
            enter({next}) {
                infoForm();
                animationEnter(next.container);
                TransitionEnter(next.container);
            },
            leave(data) {
                data.current.container.remove();
            }
        },
    ]
});
