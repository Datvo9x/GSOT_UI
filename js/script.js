$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(".navbar-fixed-top").css({
                "background-image": "linear-gradient(to right, #0db143,#006768)"
            });
        } else {
            $(".navbar-fixed-top").css("background-image", "linear-gradient(to right,transparent,transparent");
        }
    });
});
//slider thời gian đổi ảnh
$('.carousel').carousel({
    interval: 2500
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
$(".owl-carousel").owlCarousel({
    navText: [
        "<img src='D:/GSOT/GSOT/img/Img/muiten.png'/ style='transform:rotate(180deg)'>",
        "<img src='D:/GSOT/GSOT/img/Img/muiten.png'/> "
    ],
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
    },
});