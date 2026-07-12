const copy = {
  en: {
    name: 'Yueying<br />Luo<span>.</span>', phoneLink: 'Phone / WeChat · 18028356417', eyebrow: 'PORTFOLIO / 2026',
    role: 'AI undergraduate building reliable agent systems and applied LLM products.', navAbout: 'About', navExperience: 'Experience', navWork: 'Selected work',
    aboutTitle: 'Curious about how intelligent systems become genuinely useful.',
    aboutP1: 'I’m a third-year undergraduate studying Artificial Intelligence at Peking University, focused on foundation models and agent systems. I enjoy turning ambiguous, real-world tasks into dependable technical products.',
    aboutP2: 'My work spans agent evolution, AI search, active retrieval, and evaluation. I’m seeking applied LLM and agent-algorithm internships.',
    factSchoolLabel: 'EDUCATION', factSchool: 'Peking University', factMajorLabel: 'FOCUS', factMajor: 'AI · Foundation Models · Agents', factDateLabel: 'EXPECTED', factDate: 'Jun 2027',
    experienceTitle: 'Experience', experienceNote: 'Building systems that search, reason, and improve.',
    taotianDate: 'JUN 2026 — PRESENT', taotianTitle: 'Intelligent Service Algorithms <span>@ Taotian Group</span>', taotianBody: 'Building a self-evolving agent for platform intervention in after-sales disputes. The work separates service-policy improvement from policy adherence.',
    taotianTags: '<li>Agent evolution</li><li>LLM evaluation</li><li>Reward design</li><li>Python</li>',
    baiduDate: 'DEC 2025 — MAY 2026', baiduTitle: 'AI Strategy Intern <a href="https://baike.baidu.com/item/GenFlow/66327629" target="_blank" rel="noreferrer">@ Baidu ↗</a>', baiduBody: 'Built layered AI search capabilities through query understanding, reranking, and multi-agent deep search.',
    baiduTags: '<li>Query rewriting</li><li>Reranking</li><li>Multi-agent search</li><li>Python</li>',
    pkuDate: 'MAR 2025 — AUG 2025', pkuTitle: 'Research Intern <span>@ Peking University</span>', pkuBody: 'Trained a legal QA agent to interleave retrieval and reasoning through SFT + reinforcement learning.',
    pkuTags: '<li>Active retrieval</li><li>SFT + RL</li><li>ReAct</li><li>PyTorch</li>',
    workTitle: 'Selected work', workNote: 'Open a project for a 15-minute technical walkthrough.', detailButton: 'Explore the full case study', detailCloseButton: 'Close case study',
    project1Kicker: 'AGENT EVOLUTION · TAOTIAN', project1Title: 'A self-evolving after-sales intervention agent', project1Body: 'A dual-objective feedback loop that improves service policies while making the agent more reliable at executing existing SOPs.', project1Metric1: 'SOP adherence: 81% → 87%', project1Metric2: '0 → 1 ownership',
    project2Kicker: 'AI SEARCH · BAIDU', project2Title: 'Layered AI search for direct and deep retrieval', project2Body: 'A routing system combines query rewriting and reranking for fast search with multi-agent progressive search for complex tasks.', project2Metric1: '79% quality rate', project2Metric2: '94% usability',
    project3Kicker: 'APPLIED RESEARCH · ACTIVE RETRIEVAL', project3Title: 'Training a legal QA agent for active retrieval', project3Body: 'SFT + RL trains a Qwen2.5-7B agent to alternate between reasoning, retrieval, and answer generation over legal knowledge.', project3Metric1: '1,300+ legal documents', project3Metric2: '+5 pp Accuracy',
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
    taotianDate: '2026 年 6 月 — 至今', taotianTitle: '智能服务算法 <span>@ 淘天集团</span>', taotianBody: '面向售后纠纷的平台介入场景，从 0 到 1 构建自进化 Agent，将服务策略优化与策略遵循优化解耦。',
    taotianTags: '<li>Agent 自进化</li><li>LLM 评测</li><li>Reward 设计</li><li>Python</li>',
    baiduDate: '2025 年 12 月 — 2026 年 5 月', baiduTitle: '通用智能体策略实习生 <a href="https://baike.baidu.com/item/GenFlow/66327629" target="_blank" rel="noreferrer">@ 百度 ↗</a>', baiduBody: '围绕 Query 理解、检索重排与多 Agent 深度搜索，参与构建分层 AI 搜索能力。',
    baiduTags: '<li>Query 改写</li><li>检索重排</li><li>多 Agent 搜索</li><li>Python</li>',
    pkuDate: '2025 年 3 月 — 2025 年 8 月', pkuTitle: '研究实习生 <span>@ 北京大学</span>', pkuBody: '通过 SFT + 强化学习训练模型交替完成推理与检索，提升法律问答质量。',
    pkuTags: '<li>主动检索</li><li>SFT + RL</li><li>ReAct</li><li>PyTorch</li>',
    workTitle: '代表工作', workNote: '展开项目，进入一段完整的 15 分钟技术讲解。', detailButton: '展开完整案例', detailCloseButton: '收起案例',
    project1Kicker: 'AGENT 自进化 · 淘天', project1Title: '面向售后平台介入的自进化 Agent', project1Body: '一套双目标反馈闭环：持续优化服务策略，同时让 Agent 更稳定地遵循既有 SOP。', project1Metric1: 'SOP 遵循率：81% → 87%', project1Metric2: '从 0 到 1 负责',
    project2Kicker: 'AI 搜索 · 百度', project2Title: '直接搜索与深度搜索协同的分层 AI 搜索', project2Body: '通过意图分流，将 Query 改写与重排用于快速搜索，并以多 Agent 渐进式搜索处理复杂任务。', project2Metric1: '优质率 79%', project2Metric2: '可用率 94%',
    project3Kicker: '应用研究 · 主动检索', project3Title: '训练具备主动检索能力的法律问答 Agent', project3Body: '基于 Qwen2.5-7B，通过 SFT + RL 训练模型在法律知识上交替完成推理、检索与回答。', project3Metric1: '1,300+ 法律文档', project3Metric2: 'Accuracy +5 pp',
    footer: '由罗玥萦设计与开发。期待大模型算法与 Agent 方向机会。'
  }
};

