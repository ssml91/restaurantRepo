let mainNav = document.getElementById('js-menu');

let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {

        mainNav.classList.toggle('active');
});

// opens coffee site in new window
function coffeeFunction() {
        window.open("demos/coffee/blueRoomCoffee.html");
    }
// opens sushi site in new window
function sushiFunction() {
        window.open("demos/sushi/index_sushibar.html");
    }