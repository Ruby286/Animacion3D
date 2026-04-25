/* ═══════════════════════════════════════════════════
   RUBÉN MATOS — CV  |  main.js
   ═══════════════════════════════════════════════════ */

// ── SCROLL REVEAL ─────────────────────────────────
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => observer.observe(el));

// ── HERO REVEAL ON LOAD ───────────────────────────
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal').forEach(el => {
    // Trigger immediately for hero elements
    requestAnimationFrame(() => el.classList.add('visible'));
  });
});

// ── PORTFOLIO CARD: click entire thumb ───────────
const thumb = document.querySelector('.portfolio-card__thumb');
if (thumb) {
  thumb.style.cursor = 'pointer';
  thumb.addEventListener('click', () => {
    window.open('https://youtu.be/IxNwoxD8c3I?si=hty46ES8-zM1rU_a', '_blank');
  });
}

// ── PILL HOVER STAGGER ────────────────────────────
document.querySelectorAll('.skill-group').forEach(group => {
  const pills = group.querySelectorAll('.pill');
  pills.forEach((pill, i) => {
    pill.style.transitionDelay = `${i * 30}ms`;
  });
});

// ── SMOOTH ACTIVE NAV (optional, no nav in this version) ──
// Reserved for future nav bar if added
