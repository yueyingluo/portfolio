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

const guideOverlay = document.querySelector('.guide-overlay');
if (guideOverlay) {
  const slides = [...guideOverlay.querySelectorAll('.guide-slide')];
  const dots = [...guideOverlay.querySelectorAll('.guide-dots button')];
  const counter = guideOverlay.querySelector('.guide-counter');
  const skip = guideOverlay.querySelector('.guide-skip');
  const previous = guideOverlay.querySelector('.guide-prev');
  const next = guideOverlay.querySelector('.guide-next');
  const reopen = document.querySelector('.guide-reopen');
  let current = 0;

  const showGuideStep = index => {
    current = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === current));
    dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === current));
    counter.textContent = `${current + 1} / ${slides.length}`;
    previous.disabled = current === 0;
    next.innerHTML = current === slides.length - 1 ? '进入作品集 <span>↗</span>' : '下一步 <span>→</span>';
  };

  const openGuide = () => {
    showGuideStep(0);
    guideOverlay.inert = false;
    guideOverlay.classList.add('open');
    guideOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('guide-open');
    setTimeout(() => skip.focus(), 180);
  };

  const closeGuide = () => {
    guideOverlay.classList.remove('open');
    guideOverlay.setAttribute('aria-hidden', 'true');
    guideOverlay.inert = true;
    document.body.classList.remove('guide-open');
    try { sessionStorage.setItem('engineering-portfolio-guide-seen-v1', 'true'); } catch (error) { console.warn('Guide state could not be saved', error); }
  };

  skip.addEventListener('click', closeGuide);
  reopen?.addEventListener('click', openGuide);
  previous.addEventListener('click', () => showGuideStep(current - 1));
  next.addEventListener('click', () => current === slides.length - 1 ? closeGuide() : showGuideStep(current + 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => showGuideStep(index)));
  guideOverlay.addEventListener('click', event => { if (event.target === guideOverlay) closeGuide(); });
  document.addEventListener('keydown', event => {
    if (!guideOverlay.classList.contains('open')) return;
    if (event.key === 'Escape') closeGuide();
    if (event.key === 'ArrowRight') showGuideStep(current + 1);
    if (event.key === 'ArrowLeft') showGuideStep(current - 1);
  });

  const forceGuide = new URLSearchParams(window.location.search).get('guide') === '1';
  let seen = false;
  try { seen = sessionStorage.getItem('engineering-portfolio-guide-seen-v1') === 'true'; } catch (error) { console.warn('Guide state could not be read', error); }
  if (forceGuide || !seen) setTimeout(openGuide, 500);
}

const assistantRoot = document.querySelector('.ai-assistant');
if (assistantRoot) {
  const launcher = assistantRoot.querySelector('.ai-launcher');
  const panel = assistantRoot.querySelector('.ai-panel');
  const close = assistantRoot.querySelector('.ai-close');
  const thread = assistantRoot.querySelector('.ai-thread');
  const prompts = assistantRoot.querySelector('.ai-prompts');
  const form = assistantRoot.querySelector('.ai-form');
  const input = assistantRoot.querySelector('.ai-input');
  const send = assistantRoot.querySelector('.ai-send');
  const history = [];
  let busy = false;

  const suggestedQuestions = [
    'QualityGate Coding Agent 做了什么？',
    '五级质量门禁分别检查什么？',
    '淘天 Agent 如何自动优化 Prompt？',
    '百度双智能体如何协作？',
    '她适合什么研发岗位？',
  ];

  const createMessage = (role, text = '', extraClass = '') => {
    const row = document.createElement('div');
    row.className = `ai-message ${role} ${extraClass}`.trim();
    const bubble = document.createElement('div');
    bubble.className = 'ai-message-bubble';
    bubble.textContent = text;
    row.appendChild(bubble);
    thread.appendChild(row);
    thread.scrollTop = thread.scrollHeight;
    return bubble;
  };

  const setOpen = open => {
    panel.classList.toggle('open', open);
    panel.setAttribute('aria-hidden', String(!open));
    launcher.setAttribute('aria-expanded', String(open));
    if (open) setTimeout(() => input.focus(), 180);
  };

  const setBusy = value => {
    busy = value;
    send.disabled = value;
    input.disabled = value;
  };

  const ask = async rawQuestion => {
    const question = rawQuestion.trim();
    if (!question || busy) return;
    setOpen(true);
    createMessage('user', question);
    history.push({role: 'user', content: question});
    input.value = '';
    input.style.height = 'auto';
    setBusy(true);

    const answerBubble = createMessage('assistant');
    answerBubble.innerHTML = '<span class="ai-typing"><i></i><i></i><i></i></span>';
    try {
      const response = await fetch(assistantRoot.dataset.endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({lang: 'zh', messages: history.slice(-8)}),
      });
      if (!response.ok || !response.body) throw new Error(`HTTP ${response.status}`);

      answerBubble.textContent = '';
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let answer = '';
      while (true) {
        const {done, value} = await reader.read();
        buffer += decoder.decode(value || new Uint8Array(), {stream: !done}).replace(/\r\n/g, '\n');
        const events = buffer.split('\n\n');
        buffer = events.pop() || '';
        for (const event of events) {
          const dataLine = event.split('\n').find(line => line.startsWith('data:'));
          if (!dataLine) continue;
          const payload = dataLine.slice(5).trim();
          if (!payload || payload === '[DONE]') continue;
          const delta = JSON.parse(payload).choices?.[0]?.delta?.content || '';
          if (delta) {
            answer += delta;
            answerBubble.textContent = answer;
            thread.scrollTop = thread.scrollHeight;
          }
        }
        if (done) break;
      }
      if (!answer) throw new Error('Empty response');
      const cleanAnswer = answer.replace(/\*\*/g, '').replace(/`([^`]+)`/g, '$1').replace(/^#{1,6}\s+/gm, '');
      answerBubble.textContent = cleanAnswer;
      history.push({role: 'assistant', content: cleanAnswer});
    } catch (error) {
      console.error('Portfolio assistant error:', error);
      answerBubble.textContent = '暂时无法连接 AI 助手，请稍后重试。';
      answerBubble.parentElement.classList.add('error');
    } finally {
      setBusy(false);
      input.focus();
    }
  };

  createMessage('assistant', '你好，我可以回答关于 AI Coding、Agent 自进化、多 Agent 搜索，以及罗玥萦个人负责范围的问题。', 'initial');
  prompts.innerHTML = suggestedQuestions.map(question => `<button class="ai-prompt" type="button">${question}</button>`).join('');
  prompts.querySelectorAll('.ai-prompt').forEach(button => button.addEventListener('click', () => ask(button.textContent)));
  launcher.addEventListener('click', () => setOpen(true));
  close.addEventListener('click', () => setOpen(false));
  form.addEventListener('submit', event => { event.preventDefault(); ask(input.value); });
  input.addEventListener('keydown', event => {
    if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); form.requestSubmit(); }
  });
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = `${Math.min(input.scrollHeight, 96)}px`;
  });
}
