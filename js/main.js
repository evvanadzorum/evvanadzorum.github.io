const time = document.querySelector(".time_live");
let keySeconds = 1;
function logation(){
    setInterval(() => {
        let seconds;
        let date = new Date();
        keySeconds *= -1;
        keySeconds === 1 ? seconds = ":" : seconds = " ";
        time.innerHTML = `${date.getHours()}${seconds}${date.getMinutes()} <span class="send_location"> <span>отправить</span><span> геолокацию</span></span>`
    }, 500)
}
const timeBlock = document.querySelector(".time_block")
const loading = document.querySelector(".loading");
window.addEventListener("load", () => {
    setTimeout(() => {
        loading.classList.add("loading_active")
        timeBlock.classList.remove("time_block_active");
        document.body.style.overflowY = "scroll";
        logation();
    }, 10)
})
const touch_mobile_btn = document.querySelector(".touch_mobile_btn");
const call = document.querySelector(".call");
if (document.body.clientWidth <= 576) {
    call.classList.remove("call_active");
    touch_mobile_btn.hidden = false;
}
if (document.body.clientWidth > 576){
    call.classList.add("call_active");
    touch_mobile_btn.hidden = true;
}

window.addEventListener("resize", () => {
    if (document.body.clientWidth <= 576) {
        call.classList.remove("call_active");
        touch_mobile_btn.hidden = false;
    }
    else {
        call.classList.add("call_active");
        touch_mobile_btn.hidden = true;
    }
})

touch_mobile_btn.addEventListener("click", () => {
    touch_mobile_btn.classList.toggle("touch_mobile_btn_active");
    call.classList.toggle("call_active_mobile");

})
call.addEventListener("click", () => {
    touch_mobile_btn.classList.toggle("touch_mobile_btn_active");
    call.classList.toggle("call_active_mobile");

})
const navbar = document.querySelector(".navbar");
const navbutton = document.querySelector(".navbutton");
navbutton.addEventListener("click", () => {
    navbutton.classList.toggle("navbutton_active");
    navbar.classList.toggle("navbar_active")
})
navbar.addEventListener("click", () => {
    navbutton.classList.toggle("navbutton_active");
    navbar.classList.toggle("navbar_active")
})

let cordinatsX = 0;
let cordinatsY = 0;
const cordinats = document.querySelector(".time_no_active");
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        cordinatsX = position.coords.latitude;
        cordinatsY = position.coords.longitude;
        cordinats.setAttribute("href",`https://wa.me/+37498151071?text=My%20Location:%20https://www.google.com/maps?q=${cordinatsX},${cordinatsY}`)
    });
}

/* slides images */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}