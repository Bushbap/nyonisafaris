document.addEventListener('click', function(event) {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('hamburger-icon');
  if (!menu.contains(event.target) && !icon.contains(event.target)) {
      // Instead of adding 'hidden', reset the translate classes to hide the menu.
      menu.classList.remove("translate-x-0");
      menu.classList.add("translate-x-full");
      icon.setAttribute('aria-expanded', 'false');
  }
});


function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("hamburger-icon");
  const isHidden = menu.classList.contains("translate-x-full");
  
  // Toggle between off-screen (translate-x-full) and onscreen (translate-x-0)
  if (isHidden) {
    menu.classList.remove("translate-x-full");
    menu.classList.add("translate-x-0");
    icon.setAttribute('aria-expanded', 'true');
  } else {
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");
    icon.setAttribute('aria-expanded', 'false');
  }
}

// resize nav

function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('translate-x-full');
}




