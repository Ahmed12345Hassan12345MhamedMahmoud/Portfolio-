

var typed = new Typed(".text", {
  strings: ["frontend Developer ", "Ahmed Hassan", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(this).toggleClass("close");
  });
});
