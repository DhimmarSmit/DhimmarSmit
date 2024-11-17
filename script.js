function skillsMoving(){
    window.addEventListener("wheel",function(dets){
        if(dets.deltaY > 0){
    
            gsap.to(".content",{
                transform:"translateX(-200%)",
                repeat:-1,
                duration:10,
                ease:"none",
                delay:"none"
            })
    
        } else{
            gsap.to(".content",{
                transform:"translateX(0%)",
                repeat:-1,
                duration:10,
                ease:"none",
                delay:"none"
            })
        }
    })
}
skillsMoving();

function socialAnimation(){
    var contactButton = document.querySelector(".btn");
    var homebtn = document.querySelector(".home");

    contactButton.addEventListener("click",function(){
    contactButton.style.display = "none";

    setTimeout(function(){
        contactButton.style.display = "block";
    },10000);
})
}
socialAnimation();
















// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

















// gsap.from(".exp1 p",{
//         y:50,
//         stagger:0.2,
//         duration:1,
//         scrollTrigger:{
//             trigger:".exp",
//             scroller:".main",
//             start:"top 65%",
//             end:"top 46%",
//             scrub:2
//         }
//     })

// gsap.from(".exp1 button",{
//         y:50,
//         stagger:0.2,
//         duration:1,
//         scrollTrigger:{
//             trigger:".exp",
//             scroller:".main",
//             start:"top 105%",
//             end:"top 106%",
//             scrub:2
//             }
//         })

   






// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

// // Handle navigation clicks to scroll to sections
// document.querySelectorAll('.nav h4 a').forEach(link => {
//     link.addEventListener('click', (event) => {
//         event.preventDefault();  // Prevent default anchor link behavior
        
//         // Get the target section from the href
//         const targetId = link.getAttribute('href');
//         const targetSection = document.querySelector(targetId);
        
//         // Use Locomotive Scroll's scrollTo method for smooth scrolling
//         if (targetSection) {
//             scroll.scrollTo(targetSection, {
//                 offset: 10,       // Adjust based on your nav height if needed
//                 duration: 1000,    // Time in ms for the scroll animation
//                 easing: [0.25, 0.00, 0.35, 1.00]  // Customize easing
//             });
//         }
//     });
// });



// const ScrollTrigger = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

// // Select all nav links with "a" tags that have href starting with "#"
// document.querySelectorAll('.nav a').forEach(link => {
//     link.addEventListener('click', function (event) {
//         event.preventDefault(); // Prevent default anchor click behavior

//         // Get the target section's ID from the href attribute
//         const targetSection = document.querySelector(this.getAttribute('href'));

//         // Use LocomotiveScroll to scroll to the target element
//         if (targetSection) {
//             scroll.scrollTo(targetSection);
//         }
//     });
// });



// const navLinks = document.querySelectorAll('.nav h4 a');

// navLinks.forEach(link => {
//     link.addEventListener('click', function (event) {
//         event.preventDefault(); // Prevent default anchor behavior

//         // Get the target section by extracting the href attribute (e.g., "#home")
//         const targetId = this.getAttribute('href');
//         const targetSection = document.querySelector(targetId);

//         // Scroll smoothly to the section
//         if (targetSection) {
//             window.scrollTo({
//                 top: targetSection.offsetTop,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });


// document.querySelectorAll('.nav h4 a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault(); // Prevent the default link behavior

//         // Get the target section ID from the href attribute
//         const targetId = this.getAttribute('href');
        
//         // Find the target element
//         const targetElement = document.querySelector(targetId);

//         // Scroll to the target element smoothly
//         targetElement.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// });

// document.querySelectorAll('.nav a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
        
//         const targetId = this.getAttribute('href');
//         const targetElement = document.querySelector(targetId);

//         scroll.scrollTo(targetElement);
//     });
// });




// var home = document.querySelector(".home");
// var about = document.querySelector(".about");
// var experience = document.querySelector("experience");




// const ScrollTrigger = new LocomotiveScroll({
//     el: document.querySelector("[data-scroll-container]"),
//     smooth: true,
//   });
  
//   // Function to handle smooth scrolling to target sections
//   function smoothScroll(event) {
//     event.preventDefault(); // Prevent default anchor behavior
//     const targetId = event.target.getAttribute("data-scroll-target"); // Get target section ID
//     const targetSection = document.getElementById(targetId); // Get target section element
//     if (targetSection) {
//       scroll.scrollTo(targetSection, {
//         offset: 0,
//         duration: 800,
//         easing: [0.25, 0.00, 0.35, 1.00],
//       });
//     }
//   }
  
//   // Attach event listeners to each link in .nav
//   document.querySelectorAll(".nav a").forEach(link => {
//     link.addEventListener("click", smoothScroll);
//   });
