
// Open & Close of responsive menu javascript code
// See https://bulma.io/documentation/components/navbar/ for docs
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});

// Initialization of Animate On Scroll
// See https://github.com/michalsnik/aos/tree/v2 for docs
document.addEventListener('DOMContentLoaded', function () {
AOS.init({
	  //offset: 50,
	  duration: 900,
	  easing: 'ease-out-quad',
    });
});
