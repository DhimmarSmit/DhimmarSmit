function enableSmoothScrolling() {
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true,
    });

    // Sync Locomotive Scroll with ScrollTrigger
    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('.main', {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        pinType: document.querySelector('.main').style.transform ? 'transform' : 'fixed',
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href'); // Get the target ID
            const targetElement = document.querySelector(targetId); // Find the target element
            if (targetElement) {
                locoScroll.scrollTo(targetElement); // Scroll to the target using Locomotive Scroll
            }
        });
    });

    // Refresh Locomotive Scroll and ScrollTrigger
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();
}

function skillsMoving() {
    window.addEventListener('wheel', function (eve) {
        if (eve.deltaY > 0) {
            gsap.to('.content', {
                transform: 'translateX(-200%)',
                repeat: -1,
                duration: 10,
                ease: 'none',
                delay: 'none',
            });
        } else {
            gsap.to('.content', {
                transform: 'translateX(0%)',
                repeat: -1,
                duration: 10,
                ease: 'none',
                delay: 'none',
            });
        }
    });
}

window.addEventListener('scroll', () => {
     gsap.from('.content',{
        transform: 'translateX(-200%)',
        duration:10,
     })
     console.log('he Hari');
})

function socialAnimation() {
    const contactButton = document.querySelector('.btn');

    contactButton.addEventListener('click', function () {
        contactButton.style.display = 'none';

        setTimeout(function () {
            contactButton.style.display = 'block';
        }, 10000);
    });
}
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

setTimeout(()=>{
    const image = document.querySelector('.Profile-Image');
    image.style.filter = 'grayscale(0%)';
    image.style.transition = 'all ease 1s';
},2000);

setTimeout(()=>{
    const line = document.querySelector('.backline');
    line.style.bottom = '0';
    line.style.transition = 'all ease 2s';
},4000);

setTimeout(()=>{
    const line = document.querySelector('.backline1');
    line.style.bottom = '0';
    line.style.transition = 'all ease 2s';
},4000);

setTimeout(()=>{
    const line = document.querySelector('.backline2');
    line.style.bottom = '0';
    line.style.transition = 'all ease 2s';
},4000);

setTimeout(()=>{
    const line = document.querySelector('.backline3');
    line.style.bottom = '0';
    line.style.transition = 'all ease 2s';
},4000);

setTimeout(()=>{
    const line = document.querySelector('.backline4');
    line.style.bottom = '0';
    line.style.transition = 'all ease 2s';
},4000);


// Initialize all functions
enableSmoothScrolling();
skillsMoving();
socialAnimation();



