/* Sherweb - Test intégration */

function toggleMenu(menu) {
  // let menu2 = document.getElementById("menu-change");
  // if (menu2.style.display === "none" || menu2.style.display == "") {
  //   menu2.style.display = "flex";
  // } else {
  //   menu2.style.display = "none";
  // }
  menu.classList.toggle("change");
  let navmenu = document.querySelector(".open-menu");
  let menuIsClosed = !navmenu.classList.contains("opened");
  if (menuIsClosed) {
    navmenu.classList.add("opened");
  } else {
    navmenu.classList.remove("opened");
  }
}

// let menu = document.querySelector("#menu-change");
// let menuButton = document.querySelector(".menu");

// // add an event listener to listen for clicks on the menu button
// menuButton.addEventListener("click", function () {
//   let menuIsClosed = !menu.classList.contains("opened"); // we know the menu is closed if it doesn't have the ".opened" class

//   if (menuIsClosed) {
//     menu.classList.add("opened change");
//   } else {
//     menu.classList.remove("opened change");
//   }
// });
