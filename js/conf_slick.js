$(".header-menu, .header-pos-inner").on("change", function () {
  $(".header-pos").toggleClass("active");
  $("body").toggleClass("active");
});

