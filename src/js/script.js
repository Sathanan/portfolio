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
const checkbox = document.getElementById("checkboy");

checkbox.addEventListener('change', () => {
    // change the color

})