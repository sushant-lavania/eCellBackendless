// Redirect to home
document.querySelector('.button_base').addEventListener('click', () => {
  window.location.href = '../index.html';
});

// owlCarousel
$(document).ready(function () {
  $('#owl-demo').owlCarousel({
    autoPlay: 5000, //Set AutoPlay to 3 seconds
    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
  });
});

// Sticky menu background
window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    document.querySelector('.navbar').classList.add('scroll');
  } else {
    document.querySelector('.navbar').classList.remove('scroll');
  }
});

// Smooth Scrolling
$('.navbar a, .nav-link').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 50,
      },
      800
    );
  }
});

$('.hamburger a, .ham-links').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

// Scrollspy
(function () {
  'use strict';

  var section = document.querySelectorAll('.section');
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function () {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition + 50) {
        document.querySelector('.active').setAttribute('class', ' ');
        document
          .querySelector('a[href*=' + i + ']')
          .setAttribute('class', 'active');
      }
    }
  };
})();

/**************************************************HAM NAV BAR*************************************************** */
function toggleHamButton() {
  var x = document.getElementById('myLinks');
  var y = document.querySelector('.topnav');
  if (x.style.display === 'block') {
    x.style.display = 'none';
    y.style.background = '#33333300';
  } else {
    x.style.display = 'block';
    y.style.background = '#333333bb';
  }
}

document.querySelector('.hamNav').addEventListener('click', toggleHamButton);
document.querySelector('#myLinks').addEventListener('click', toggleHamButton);
