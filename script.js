// function skillsMoving() {
//     window.addEventListener('wheel', function (eve) {
//         if (eve.deltaY > 0) {
//             gsap.to('.content', {
//                 transform: 'translateX(-200%)',
//                 repeat: -1,
//                 duration: 10,
//                 ease: 'none',
//                 delay: 'none',
//             });
//         } else {
//             gsap.to('.content', {
//                 transform: 'translateX(0%)',
//                 repeat: -1,
//                 duration: 10,
//                 ease: 'none',
//                 delay: 'none',
//             });
//         }
//     });
// }
// skillsMoving();

gsap.from('.bio-text h4',{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about .bio-text",
        scroller:'body',
        markers:false,
        start:'top 50%'
    }
})

gsap.from('.left',{
    x:-100,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:'#experience .exp1',
        scroller:'body',
        start:'top 50%'
    }
})

gsap.from('.right',{
    x:100,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:'#experience .exp1',
        scroller:'body',
        start:'top 50%'
    }
})


var tl = gsap.timeline()
// Preloader animation
tl.to('.preloader', {
    y: '-100%',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    duration: 3,
    ease: 'power2.out',
});

// Navbar animation
tl.to('nav', {
    y: '0%',
    duration: 0.6,
    ease: 'power2.out',
});

tl.from('.right-content',{
    x:100,
    opacity:0,
    duration:0.4,
    ease:'power2.out'
})


tl.from('.left-content',{
    x:-100,
    opacity:0,
    duration:0.5,
    ease:'power2.out'
})

var home = document.querySelector('#home');
var cursor = document.querySelector('#cursor');

home.addEventListener('mousemove',function(event){
    gsap.to(cursor,{
        x:event.x,
        y:event.y,
        duration:1
    })
})

home.addEventListener('mouseleave',function(event){
    gsap.to(cursor,{
        display:'none'
    })
})

home.addEventListener('mouseenter',function(event){
    gsap.to(cursor,{
        display:'block'
    })
})
