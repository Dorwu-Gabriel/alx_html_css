document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-wrapper nav');
  const navWrapper = document.querySelector('.nav-wrapper');
  const hero = document.querySelector('.hero');

  navToggle.addEventListener('click', function () {
    nav.classList.toggle('open');
    navToggle.classList.toggle('active');
    navWrapper.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', nav.classList.contains('open'));

    // Push hero down when nav is open (mobile)
    if (window.innerWidth <= 700) {
      if (nav.classList.contains('open')) {
        hero.style.marginTop = '140px';
      } else {
        hero.style.marginTop = '';
      }
    }
  });

  // Optional: Close menu when clicking a link (mobile UX)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.classList.remove('active');
      navWrapper.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      hero.style.marginTop = '';
    });
  });

  // Reset hero margin on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
      hero.style.marginTop = '';
      nav.classList.remove('open');
      navToggle.classList.remove('active');
      navWrapper.classList.remove('open');
    }
  });
});