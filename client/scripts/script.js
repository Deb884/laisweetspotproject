/* ============================================================
   script.js
   Nav toggle · Active link · Scroll reveal · Filter buttons
   Lulu's Sweet Spot
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ────────────────────────────────────
     1. HAMBURGER MENU TOGGLE
  ──────────────────────────────────── */
  const toggle   = document.querySelector('.nav-toggle');
  const navRight = document.querySelector('.nav-right');

  if (toggle && navRight) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      navRight.classList.toggle('open');
    });

    // Close menu when a link is clicked (mobile UX)
    navRight.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        navRight.classList.remove('open');
      });
    });
  }

  /* ────────────────────────────────────
     2. ACTIVE NAV LINK
     Highlights the link matching the
     current page filename
  ──────────────────────────────────── */
  const currentFile = location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkFile = link.getAttribute('href').split('/').pop();
    if (linkFile === currentFile) link.classList.add('active');
  });

  /* ────────────────────────────────────
     3. SCROLL REVEAL
     Fades elements in as they enter
     the viewport
  ──────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target); // fire once only
        }
      });
    }, { threshold: 0.1 });

    revealEls.forEach(el => io.observe(el));
  }

  /* ────────────────────────────────────
     4. MENU FILTER BUTTONS
     Highlights the active filter tab
  ──────────────────────────────────── */
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }

  /* ────────────────────────────────────
     5. ADD TO CART FEEDBACK
     Brief visual confirmation on click
  ──────────────────────────────────── */
  document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', () => {
      const original = btn.textContent;
      btn.textContent = '✓ Added!';
      btn.style.background = 'var(--brown)';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
      }, 1400);
    });
  });

});
