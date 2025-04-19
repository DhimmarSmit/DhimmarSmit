// Skills moving animation on wheel scroll
function skillsMoving() {
    window.addEventListener('wheel', function (eve) {
        if (eve.deltaY > 0) {
            gsap.to('.content', {
                x: '-200%',  // Fix: Use 'x' for horizontal movement, not 'transform'
                repeat: -1,
                duration: 10,
                ease: 'none',
                delay: 0,
            });
        } else {
            gsap.to('.content', {
                x: '0%',  // Fix: Use 'x' for horizontal movement, not 'transform'
                repeat: -1,
                duration: 10,
                ease: 'none',
                delay: 0,
            });
        }
    });
}
skillsMoving();

// Preloader animation
var tl = gsap.timeline()
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

// LocomotiveScroll error fix: Ensure LocomotiveScroll is loaded before using it
if (typeof LocomotiveScroll !== 'undefined') {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),  // Ensure this is the correct selector
        smooth: true
    });
} else {
    console.warn('LocomotiveScroll is not defined or failed to load.');
}
