function toggleMenu(title) {
    if (window.innerWidth <= 1100) {
    var menu = title.nextElementSibling;
    var activeMenus = document.querySelectorAll(".footer-top .menu.active");
  
    // Close any other open menus
    activeMenus.forEach(function (activeMenu) {
      if (activeMenu !== menu) {
        activeMenu.classList.remove("active");
      }
    });
  
    // Toggle the active class on the clicked menu
    menu.classList.toggle("active");
  }
}