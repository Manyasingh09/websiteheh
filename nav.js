(function () {
  var toggle = document.getElementById('navToggle');
  var tabs = document.getElementById('navTabs');
  if (!toggle || !tabs) return;

  toggle.addEventListener('click', function () {
    var isOpen = tabs.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
})();
