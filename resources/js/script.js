"use-strict";

const nav_items = document.querySelector(".nav_items");
const app_drawer = document.querySelector(".app_drawer");
const nav = document.querySelector("nav");

app_drawer.addEventListener("click", function () {
  console.log(nav);
  nav_items.classList.toggle("nav_items-hide");
  nav.classList.toggle("nav_items-open");
});

$(".t1").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".section_features").offset().top,
    },
    2000
  );
});

$(".t2").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".special_feature").offset().top,
    },
    2000
  );
});

$(".t3").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".section_about").offset().top,
    },
    2000
  );
});