const projectDetails = {
  en: [
    {
      eyebrow: '15-MINUTE WALKTHROUGH · AGENT EVOLUTION',
      headline: 'Teach the system what to improve — and what must stay constrained.',
      intro: 'The key design decision was to stop treating every dissatisfied case as the same failure. A bad outcome may come from an incomplete service policy, or from an agent failing to execute a policy that is already good enough. Those two causes need different data, evaluators, rewards, and updates.',
      star: [
        {letter:'S', name:'Situation', title:'Negotiation reaches a dead end', text:'When merchants and consumers cannot reach an acceptable after-sales agreement, the platform must intervene with actions such as return-and-refund or refund-only. The solution must improve user experience without violating compensation or process constraints.'},
        {letter:'T', name:'Task', title:'Turn vague dissatisfaction into learnable signals', text:'Build an evolution loop that separates policy capability gaps from execution deviations, then improves both through one controllable Skill-OPT-inspired engine.'},
        {letter:'A', name:'Action', title:'Two rewards, two evaluators, one update engine', text:'Construct paired agent/platform cases, diagnose the failure type, update the procedural skill, and gate each update with offline evaluation before it can affect the agent.'},
        {letter:'R', name:'Result', title:'A measurable guardrail gain', text:'SOP adherence improved from 81% to 87%. Satisfaction uplift remains an offline modeling target until it is validated through online experiments.'}
      ],
      architectureTitle: 'The evolution loop',
      architectureNote: 'The diagnostic split is the center of the system: policy insufficiency and execution failure never share the same optimization signal.',
      nodes: [
        {tag:'01 · OBSERVE', title:'Unresolved case', text:'Conversation, order context, agent proposal, final platform resolution, and satisfaction signal.', tone:'violet'},
        {tag:'02 · DIAGNOSE', title:'Dual evaluator', text:'Route the case into policy-gap or adherence-gap optimization.', tone:'orange'},
        {tag:'03A · IMPROVE POLICY', title:'Strategy evolution', text:'Fill evidence gaps, add compliant alternatives, improve empathy and user guidance.', tone:'green'},
        {tag:'03B · IMPROVE EXECUTION', title:'SOP alignment', text:'Reward correct process, compensation boundaries, and faithful strategy execution.', tone:'blue'},
        {tag:'04 · UPDATE', title:'Skill-OPT engine', text:'Propose controlled edits to the external procedural skill.', tone:'violet'},
        {tag:'05 · GATE', title:'Offline validation', text:'Accept only updates that improve the target evaluator without hurting guardrails.', tone:'green'}
      ],
      modulesTitle: 'How the problem is modeled',
      modules: [
        {number:'01', title:'Failure taxonomy', text:'Policy gap A: missing information prevents a valid decision, so the agent should guide evidence upload. Policy gap B: current rules technically resolve the case, but the resolution is not satisfactory enough. Execution gap: the policy is sufficient, but the agent does not follow it.', meta:'Three failure modes → two optimization tracks'},
        {number:'02', title:'Strategy dimension mining', text:'Use a model to abstract reusable dimensions from agent and final platform resolutions: evidence completeness, compliant flexibility, compensation rationality, empathy, and user guidance. A rubric-based evaluator scores both resolutions on the same dimensions.', meta:'Free-form cases → structured features'},
        {number:'03', title:'Satisfaction uplift model', text:'Use LightGBM to estimate P(satisfied | case context, strategy scores). Score the agent and platform resolution separately; their probability difference becomes the expected uplift used for offline strategy prioritization.', meta:'Prediction, not causal proof'},
        {number:'04', title:'Dual-objective optimization', text:'One evaluator rewards policy improvement; the other rewards faithful SOP execution. Keeping them separate prevents a satisfaction-oriented update from silently breaking compensation and process guardrails.', meta:'Effectiveness × controllability'}
      ],
      challengesTitle: 'Challenges and design trade-offs',
      challenges: [
        {title:'Evaluator reliability', text:'LLM judges can drift or reward superficial wording. Use fixed rubrics, human-calibrated samples, agreement checks, and regression sets around high-risk policy boundaries.'},
        {title:'Prediction versus causality', text:'Historical transfer-to-human cases are selected, not randomized. LightGBM can rank likely improvements, but true satisfaction lift still requires calibrated offline validation and eventual gray/A-B experiments.'},
        {title:'Reward conflict', text:'A more generous solution may improve satisfaction while increasing business risk. Separate rewards make the conflict visible, and validation gating prevents one metric from dominating silently.'},
        {title:'Generalization of skill edits', text:'An edit that fixes one case may overfit its wording. Updates should abstract procedures, use bounded edits, and be tested on held-out case families before acceptance.'}
      ],
      ownershipTitle: 'My ownership',
      ownership: 'I built the project from zero to one: data construction, the two evaluators, reward design, the Skill update workflow, and offline evaluation — implemented primarily in Python.',
      deepDiveTitle: 'Good follow-up directions',
      deepDive: ['Evaluator calibration', 'LightGBM features & leakage', 'Reward conflict handling', 'Skill edit acceptance', 'Offline-to-online validation']
    },
    {
      eyebrow: '15-MINUTE WALKTHROUGH · AI SEARCH',
      headline: 'Use the cheapest search path that can still finish the task.',
      intro: 'AI search has two very different workloads. Simple factual queries need low latency and high-quality evidence. Complex, multi-domain questions need decomposition, tool selection, repeated search, and an explicit stopping rule. The system routes between those paths rather than forcing one architecture onto every query.',
      star: [
        {letter:'S', name:'Situation', title:'One search depth does not fit every query', text:'A single retrieval call is fast but brittle for ambiguous and multi-step requests. Full deep search is more capable, but too expensive and slow for ordinary questions.'},
        {letter:'T', name:'Task', title:'Balance latency, coverage, and answerability', text:'Build a layered AI-search pipeline that improves direct retrieval quality while escalating only genuinely complex tasks into progressive multi-agent search.'},
        {letter:'A', name:'Action', title:'Route, rewrite, rerank, then reason when needed', text:'Train a query rewriter, rerank retrieved documents under a token budget, and use a planner/executor agent pair for task-specific multi-round search.'},
        {letter:'R', name:'Result', title:'Quality at production scale', text:'The optimized direct-search path reached 79% quality and 94% usability. The overall search system achieved 98% intent-routing accuracy and served 150k+ daily active users.'}
      ],
      architectureTitle: 'Layered search architecture',
      architectureNote: 'Intent routing is a cost-and-capability decision: direct search optimizes evidence quality; deep search optimizes task completion.',
      nodes: [
        {tag:'01 · UNDERSTAND', title:'Intent router', text:'Estimate whether the request is directly searchable or requires multi-step investigation.', tone:'blue'},
        {tag:'02A · FAST PATH', title:'Query rewrite', text:'Qwen3-8B resolves context, ambiguity, multiple intents, time, location, and user information.', tone:'green'},
        {tag:'02B · DEEP PATH', title:'User Agent', text:'Decompose the task, plan searches, inspect evidence, and judge completion.', tone:'violet'},
        {tag:'03A · RETRIEVE', title:'Search + rerank', text:'Volcano Engine retrieval followed by Qwen3-Reranker-4B relevance scoring.', tone:'orange'},
        {tag:'03B · EXECUTE', title:'Assistant Agent', text:'Select and execute search, finance, academic, page-reading, and browser tools.', tone:'blue'},
        {tag:'04 · SYNTHESIZE', title:'Evidence package', text:'Apply relevance thresholds and token budgets before answering or writing a report.', tone:'green'}
      ],
      modulesTitle: 'Core technical decisions',
      modules: [
        {number:'01', title:'Query rewriting with SFT', text:'Fine-tune Qwen3-8B on 2k single-turn real queries, 6k multi-turn dialogues, and rule-synthesized augmentation. The model supplements missing context, disambiguates entities, splits multiple intents, and injects time, location, or user information when needed.', meta:'Real traffic + targeted synthetic augmentation'},
        {number:'02', title:'Retrieve then rerank', text:'Use the rewritten query to retrieve broad candidates from the Volcano Engine Search API. Qwen3-Reranker-4B scores each Query–Document pair; relevance thresholds and a token budget retain the highest-value evidence for the downstream LLM.', meta:'Recall first, precision second'},
        {number:'03', title:'Planner–executor separation', text:'The User Agent owns task decomposition, search planning, result reading, and completion judgment. The Assistant Agent receives high-level instructions, chooses tools, and executes. This Plan–Execute split improves controllability and makes failures easier to localize.', meta:'User Agent ↔ Assistant Agent'},
        {number:'04', title:'Task-specific progressive search', text:'Different task types receive different prompts, SOPs, must-have information, report templates, and termination conditions. A maximum-turn limit provides the universal safety stop.', meta:'Shared framework, differentiated paths'}
      ],
      challengesTitle: 'Challenges and design trade-offs',
      challenges: [
        {title:'Rewrite without intent drift', text:'Adding context can improve retrieval, but hallucinated constraints can silently change the request. Real-query coverage and task-specific rules are needed to keep rewriting faithful.'},
        {title:'Recall versus context noise', text:'More documents improve coverage but consume tokens and distract generation. Reranking plus threshold/token-budget truncation makes the trade-off explicit.'},
        {title:'Knowing when to stop', text:'Deep search can loop or over-search. Completion judgment combines task-specific must-have information, termination criteria, and a hard maximum number of rounds.'},
        {title:'Tool heterogeneity', text:'Search, finance, academic, page-reading, and browser tools return different schemas and failure modes. A unified tool abstraction keeps the agent prompt and execution protocol stable.'}
      ],
      ownershipTitle: 'My contribution',
      ownership: 'I worked on the Qwen3-8B query-rewrite training pipeline, prompt design for progressive multi-agent search, and standardized integration of domain search and browser tools.',
      deepDiveTitle: 'Good follow-up directions',
      deepDive: ['SFT data construction', 'Reranker truncation', 'Intent routing', 'Agent termination', 'Tool abstraction']
    },
    {
      eyebrow: '15-MINUTE WALKTHROUGH · ACTIVE RETRIEVAL',
      headline: 'Train the model to decide when external law is necessary.',
      intro: 'Conventional RAG retrieves once before generation. Legal questions are harder: the model must recognize a knowledge gap, formulate a useful query, read the retrieved provision, and continue reasoning without losing the original task. This project trains that behavior rather than relying on prompting alone.',
      star: [
        {letter:'S', name:'Situation', title:'Legal answers need precise external grounding', text:'A language model may know general legal concepts yet cite the wrong provision or answer without retrieving. One-shot RAG also struggles when a question needs multiple reasoning and search steps.'},
        {letter:'T', name:'Task', title:'Turn retrieval into a learned action', text:'Train Qwen2.5-7B to interleave reasoning, search calls, retrieved legal evidence, and final answering inside one ReAct-style trajectory.'},
        {letter:'A', name:'Action', title:'SFT for behavior, RL for outcomes', text:'Build the legal retrieval environment, create high-quality SFT trajectories, define rewards for answer accuracy and valid retrieval behavior, then compare DPO, PPO, and GRPO.'},
        {letter:'R', name:'Result', title:'PPO worked best in this setting', text:'The best PPO configuration improved jecqa Accuracy by 5 percentage points over baseline. Ablations separated the contributions of retrieval, SFT, and RL.'}
      ],
      architectureTitle: 'Reason–search interaction loop',
      architectureNote: 'Search is part of the trajectory: the model can retrieve, consume evidence, and continue reasoning before producing the final answer.',
      nodes: [
        {tag:'01 · QUESTION', title:'Legal QA input', text:'A question that may require precise civil-law provisions.', tone:'orange'},
        {tag:'02 · REASON', title:'Qwen2.5-7B', text:'Analyze the task and decide whether external evidence is needed.', tone:'violet'},
        {tag:'03 · ACT', title:'Search call', text:'Generate a valid retrieval query in the required ReAct format.', tone:'blue'},
        {tag:'04 · RETRIEVE', title:'FAISS law index', text:'Search 1,300+ civil-law documents embedded with Qwen3-Embedding.', tone:'green'},
        {tag:'05 · OBSERVE', title:'Retrieved provision', text:'Feed relevant legal text back into the reasoning trajectory.', tone:'orange'},
        {tag:'06 · ANSWER', title:'Grounded response', text:'Produce the final answer with retrieved legal support.', tone:'green'}
      ],
      modulesTitle: 'Training and experiment design',
      modules: [
        {number:'01', title:'Retrieval environment', text:'Create a 1,300+ civil-law corpus, encode it with Qwen3-Embedding, and index it in FAISS. The environment exposes retrieval as an explicit tool action rather than a hidden preprocessing step.', meta:'External knowledge becomes an action space'},
        {number:'02', title:'High-quality SFT trajectories', text:'Use prompt-based multi-step decomposition and rejection sampling to construct ReAct demonstrations that include reasoning, correctly formatted search calls, retrieved observations, and final answers.', meta:'Teach the workflow before optimizing it'},
        {number:'03', title:'Composite reward', text:'Reward final answer correctness and the presence of a correctly formatted retrieval action. This avoids a model that gets occasional answers right while never learning a usable search protocol.', meta:'Outcome reward + behavior reward'},
        {number:'04', title:'Algorithm comparison', text:'DPO learns from offline preference pairs; GRPO uses relative rewards across sampled responses; PPO directly optimizes scalar trajectory rewards with a learned value baseline. In this task, PPO produced the best Accuracy.', meta:'DPO vs PPO vs GRPO'}
      ],
      challengesTitle: 'Challenges and design trade-offs',
      challenges: [
        {title:'SFT–RL workflow mismatch', text:'If tool-call formats, environment observations, or stopping behavior differ between SFT and RL, the policy starts reinforcement learning from an unstable interaction pattern. Aligning both workflows was a key debugging step.'},
        {title:'Sparse credit assignment', text:'A final correct/incorrect label does not reveal whether the query, retrieved law, or reasoning step was responsible. The format/retrieval reward provides an additional learnable signal.'},
        {title:'Search can hurt', text:'Irrelevant provisions may distract the model. Retrieval quality and the model’s ability to ignore weak evidence matter as much as search frequency.'},
        {title:'Method choice is empirical', text:'PPO was best under this data, reward, and model setup; it is not universally superior. Training curves and controlled comparisons are required before attributing the gain to one algorithmic property.'}
      ],
      ownershipTitle: 'My contribution',
      ownership: 'I built the legal corpus and retrieval environment, constructed SFT data, designed the reward and ablation framework, compared post-training algorithms, and diagnosed the SFT/RL workflow mismatch.',
      deepDiveTitle: 'Good follow-up directions',
      deepDive: ['ReAct data format', 'Reward design', 'Why PPO won', 'SFT–RL alignment', 'Retrieval ablations']
    }
  ],
  zh: [
    {
      eyebrow: '15 分钟技术讲解 · AGENT 自进化',
      headline: '让系统知道该优化什么，也知道什么不能被破坏。',
      intro: '最关键的设计不是“把所有不满意案例都拿来训练”，而是先判断失败来自哪里：是服务策略本身能力不足，还是策略已经足够好、但 Agent 没有正确执行。两种根因需要不同的数据、Evaluator、Reward 和更新方式。',
      star: [
        {letter:'S', name:'Situation 情境', title:'商消协商进入僵局', text:'当商家与消费者无法达成满意的售后方案时，平台需要介入并给出退货退款、仅退款等决策；既要提升用户体验，又不能突破赔付边界和流程约束。'},
        {letter:'T', name:'Task 任务', title:'把模糊的不满意变成可学习信号', text:'搭建一套自进化闭环，区分“策略能力缺口”和“Agent 执行偏差”，并通过同一套受控引擎分别优化两条线。'},
        {letter:'A', name:'Action 行动', title:'双 Reward、双 Evaluator、一套更新引擎', text:'构造 Agent 与平台最终方案的配对案例，诊断失败类型，更新外部 Skill，并在影响线上 Agent 前通过离线评测门控。'},
        {letter:'R', name:'Result 结果', title:'护栏指标获得可验证提升', text:'SOP 遵循率从 81% 提升到 87%。满意率增益目前作为离线预测目标，等待后续线上实验验证。'}
      ],
      architectureTitle: '自进化闭环',
      architectureNote: '系统的中心不是更新，而是诊断分流：策略不足与执行失败不会共享同一套优化信号。',
      nodes: [
        {tag:'01 · 观察', title:'未解决案例', text:'对话、订单上下文、Agent 方案、平台最终方案与满意度反馈。', tone:'violet'},
        {tag:'02 · 诊断', title:'双 Evaluator', text:'将案例路由到策略缺口或策略遵循优化。', tone:'orange'},
        {tag:'03A · 策略优化', title:'策略进化', text:'补足证据，引入合规变通方案，改善共情与用户引导。', tone:'green'},
        {tag:'03B · 执行优化', title:'SOP 对齐', text:'奖励正确流程、赔付边界与对既有策略的忠实执行。', tone:'blue'},
        {tag:'04 · 更新', title:'Skill-OPT 引擎', text:'对外部程序化 Skill 提出受控的文本更新。', tone:'violet'},
        {tag:'05 · 门控', title:'离线验证', text:'只有目标指标提升且护栏不退化的更新才被接受。', tone:'green'}
      ],
      modulesTitle: '如何对问题建模',
      modules: [
        {number:'01', title:'失败类型抽象', text:'策略缺口 A：信息不足，Agent 应引导用户补充凭证；策略缺口 B：现有规则能处理，但方案不够满意；执行缺口：策略充分，但 Agent 没有遵循。', meta:'三类失败 → 两条优化线'},
        {number:'02', title:'策略维度挖掘', text:'用模型从 Agent 方案和平台最终方案中抽取可复用维度：证据充分性、合规变通、赔付合理性、共情和用户引导；再由统一 rubric 的 Evaluator 对两个方案评分。', meta:'自由文本案例 → 结构化特征'},
        {number:'03', title:'满意率增益预测', text:'使用 LightGBM 拟合 P(满意｜案例上下文，策略维度分)。分别对 Agent 与平台方案预测，两者概率差作为预期增益，用于离线确定策略迭代优先级。', meta:'这是预测，不是因果证明'},
        {number:'04', title:'双目标优化', text:'一套 Evaluator 奖励策略变好，另一套奖励 Agent 忠实遵循 SOP。两者解耦，避免为了满意率而无意突破赔付和流程护栏。', meta:'效果 × 可控性'}
      ],
      challengesTitle: '挑战与技术取舍',
      challenges: [
        {title:'Evaluator 可信度', text:'LLM Judge 可能漂移，也可能偏好表面表达。需要固定 rubric、人工校准样本、一致性检查和高风险规则边界的回归集。'},
        {title:'预测不等于因果', text:'转人工案例不是随机采样。LightGBM 可以排序潜在收益，但真实满意率提升仍需概率校准、时间外验证以及最终灰度 / A-B 实验。'},
        {title:'Reward 冲突', text:'更高赔付可能提高满意度，却增加业务风险。拆分 Reward 能让冲突显式化，离线门控避免一个指标悄悄支配更新。'},
        {title:'Skill 更新泛化', text:'修复单个案例的更新可能过拟合具体措辞。更新应抽象为程序化规则、限制编辑范围，并在留出的案例族上验证。'}
      ],
      ownershipTitle: '我的负责范围',
      ownership: '项目从 0 到 1 由我负责：数据构造、双 Evaluator、Reward 设计、Skill 更新流程和离线评测，主要使用 Python 实现。',
      deepDiveTitle: '可以继续深挖',
      deepDive: ['Evaluator 校准', 'LightGBM 特征与泄漏', 'Reward 冲突处理', 'Skill 更新门控', '离线到线上验证']
    },
    {
      eyebrow: '15 分钟技术讲解 · AI 搜索',
      headline: '用能够完成任务的最轻搜索路径。',
      intro: 'AI 搜索实际包含两类负载：简单事实查询需要低延迟和高质量证据；复杂跨领域问题需要任务拆解、工具选择、多轮搜索和明确的终止判断。系统通过意图分流在两条路径之间选择，而不是让所有 Query 都进入同一套重型架构。',
      star: [
        {letter:'S', name:'Situation 情境', title:'一种搜索深度无法覆盖所有 Query', text:'一次检索速度快，但面对歧义、多意图和多步骤问题很脆弱；完整深度搜索能力更强，却不适合普通 Query 的延迟和成本要求。'},
        {letter:'T', name:'Task 任务', title:'平衡延迟、覆盖率与任务完成度', text:'构建分层 AI 搜索：先提升直接搜索的 Query 理解与证据质量，仅将真正复杂的任务升级到渐进式多 Agent 搜索。'},
        {letter:'A', name:'Action 行动', title:'分流、改写、重排，必要时多轮推理', text:'训练 Query 改写模型，在 token 预算内重排召回文档，并使用 Planner–Executor 双 Agent 完成任务特定的多轮搜索。'},
        {letter:'R', name:'Result 结果', title:'生产规模下的检索质量提升', text:'直接搜索迭代后优质率达到 79%、可用率达到 94%；整体搜索链路意图识别准确率 98%，服务日均 DAU 15w+。'}
      ],
      architectureTitle: '分层搜索架构',
      architectureNote: '意图分流本质是成本与能力的决策：直接搜索优化证据质量，深度搜索优化任务完成。',
      nodes: [
        {tag:'01 · 理解', title:'意图分流', text:'判断请求可以直接检索，还是需要多步骤调查。', tone:'blue'},
        {tag:'02A · 快速路径', title:'Query 改写', text:'Qwen3-8B 补全上下文、消歧、拆分多意图，并注入时间、地点和用户信息。', tone:'green'},
        {tag:'02B · 深度路径', title:'User Agent', text:'拆解任务、规划搜索、阅读证据并判断是否完成。', tone:'violet'},
        {tag:'03A · 检索', title:'搜索 + Rerank', text:'火山引擎召回，再由 Qwen3-Reranker-4B 进行相关性打分。', tone:'orange'},
        {tag:'03B · 执行', title:'Assistant Agent', text:'选择并执行通用搜索、财经、学术、网页读取和浏览器工具。', tone:'blue'},
        {tag:'04 · 整合', title:'证据包', text:'依据相关性阈值和 token 预算组织回答或报告所需证据。', tone:'green'}
      ],
      modulesTitle: '核心技术决策',
      modules: [
        {number:'01', title:'基于 SFT 的 Query 改写', text:'使用 2k 单轮真实 Query、6k 多轮对话和规则合成增强数据微调 Qwen3-8B，覆盖上下文补全、实体消歧、多意图拆分以及时间 / 地点 / 用户信息注入。', meta:'真实流量 + 定向合成增强'},
        {number:'02', title:'先召回，再重排', text:'改写后的 Query 通过火山引擎 Search API 获得高覆盖候选；Qwen3-Reranker-4B 对 Query–Document 逐对打分，再结合相关性阈值和 token 预算保留高价值证据。', meta:'先保证 Recall，再提升 Precision'},
        {number:'03', title:'Planner–Executor 解耦', text:'User Agent 负责任务拆解、搜索规划、结果阅读和完成度判断；Assistant Agent 接收高层指令、选择并执行工具。Plan–Execute 解耦提升可控性，也让失败更容易定位。', meta:'User Agent ↔ Assistant Agent'},
        {number:'04', title:'任务特定的渐进式搜索', text:'不同任务配置不同 Prompt、SOP、必达信息、报告模板和终止条件；最大轮数作为所有任务共享的硬停止条件。', meta:'共享框架，差异化路径'}
      ],
      challengesTitle: '挑战与技术取舍',
      challenges: [
        {title:'改写不能改变原意', text:'补充上下文能提升召回，但虚构约束会悄悄改变用户需求。真实 Query 覆盖与任务规则需要共同保证改写忠实度。'},
        {title:'召回率与上下文噪声', text:'文档越多覆盖越高，却更消耗 token 并干扰生成。Rerank、阈值和 token 预算把这一取舍显式化。'},
        {title:'什么时候停止搜索', text:'深度搜索容易循环或过度搜索。完成度判断结合任务必达信息、差异化终止条件和最大轮数。'},
        {title:'工具异构', text:'搜索、财经、学术、网页和浏览器工具具有不同返回格式与失败模式。统一工具抽象让 Agent Prompt 与执行协议保持稳定。'}
      ],
      ownershipTitle: '我的贡献',
      ownership: '我参与 Qwen3-8B Query 改写训练，负责渐进式多 Agent 搜索的 Prompt 设计，并统一接入搜索、财经、学术与浏览器工具。',
      deepDiveTitle: '可以继续深挖',
      deepDive: ['SFT 数据构造', 'Rerank 截断策略', '意图分流', 'Agent 终止条件', '工具抽象层']
    },
    {
      eyebrow: '15 分钟技术讲解 · 主动检索',
      headline: '训练模型自己判断什么时候必须查法条。',
      intro: '传统 RAG 通常在生成前检索一次，但法律问题更复杂：模型需要识别知识缺口、生成有效 Query、读取检索到的法条，并在不丢失原任务的情况下继续推理。这个项目不是只靠 Prompt，而是直接训练这种“推理—检索”交替行为。',
      star: [
        {letter:'S', name:'Situation 情境', title:'法律回答需要精确的外部依据', text:'模型可能知道一般法律概念，却引用错误条款，或者完全不检索；一次性 RAG 也难以处理需要多步推理和搜索的问题。'},
        {letter:'T', name:'Task 任务', title:'把检索变成模型学习到的动作', text:'训练 Qwen2.5-7B 在一条 ReAct 轨迹中交替完成推理、搜索调用、读取法律证据和最终回答。'},
        {letter:'A', name:'Action 行动', title:'SFT 学行为，RL 优化结果', text:'搭建法律检索环境，构造高质量 SFT 轨迹，为答案正确性和有效检索行为设计奖励，并对比 DPO、PPO、GRPO。'},
        {letter:'R', name:'Result 结果', title:'当前设定下 PPO 效果最好', text:'最优 PPO 配置使 jecqa Accuracy 较基线提升 5pp；消融实验区分了检索、SFT 和 RL 的贡献。'}
      ],
      architectureTitle: '推理—检索交互循环',
      architectureNote: '搜索是轨迹的一部分：模型可以检索、读取证据、继续推理，最后再给出答案。',
      nodes: [
        {tag:'01 · 问题', title:'法律问答输入', text:'可能需要精确民法条文支撑的问题。', tone:'orange'},
        {tag:'02 · 推理', title:'Qwen2.5-7B', text:'分析任务并判断是否需要外部知识。', tone:'violet'},
        {tag:'03 · 行动', title:'Search Call', text:'按照 ReAct 格式生成合法的检索 Query。', tone:'blue'},
        {tag:'04 · 检索', title:'FAISS 法条库', text:'在 Qwen3-Embedding 编码的 1,300+ 条民法条文中搜索。', tone:'green'},
        {tag:'05 · 观察', title:'检索法条', text:'将相关法律文本反馈回推理轨迹。', tone:'orange'},
        {tag:'06 · 回答', title:'有依据的答案', text:'利用检索证据生成最终回答。', tone:'green'}
      ],
      modulesTitle: '训练与实验设计',
      modules: [
        {number:'01', title:'检索环境', text:'整理 1,300+ 条民法条文，使用 Qwen3-Embedding 编码并建立 FAISS 索引；将检索暴露为显式工具动作，而不是隐藏在预处理阶段。', meta:'外部知识成为 Action Space'},
        {number:'02', title:'高质量 SFT 轨迹', text:'通过提示词多步骤分解和拒绝采样，构造包含推理、正确格式 Search Call、检索 Observation 与最终回答的 ReAct 示例。', meta:'先学会工作流，再优化结果'},
        {number:'03', title:'复合 Reward', text:'同时奖励最终答案正确性，以及是否产生格式正确的检索行为，避免模型偶尔猜对答案却始终没有学会可用的搜索协议。', meta:'Outcome Reward + Behavior Reward'},
        {number:'04', title:'算法对比', text:'DPO 学习离线偏好对；GRPO 比较同一问题下多次采样的相对奖励；PPO 使用 Value Baseline 直接优化轨迹标量奖励。在本任务中 PPO 的 Accuracy 最优。', meta:'DPO vs PPO vs GRPO'}
      ],
      challengesTitle: '挑战与技术取舍',
      challenges: [
        {title:'SFT 与 RL 工作流不一致', text:'如果工具格式、环境 Observation 或停止行为在两个阶段不同，RL 会从不稳定的交互模式开始。对齐两个阶段的工作流是关键调试点。'},
        {title:'稀疏的 Credit Assignment', text:'最终正确 / 错误无法说明问题出在 Query、检索法条还是推理。检索与格式奖励提供额外的可学习信号。'},
        {title:'搜索也可能伤害表现', text:'不相关法条会干扰模型，因此检索质量以及模型忽略弱证据的能力，与搜索次数同样重要。'},
        {title:'算法选择必须靠实验', text:'PPO 只是在当前数据、Reward 和模型设置下最好，并非普遍优于其他方法；需要训练曲线和控制变量实验支撑归因。'}
      ],
      ownershipTitle: '我的贡献',
      ownership: '我搭建法律语料与检索环境，构造 SFT 数据，设计 Reward 与消融框架，对比后训练算法，并诊断 SFT / RL 工作流不一致问题。',
      deepDiveTitle: '可以继续深挖',
      deepDive: ['ReAct 数据格式', 'Reward 设计', '为什么 PPO 最优', 'SFT–RL 对齐', '检索消融实验']
    }
  ]
};

