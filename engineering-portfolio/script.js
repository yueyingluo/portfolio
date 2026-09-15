const navLinks = [...document.querySelectorAll('.portfolio-intro nav a')];
const sections = [...document.querySelectorAll('.portfolio-section[id]')];

if (navLinks.length && sections.length) {
  const observer = new IntersectionObserver(
    entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach(link => link.classList.toggle('active', link.hash === `#${visible.target.id}`));
    },
    { rootMargin: '-18% 0px -62% 0px', threshold: [0, .2, .5] },
  );
  sections.forEach(section => observer.observe(section));
}

const attemptTabs = [...document.querySelectorAll('.attempt-tab')];
const attemptPanes = [...document.querySelectorAll('[data-attempt-pane]')];

attemptTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const attempt = tab.dataset.attempt;
    attemptTabs.forEach(item => item.classList.toggle('active', item === tab));
    attemptPanes.forEach(pane => pane.classList.toggle('active', pane.dataset.attemptPane === attempt));
  });
});

document.querySelectorAll('[data-walkthrough]').forEach(walkthrough => {
  const steps = [...walkthrough.querySelectorAll('[data-walk-step]')];
  const targets = [...document.querySelectorAll('[data-step-target]')];
  const currentLabel = walkthrough.querySelector('[data-current-step]');
  const progress = walkthrough.querySelector('[data-step-progress]');
  const previous = walkthrough.querySelector('[data-step-prev]');
  const next = walkthrough.querySelector('[data-step-next]');
  let current = 0;

  const show = index => {
    current = Math.max(0, Math.min(index, steps.length - 1));
    steps.forEach((step, stepIndex) => step.classList.toggle('active', stepIndex === current));
    targets.forEach((target, stepIndex) => target.classList.toggle('active', stepIndex === current));
    if (currentLabel) currentLabel.textContent = String(current + 1).padStart(2, '0');
    if (progress) progress.style.width = `${((current + 1) / steps.length) * 100}%`;
    if (previous) previous.disabled = current === 0;
    if (next) {
      next.disabled = current === steps.length - 1;
      next.textContent = current === steps.length - 1 ? '演示完成 ✓' : '下一步 →';
    }
  };

  targets.forEach((target, index) => target.addEventListener('click', () => show(index)));
  previous?.addEventListener('click', () => show(current - 1));
  next?.addEventListener('click', () => show(current + 1));
  show(0);
});
