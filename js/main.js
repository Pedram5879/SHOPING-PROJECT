/* changes slides with buttons */
let slideIndex = 1;

/* if function called */
function setSlide(input, index){
    slideIndex = index;
    let item = document.querySelector(`#${input}`);
    let slides = [...document.querySelector(".slides").children];
    slides.forEach((element)=>{
        element.classList.remove("active");
    })
    item.classList.add("active");
}

/* do a same thing in a duration decleared */
setInterval(()=>{
    slideIndex += 1;
    if(slideIndex==4){
        slideIndex = 1;
    }
    setSlide(`slide${slideIndex}` ,slideIndex)
}, 4000)

/* counter down */
let reaminingTime = 70000;

function setTime(){
    if(reaminingTime == 0) return;
    let h = Math.floor(reaminingTime/3600);
    let m = Math.floor((reaminingTime%3600)/60);
    let s = (reaminingTime%3600)%60;

    document.querySelector("#seconds").innerHTML = s;
    document.querySelector("#minutes").innerHTML = m;
    document.querySelector("#hours").innerHTML = h;
}

setInterval(()=>{
    reaminingTime -= 1;
    setTime();
},1000);