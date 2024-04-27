document.addEventListener('DOMContentLoaded', function() {
  var menu = document.querySelector('.menu');
  var hamburgerMenu = document.querySelector('.hamburger-menu');

  // Open/close the menu when hamburger icon is clicked
  hamburgerMenu.addEventListener('click', function() {
      toggleMenu();
  });

  // Close the menu when clicking outside of it
  document.addEventListener('click', function(event) {
      var target = event.target;
      if (!menu.contains(target) && target !== hamburgerMenu) {
          menu.style.left = '-250px';
      }
  });
});

function toggleMenu() {
  var menu = document.querySelector('.menu');
  if (menu.style.left === '-250px') {
      menu.style.left = '0';
  } else {
      menu.style.left = '-250px';
  }
}
