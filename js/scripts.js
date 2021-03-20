/* Sherweb - Test intégration */

function toggleMenu(menu) {
  let menu2 = document.getElementById("menu-change");
  console.log(menu2.style.display == "");
  if (menu2.style.display === "none" || menu2.style.display == "") {
    menu2.style.display = "block";
  } else {
    menu2.style.display = "none";
  }
  menu.classList.toggle("change");
}
