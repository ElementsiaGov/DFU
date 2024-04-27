document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.navbar-toggler');
  const menu = document.querySelector('.navbar-collapse');

  menuBtn.addEventListener('click', function() {
    menu.classList.toggle('show-nav');
  });

  document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickInsideMenuBtn = menuBtn.contains(event.target);

    if (!isClickInsideMenu && !isClickInsideMenuBtn) {
      menu.classList.remove('show-nav');
    }
  });
});
        // Function to hide loading animation when everything on the page has finished loading
        window.addEventListener('load', function() {
          var loadingOverlay = document.querySelector('.loading-overlay');
          loadingOverlay.style.display = 'none';
      });