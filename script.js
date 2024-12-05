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
