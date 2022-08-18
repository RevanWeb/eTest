// $(".menu-bar").click(function () {
//   $(".menu-hide").toggleClass("menu-open");
// });
// $(".HemburgerIconCLick-close").click(function () {
//   $(".menu-hide").toggleClass("menu-open");
// });

const menubar = document.querySelector(".menu-bar");
const menuHide = document.querySelector(".menu-hide");
const closeMenu = document.querySelector(".menu-close");
menubar.addEventListener("click", function () {
  menuHide.classList.toggle("menu-open");
});
closeMenu.addEventListener("click", function () {
  menuHide.classList.toggle("menu-open");
});
