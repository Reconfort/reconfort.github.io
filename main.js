const Menu = document.getElementById("menus");
const closeMenu = document.querySelector(".close-btn");
const openMenu = document.querySelector(".burger");

const showNav = () => {
  Menu.style.display = "block";
};

const hideNav = () => {
  Menu.style.display = "none";
};

closeMenu.addEventListener("click", hideNav);
openMenu.addEventListener("click", showNav);
