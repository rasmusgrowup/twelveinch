'use strict';

// Open & Close of responsive menu javascript code
// See https://bulma.io/documentation/components/navbar/ for docs
document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.open-navigation, .close-menu'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

// Close menu on click outside menu wrapper
function closemenuFunction() {
  var element = document.getElementById("navigation-menu");
  element.classList.remove("is-active");
}

// Open & Close of modals javascript code
function modalFunction() {
  var element = document.getElementById("modal");
  element.classList.toggle("is-active");
}

// Accordion javascript
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Initialization of Animate On Scroll
// See https://github.com/michalsnik/aos/tree/v2 for docs
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    offset: 20,
    duration: 1200,
    easing: 'ease-expo-out'
  });
});

// Show & Hide menu on scroll down / up
var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("navigation-bar");

window.addEventListener('scroll', function (e) {
  last_scroll_position = window.scrollY;

  // Scrolling down
  if (new_scroll_position < last_scroll_position && last_scroll_position > 90) {
    // header.removeClass('slideDown').addClass('slideUp');
    header.classList.remove("show");
    header.classList.add("hide");

    // Scrolling up
  } else if (new_scroll_position > last_scroll_position) {
    // header.removeClass('slideUp').addClass('slideDown');
    header.classList.remove("hide");
    header.classList.add("show");
  }

  new_scroll_position = last_scroll_position;
});