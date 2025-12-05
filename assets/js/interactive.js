// Interactive behaviors: typed subtitle, theme toggle, and year fill
document.addEventListener('DOMContentLoaded', () => {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Typed effect
  const typedEl = document.getElementById('typed');
  const phrases = [
    'statistical models.',
    'scalable pricing engines.',
    'data-driven strategies.',
    'robust trading systems.'
  ];
  if (typedEl) {
    let pi = 0, ch = 0, typing = true;
    const typeSpeed = 60;
    const pause = 1200;
    function tick(){
      const word = phrases[pi];
      if (typing) {
        typedEl.textContent = word.slice(0, ch+1);
        ch++;
        if (ch === word.length) {
          typing = false;
          setTimeout(tick, pause);
          return;
        }
      } else {
        typedEl.textContent = word.slice(0, ch-1);
        ch--;
        if (ch === 0) {
          typing = true;
          pi = (pi+1) % phrases.length;
        }
      }
      setTimeout(tick, typing ? typeSpeed : 30);
    }
    tick();
  }

  // Theme toggle
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  if (stored) root.setAttribute('data-theme', stored);
  function updateToggleUI(){
    const t = root.getAttribute('data-theme') === 'dark' ? '🌞' : '🌙';
    if (toggle) toggle.textContent = t;
  }
  updateToggleUI();
  if (toggle) {
    toggle.addEventListener('click', () => {
      const cur = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', cur);
      localStorage.setItem('theme', cur);
      updateToggleUI();
    });
  }
});
