// NAVBAR
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $(".navbar-fixed-top").css(
        "background",
        "linear-gradient(to right, #0db04b, #037762)"
      );
    } else {
      $(".navbar-fixed-top").css("background", "transparent");
    }
  });
});
// END NAVBAR
// SLIDER
$("#choice-slider .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  // dots: false;
  navText: [
    "<img src='img/trangchu/arrow-gray-left.png'>",
    "<img src='img/trangchu/arrow-gray-right.png'>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
$("#prob-slider .owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  navText: [
    "<img src='img/trangchu/arrow-left.png'>",
    "<img src='img/trangchu/xuat file2-25-25.png'>",
  ],

  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
  },
});
$(".owl-carousel").find(".owl-nav").removeClass("disabled");
$(".owl-carousel").on("changed.owl.carousel", function (event) {
  $(this).find(".owl-nav").removeClass("disabled");
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length;) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    }
    else {
      a[i].style.display = "none";
    }
  }
}
$('.carousel').carousel({
  interval: 2500
});