// Basic interactions: mobile nav toggle, smooth scroll, copy email
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  const yearEl = document.getElementById('year');
  const copyEmailBtn = document.getElementById('copy-email');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // close nav on mobile
      if (nav && nav.classList.contains('open')) nav.classList.remove('open');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = 'contact.faisal0@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        copyEmailBtn.textContent = 'Copied!';
        setTimeout(() => { copyEmailBtn.textContent = 'Copy email to clipboard'; }, 2200);
      } catch (err) {
        alert('Copy failed — please copy manually: ' + email);
      }
    });
  }
});
