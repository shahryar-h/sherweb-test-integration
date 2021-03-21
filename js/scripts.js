/* Sherweb - Test intégration */

// this function calls when we click on the menu icon
// if the menu is open it gets close and vice versa

function toggleMenu(menu) {
  // toggkes the hamburger menu
  menu.classList.toggle("change");

  // opens the menu
  let navmenu = document.querySelector(".open-menu");

  // check the menu's state and toggles it
  let menuIsClosed = !navmenu.classList.contains("opened");
  if (menuIsClosed) {
    navmenu.classList.add("opened");
  } else {
    navmenu.classList.remove("opened");
  }
}
