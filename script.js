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

gsap.from('.bio-text',{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:'#about .bio-text'
})

gsap.from('.exp1',{
    y:100,
    opacity:0,
    duration:1,
    // stagger:0.5
    scrollTrigger:'#experience .exp1'
})


var tl = gsap.timeline()
// Preloader animation
tl.to('.preloader', {
    y: '-100%',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    duration: 1,
    ease: 'power2.out',
});

// Navbar animation
tl.to('nav', {
    y: '0%',
    duration: 1,
    ease: 'power2.out',
});




