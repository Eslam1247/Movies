
// random background option 
let backgroundoption = true
    // background intreval
let backgroundint;
// select landing page 
let landingpage = document.querySelector('.landing-page')
    // Get array of image
let arrayimge = [  "b.png", "bg6.jpg"];
// function randomizeinges
function randomizeim() {
    if (backgroundoption == true) {
        backgroundint = setInterval(() => {
            // get random math
            let randommath = Math.floor(Math.random() * arrayimge.length)
                // change background image url
            landingpage.style.backgroundImage = 'url("img2/' + arrayimge[randommath] + '")'
        }, 3000)
    }
}
randomizeim();




function openMenu() {
    const menu = document.querySelector('.links')
    menu.classList.toggle('is-active')
}



let myButton = document.getElementById('up');

window.onscroll = function() {
        // Display after 400px height
        if (window.pageYOffset >= 200) {
            myButton.style.display = 'block';
        } else {
            myButton.style.display = 'none';
        }
    }
    //Onclick function
myButton.addEventListener('click', function() {
    window.scrollTo({
        top: 00,
        left: 0,
        behavior: "smooth"
    });
});


// Hidden Loader
let loader = document.getElementById("load");

document.body.style.overflow = "hidden";

setTimeout(function () {
  loader.style.cssText = "opacity: 0; transition: all 1s linear;";
  document.body.style.overflow = "auto";
}, 2000);

setTimeout(function () {
  loader.style.cssText = "z-index: -3; opacity: 0;";
}, 3000);