let lang = 'en';
const toggle = document.querySelector('#language-toggle');

function renderProjectDetails() {
  document.querySelectorAll('[data-project-detail]').forEach((container) => {
    const project = projectDetails[lang][Number(container.dataset.projectDetail)];
    container.innerHTML = `
      <div class="case-study">
        <header class="case-header">
          <p class="case-eyebrow">${project.eyebrow}</p>
          <h4>${project.headline}</h4>
          <p>${project.intro}</p>
        </header>

        <section class="story-section">
          <div class="story-label"><span>01</span><strong>STAR</strong></div>
          <div class="star-grid">
            ${project.star.map((item) => `<article class="star-card"><div class="star-letter">${item.letter}</div><p class="star-name">${item.name}</p><h5>${item.title}</h5><p>${item.text}</p></article>`).join('')}
          </div>
        </section>

        <section class="story-section">
          <div class="story-label"><span>02</span><strong>${project.architectureTitle}</strong></div>
          <div class="system-map">
            ${project.nodes.map((node, index) => `<article class="flow-node tone-${node.tone}"><span>${node.tag}</span><h5>${node.title}</h5><p>${node.text}</p>${index < project.nodes.length - 1 ? '<i aria-hidden="true">→</i>' : ''}</article>`).join('')}
          </div>
          <p class="architecture-note">${project.architectureNote}</p>
        </section>

        <section class="story-section">
          <div class="story-label"><span>03</span><strong>${project.modulesTitle}</strong></div>
          <div class="module-grid">
            ${project.modules.map((module) => `<article class="module-card"><span>${module.number}</span><h5>${module.title}</h5><p>${module.text}</p><small>${module.meta}</small></article>`).join('')}
          </div>
        </section>

        <section class="story-section">
          <div class="story-label"><span>04</span><strong>${project.challengesTitle}</strong></div>
          <div class="challenge-grid">
            ${project.challenges.map((challenge) => `<article><span>↗</span><div><h5>${challenge.title}</h5><p>${challenge.text}</p></div></article>`).join('')}
          </div>
        </section>

        <section class="ownership-panel">
          <div><p>${project.ownershipTitle}</p><h5>${project.ownership}</h5></div>
          <div><p>${project.deepDiveTitle}</p><ul>${project.deepDive.map((item) => `<li>${item}</li>`).join('')}</ul></div>
        </section>
      </div>`;
  });
}

function render() {
  document.documentElement.lang = lang;
  document.title = lang === 'en' ? 'Yueying Luo | AI & Agent Systems' : '罗玥萦 | 人工智能与智能体系统';
  document.querySelectorAll('[data-i18n]').forEach((element) => { element.innerHTML = copy[lang][element.dataset.i18n]; });
  renderProjectDetails();
  document.querySelectorAll('.project-toggle').forEach((button) => {
    button.textContent = button.getAttribute('aria-expanded') === 'true' ? copy[lang].detailCloseButton : copy[lang].detailButton;
  });
  toggle.textContent = lang === 'en' ? '中文' : 'EN';
}

toggle.addEventListener('click', () => {
  const currentScroll = window.scrollY;
  lang = lang === 'en' ? 'zh' : 'en';
  render();
  requestAnimationFrame(() => window.scrollTo(0, currentScroll));
});

document.querySelectorAll('.project-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.project-card');
    const detail = card.querySelector('.project-detail');
    const open = detail.classList.toggle('open');
    card.classList.toggle('expanded', open);
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? copy[lang].detailCloseButton : copy[lang].detailButton;
    if (open) requestAnimationFrame(() => detail.scrollIntoView({behavior:'smooth', block:'start'}));
  });
});

render();
