// header animation
window.onscroll = function() {
    var header = document.getElementById("header");
    if (window.pageYOffset > 10) {
      header.style.top = "0";
    } else {
      header.style.top = "-100px";
    }
};

// Darkmode switch
const label = document.getElementById("myLabel");
      
label.addEventListener("click", function() {
  document.body.classList.toggle("light-mode");
});

// Navigation bar

const navBurger = document.getElementById('nav-menue');

navBurger.onclick = function()  {
  const navElement = document.querySelector('.zwei');
  navElement.classList.toggle('active')
}