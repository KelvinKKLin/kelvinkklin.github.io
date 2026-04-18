(function() {
  var toggle = document.getElementById('theme-toggle');
  var icon = document.getElementById('theme-toggle-icon');

  function isDark() {
    return document.body.classList.contains('inverted');
  }

  function updateIcon() {
    if (isDark()) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }

  // Set the correct icon on load
  updateIcon();

  toggle.addEventListener('click', function() {
    if (isDark()) {
      document.body.classList.remove('inverted');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('inverted');
      localStorage.setItem('theme', 'dark');
    }
    updateIcon();
  });
})();
