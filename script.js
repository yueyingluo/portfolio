const copy = {
  en: {
    name: 'Yueying<br />Luo<span>.</span>', phoneLink: 'Phone / WeChat · 18028356417', eyebrow: 'PORTFOLIO / 2026',
    role: 'AI undergraduate building reliable agent systems and applied LLM products.', navAbout: 'About', navExperience: 'Experience', navWork: 'Selected work',
    aboutTitle: 'Curious about how intelligent systems become genuinely useful.',
    aboutP1: 'I’m a third-year undergraduate studying Artificial Intelligence at Peking University, focused on foundation models and agent systems. I enjoy turning ambiguous, real-world tasks into dependable technical products.',
    aboutP2: 'My work spans agent evolution, AI search, active retrieval, and evaluation. I’m seeking applied LLM and agent-algorithm internships.',
    factSchoolLabel: 'EDUCATION', factSchool: 'Peking University', factMajorLabel: 'FOCUS', factMajor: 'AI · Foundation Models · Agents', factDateLabel: 'EXPECTED', factDate: 'Jun 2027',
    experienceTitle: 'Experience', experienceNote: 'Building systems that search, reason, and improve.',
    taotianDate: 'JUN 2026 — PRESENT', taotianTitle: 'Intelligent Service Algorithms <span>@ Taotian Group</span>', taotianBody: 'Building a self-evolving agent for platform intervention in after-sales disputes. The work separates service-policy improvement from policy adherence, using two evaluators and rewards to improve both user outcomes and operational guardrails.',
    baiduDate: 'DEC 2025 — MAY 2026', baiduTitle: 'AI Strategy Intern <a href="https://baike.baidu.com/item/GenFlow/66327629" target="_blank" rel="noreferrer">@ Baidu ↗</a>', baiduBody: 'Built layered AI search capabilities through query understanding, reranking, and multi-agent deep search.',
    pkuDate: 'MAR 2025 — AUG 2025', pkuTitle: 'Research Intern <span>@ Peking University</span>', pkuBody: 'Trained a legal QA agent to interleave retrieval and reasoning through SFT + reinforcement learning.',
    workTitle: 'Selected work', workNote: 'Open a project to walk through the system in an interview.', detailButton: 'View system walkthrough',
    project1Kicker: 'AGENT EVOLUTION · TAOTIAN', project1Title: 'A self-evolving after-sales intervention agent', project1Body: 'A dual-objective feedback loop that improves service policies while making the agent more reliable at executing existing SOPs.', project1Metric1: 'SOP adherence: 81% → 87%', project1Metric2: '0 → 1 ownership',
    p1Flow1: 'Unresolved dispute', p1Flow2: 'Two evaluators', p1Flow3: 'Skill update', p1Flow4: 'Offline evaluation', p1Detail1Title: 'Policy evolution', p1Detail1: 'Compare agent and final platform resolutions to identify evidence gaps, compliant alternatives, and communication improvements.', p1Detail2Title: 'Guardrail evolution', p1Detail2: 'A separate evaluator checks SOP adherence, compensation boundaries, and process constraints.', p1Detail3Title: 'My contribution', p1Detail3: 'Built data construction, dual evaluators, rewards, skill updates, and offline evaluation in Python.',
    project2Kicker: 'AI SEARCH · BAIDU', project2Title: 'Layered AI search for direct and deep retrieval', project2Body: 'A routing system combines query rewriting and reranking for fast search with multi-agent progressive search for complex tasks.', project2Metric1: '79% quality rate', project2Metric2: '94% usability',
    p2Flow1: 'Intent routing', p2Flow2: 'Direct or deep search', p2Flow3: 'Evidence selection', p2Flow4: 'Answer / report', p2Detail1Title: 'Direct search', p2Detail1: 'Fine-tuned Qwen3-8B rewrites ambiguous queries before retrieval; Qwen3-Reranker-4B selects high-value evidence within a token budget.', p2Detail2Title: 'Deep search', p2Detail2: 'A User Agent plans and judges completion. An Assistant Agent selects tools and executes task-specific search SOPs.', p2Detail3Title: 'My contribution', p2Detail3: 'Designed prompts and integrated search, finance, academic, and browser tools for iterative search improvements.',
    project3Kicker: 'APPLIED RESEARCH · RAG', project3Title: 'Training a legal QA agent for active retrieval', project3Body: 'SFT + RL trains a Qwen2.5-7B agent to alternate between reasoning, retrieval, and answer generation over legal knowledge.', project3Metric1: '1,300+ legal documents', project3Metric2: '+5 pp Accuracy',
    p3Flow1: 'Legal question', p3Flow2: 'Reason &amp; search', p3Flow3: 'Read retrieved laws', p3Flow4: 'Grounded answer', p3Detail1Title: 'Knowledge layer', p3Detail1: 'Built a 1,300+ civil-law corpus using Qwen3-Embedding and FAISS.', p3Detail2Title: 'Post-training', p3Detail2: 'Created ReAct SFT data and compared DPO, PPO, and GRPO under rewards for answer accuracy and valid retrieval calls.', p3Detail3Title: 'Finding', p3Detail3: 'PPO achieved the best result, improving jecqa Accuracy by 5 percentage points over baseline.',
    footer: 'Designed and built by Yueying Luo. Open to applied LLM and agent opportunities.'
  },
  zh: {
    name: '罗玥萦<span>.</span>', phoneLink: '手机 / 微信 · 18028356417', eyebrow: '个人作品集 / 2026',
    role: '北京大学人工智能本科生，专注于智能体系统与大模型算法。', navAbout: '关于我', navExperience: '经历', navWork: '代表工作',
    aboutTitle: '我关心智能系统如何真正解决现实问题。',
    aboutP1: '我是北京大学人工智能专业本科三年级学生，关注基础模型、智能体系统与后训练。我喜欢把模糊的真实需求转化为可靠、可落地的技术产品。',
    aboutP2: '近期工作涉及 Agent 自进化、AI 搜索、主动检索与评测。我正在寻找大模型算法与 Agent 方向的实习机会。',
    factSchoolLabel: '教育经历', factSchool: '北京大学', factMajorLabel: '关注方向', factMajor: '人工智能 · 基础模型 · 智能体', factDateLabel: '预计毕业', factDate: '2027 年 6 月',
    experienceTitle: '实习与研究经历', experienceNote: '构建能够检索、推理并持续优化的系统。',
    taotianDate: '2026 年 6 月 — 至今', taotianTitle: '智能服务算法 <span>@ 淘天集团</span>', taotianBody: '面向售后纠纷的平台介入场景，从 0 到 1 构建自进化 Agent；用两套 Evaluator 和 Reward 分别优化服务策略与策略遵循，在用户体验和业务护栏之间取得平衡。',
    baiduDate: '2025 年 12 月 — 2026 年 5 月', baiduTitle: '通用智能体策略实习生 <a href="https://baike.baidu.com/item/GenFlow/66327629" target="_blank" rel="noreferrer">@ 百度 ↗</a>', baiduBody: '围绕 Query 理解、重排与多 Agent 深度搜索，参与构建分层 AI 搜索能力。',
    pkuDate: '2025 年 3 月 — 2025 年 8 月', pkuTitle: '研究实习生 <span>@ 北京大学</span>', pkuBody: '通过 SFT + 强化学习训练模型交替完成推理与检索，提升法律问答质量。',
    workTitle: '代表工作', workNote: '点击展开，在面试中逐层讲解系统。', detailButton: '展开系统讲解',
    project1Kicker: 'AGENT 自进化 · 淘天', project1Title: '面向售后平台介入的自进化 Agent', project1Body: '一套双目标反馈闭环：持续优化服务策略，同时让 Agent 更稳定地遵循既有 SOP。', project1Metric1: 'SOP 遵循率：81% → 87%', project1Metric2: '从 0 到 1 负责',
    p1Flow1: '协商未解决', p1Flow2: '双 Evaluator', p1Flow3: 'Skill 更新', p1Flow4: '离线评测', p1Detail1Title: '策略进化', p1Detail1: '对比 Agent 与最终平台方案，定位证据缺口、合规替代路径与沟通方式的改进空间。', p1Detail2Title: '护栏进化', p1Detail2: '独立 Evaluator 检查 SOP、赔付边界和流程约束的遵循情况。', p1Detail3Title: '我的贡献', p1Detail3: '使用 Python 负责数据构造、双 Evaluator、Reward、Skill 更新和离线评测。',
    project2Kicker: 'AI 搜索 · 百度', project2Title: '直接搜索与深度搜索协同的分层 AI 搜索', project2Body: '通过意图分流，将 Query 改写与重排用于快速搜索，并以多 Agent 渐进式搜索处理复杂任务。', project2Metric1: '优质率 79%', project2Metric2: '可用率 94%',
    p2Flow1: '意图分流', p2Flow2: '直接 / 深度搜索', p2Flow3: '证据筛选', p2Flow4: '回答 / 报告', p2Detail1Title: '直接搜索', p2Detail1: '微调 Qwen3-8B 改写复杂 Query；Qwen3-Reranker-4B 在 token 预算内筛选高价值证据。', p2Detail2Title: '深度搜索', p2Detail2: 'User Agent 规划并判断完成度，Assistant Agent 选择工具并按任务 SOP 执行。', p2Detail3Title: '我的贡献', p2Detail3: '负责 Prompt 设计及搜索、财经、学术与浏览器工具接入，支持搜索策略持续迭代。',
    project3Kicker: '应用研究 · RAG', project3Title: '训练具备主动检索能力的法律问答 Agent', project3Body: '基于 Qwen2.5-7B，通过 SFT + RL 训练模型在法律知识上交替完成推理、检索与回答。', project3Metric1: '1,300+ 法律文档', project3Metric2: 'Accuracy +5 pp',
    p3Flow1: '法律问题', p3Flow2: '推理并检索', p3Flow3: '阅读法条', p3Flow4: '有依据的回答', p3Detail1Title: '知识层', p3Detail1: '使用 Qwen3-Embedding 与 FAISS 构建 1,300+ 条民法条文库。', p3Detail2Title: '后训练', p3Detail2: '构建 ReAct SFT 数据，并在答案正确性和有效检索调用等奖励下对比 DPO、PPO、GRPO。', p3Detail3Title: '实验结论', p3Detail3: 'PPO 效果最佳，在 jecqa 上较基线提升 5 个 Accuracy 百分点。',
    footer: '由罗玥萦设计与开发。期待大模型算法与 Agent 方向机会。'
  }
};

let lang = 'en';
const toggle = document.querySelector('#language-toggle');
function render() {
  document.documentElement.lang = lang;
  document.title = lang === 'en' ? 'Yueying Luo | AI & Agent Systems' : '罗玥萦 | 人工智能与智能体系统';
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.innerHTML = copy[lang][el.dataset.i18n]; });
  toggle.textContent = lang === 'en' ? '中文' : 'EN';
}

toggle.addEventListener('click', () => { lang = lang === 'en' ? 'zh' : 'en'; render(); });
document.querySelectorAll('.project-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const detail = button.closest('.project-card').querySelector('.project-detail');
    const open = detail.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
});
