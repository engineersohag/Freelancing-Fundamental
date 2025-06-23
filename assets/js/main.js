$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: true,
    items: 1
    });

    // review for mobile
    $(".mobile-carousel").owlCarousel({
      items: 1,
      margin: 10,
      nav: true,
      dots: false,
      navText: [
        '<span>&#xF22D;</span>',
        '<span>&#xF231;</span>'
      ]
    });

});

// back to top

let caleScrollValue = () => {
let scrollProcess = document.getElementById('sc_btn');
let processValue = document.querySelector('#sc_value');

let pos = document.documentElement.scrollTop;
console.log(pos);

let caleHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrollValue = Math.round((pos * 100) / caleHeight);

if(pos > 100){
    scrollProcess.style.display = "grid";
}else{
    scrollProcess.style.display = "none";
  }
  
  scrollProcess.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
  });

  scrollProcess.style.background = `conic-gradient(#F3274C ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}

window.onscroll = caleScrollValue;
window.onload = caleScrollValue;
