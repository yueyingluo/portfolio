const requestBuckets = new Map();

const PORTFOLIO_KNOWLEDGE = `
PUBLIC PROFILE
- Name: Yueying Luo / 罗玥萦.
- Undergraduate in Artificial Intelligence at Peking University; expected graduation June 2027.
- Focus: LLM post-training, agent systems, AI search, active retrieval, AI Coding and evaluation-driven engineering workflows.
- Target roles: applied LLM / Agent algorithm and Agent engineering opportunities.
- Contact: luoyueying@stu.pku.edu.cn; phone / WeChat 18028356417; GitHub https://github.com/yueyingluo.
- Personal description: strongly curious and self-driven; starts from real needs, proactively explores industry developments, and enjoys cross-team collaboration that turns technology into practical value.

EXPERIENCE ORDER
1. Intelligent Customer Service Algorithm R&D Intern, Taotian Group Intelligent Service Department, June 2026–present.
2. AI Strategy Intern, Baidu, December 2025–May 2026.
3. Research Intern, Peking University Wangxuan Institute of Computer Technology, March–August 2025.

PROJECT 1 — TAOTIAN INTELLIGENT SERVICE ALGORITHM
- Scenario: when merchants and consumers cannot negotiate a satisfactory after-sales result, the platform intervenes with solutions such as return-and-refund or refund-only.
- Objective: improve user satisfaction. Guardrail: improve the Agent's adherence to service strategy and SOP, avoiding compensation that is too high or too low and avoiding process violations.
- Yueying built the project from zero to one, mainly in Python: data construction, two Evaluators, Reward design, Skill update workflow and offline evaluation.
- Results currently safe to disclose: SOP adherence improved from 77% to 93%, and policy coverage improved from 86% to 91%.
- Core modeling: do not treat all dissatisfied cases as one failure. Separate policy capability gaps from Agent execution gaps.
- Policy gap A: information is missing; guide users to upload evidence or complete required information.
- Policy gap B: current rules can resolve the case, but the resolution is not good enough; improve compliant flexibility, empathy, guidance or compensation rationality.
- Execution gap: the strategy is sufficient, but the Agent does not faithfully follow it.
- Two optimization lines: a policy/satisfaction Evaluator and Reward for policy quality; an SOP Evaluator and process-guardrail Reward for adherence.
- Repairable-subset routing separates cases that need additional evidence from cases whose current policy can be improved; only the repairable subset enters policy mining.
- For repairable cases, the system treats each resolution as the minimum analysis unit, performs within-batch clustering, and mines candidate features such as consumer return willingness, product-issue severity, and seller-language patterns. Recurring gaps are converted into structured policy edits so iteration becomes data-driven, attributable, and verifiable.
- Shared evolution engine is inspired by SkillOpt and built independently: frozen service Agent + external Skill/SOP; rollout scored trajectories; reflect on success and failure minibatches separately; bounded Add/Delete/Replace edits; held-out validation using target and guardrail evaluators; accept only improvements, while rejected edits enter a negative-feedback buffer.

PROJECT 2 — BAIDU LAYERED AI SEARCH
- Overall system scale: 150k+ daily active users and 98% intent-routing accuracy.
- Direct-search results after iteration: 79% quality rate and 94% usability. G/S/B metrics were measured relative to the previous iteration.
- Direct path model: Qwen3-8B query rewriter trained with SFT.
- Training data: 2,000 single-turn real user queries, 6,000 multi-turn dialogues, plus rule-synthesized augmentation. Synthetic data mainly strengthened time, location and user-information injection.
- Query rewrite handles context completion, disambiguation, multiple-intent splitting, and relevant time/location/user information while avoiding intent drift.
- Retrieval: rewritten Query calls the Volcano Engine Search API for broad candidates.
- Reranking: Qwen3-Reranker-4B scores Query–Document relevance. Thresholds and a Top-token budget retain the highest-value evidence for downstream generation.
- Intent routing selects direct search for simple low-latency tasks or deep search for complex tasks.
- Deep search is progressive and inspired by OWL. Different task types have different prompts, SOPs, must-have information and termination conditions; maximum rounds are the universal hard stop.
- User Agent: task decomposition, search planning, reading/evaluating each round's evidence, completion judgment.
- Assistant Agent: tool selection and execution across search, finance, academic, page-reading and browser tools; observations return to the User Agent.
- Yueying's contribution: Qwen3-8B query-rewrite training, prompts for progressive multi-agent search, tool integration and evaluation. Do not claim she owned the entire Baidu system.
- Do not describe a separate 'LLM evaluation' module for the Baidu project.

PROJECT 3 — LEGAL ACTIVE-RETRIEVAL AGENT
- Affiliation: Peking University Wangxuan Institute of Computer Technology.
- Base model: Qwen2.5-7B. Goal: learn to interleave reasoning, retrieval and answering instead of relying on one-shot RAG.
- Retrieval environment: 1,300+ civil-law documents, Qwen3-Embedding and a FAISS index. Search is an explicit ReAct tool action.
- Workflow: construct SFT trajectories with reasoning, valid Search Call, retrieved Observation, continued reasoning and final answer; then optimize multi-turn reasoning-search rollouts using RL in a Search-R1-style setup.
- Reward: final-answer correctness plus correctly formatted retrieval behavior.
- Retrieved Observation tokens are environment context rather than model actions and are masked from policy loss in the Search-R1-style training flow.
- Compared DPO, GRPO and PPO. PPO performed best in this specific data/reward/model setup; do not claim PPO is universally superior.
- Result: best PPO configuration improved jecqa Accuracy by 5 percentage points over baseline.
- Why PPO may have worked here: it directly optimizes scalar trajectory rewards with a value baseline and supports stable on-policy credit assignment across multi-step search interactions. This is a reasoned project interpretation, not a universal theorem.
- Yueying built the legal corpus and retrieval environment, constructed SFT data, designed rewards and ablations, compared post-training algorithms, and diagnosed SFT/RL workflow mismatch.

PROJECT 4 — QUALITYGATE CODING AGENT
- Positioning: a personal engineering project built on mini-SWE-agent to turn one-shot code generation into a verifiable repair-and-gate workflow. The model used for the fixed benchmark was DeepSeek-V4-Flash.
- End-to-end flow: create a repository snapshot; ask the Agent for a structured unified Patch; validate and apply the Patch; execute it in an isolated environment; persist results; expose task creation, status and report endpoints through FastAPI; visualize repair trajectories, code Diff and gate diagnostics in a Web interface.
- Closed loop: Generate → Execute → Evaluate → Repair → Gate, with at most three attempts. Failed commands, stack traces and exact violation locations are converted into structured feedback for the next model attempt. Deterministic fixes such as safe Ruff auto-fixes can be applied when appropriate.
- Five quality dimensions: pytest for functional correctness; Ruff for code style and static-quality issues; Bandit for common Python security risks; Radon for cyclomatic-complexity limits; git diff checks for modification scope.
- Reproducible benchmark: eight fixed Python tasks covering feature addition, bug fixing, edge cases and refactoring. First-attempt pass rate was 12.5% (1/8); final closed-loop pass rate was 75.0% (6/8); five of seven initially failing tasks were repaired, so automatic repair success was 71.4%; average attempts were 2.62.
- Gate audit: twenty fixed, pre-seeded defect variants across the five gate categories were each detected by the expected gate, reported as 20/20 or 100% on that controlled audit. This is not a claim that every possible defect can be detected.
- Two benchmark tasks, duration_parser and dependency_sort, remained blocked after the repair budget; the project does not claim universal repair success.
- Isolation boundary: the implementation supports Docker/Linux isolation and a macOS sandbox fallback. The reported local benchmark used the macOS sandbox fallback because Docker Desktop was unavailable during that run; do not imply that all reported runs used Docker.
- Yueying's ownership: system architecture, closed-loop orchestration, structured Patch validation, five-level quality-gate integration, feedback construction, FastAPI/Web presentation, benchmark design and result analysis.
`;

const SYSTEM_PROMPT = `You are the AI portfolio assistant for Yueying Luo. Answer questions from interviewers and visitors using only the public portfolio knowledge below.

Rules:
1. Answer in the language used by the visitor. If mixed, follow the latest question.
2. Be concise by default, but explain technical project questions with clear causal structure: problem, modeling, method, trade-off, result and Yueying's ownership.
3. Never invent metrics, confidential business rules, unpublished implementation details, employer claims or personal information beyond the knowledge.
4. Clearly distinguish measured results, offline predictions, methodological interpretations and future validation.
5. If information is absent, say the public portfolio does not provide enough information and suggest a relevant known topic.
6. Speak about Yueying in the third person. Do not impersonate her or claim to represent an employer.
7. Avoid generic praise. Ground every substantive claim in a concrete fact from the knowledge.
8. Use plain text with short paragraphs or simple bullets. Do not output HTML.

${PORTFOLIO_KNOWLEDGE}`;

function corsHeaders(origin, allowedOrigin) {
  const allowed = origin && (origin === allowedOrigin || origin === 'http://127.0.0.1:4173' || origin === 'http://localhost:4173');
  return {
    'Access-Control-Allow-Origin': allowed ? origin : allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
}

function jsonResponse(payload, status, headers) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {...headers, 'Content-Type':'application/json; charset=utf-8', 'Cache-Control':'no-store'}
  });
}

function isRateLimited(request) {
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const now = Date.now();
  const bucket = requestBuckets.get(ip);
  if (!bucket || now - bucket.startedAt > 60_000) {
    requestBuckets.set(ip, {startedAt:now, count:1});
    return false;
  }
  bucket.count += 1;
  return bucket.count > 12;
}

function sanitizeMessages(messages) {
  if (!Array.isArray(messages)) return null;
  const cleaned = messages.slice(-8).map((message) => ({
    role: message?.role === 'assistant' ? 'assistant' : 'user',
    content: typeof message?.content === 'string' ? message.content.trim().slice(0, 1800) : ''
  })).filter((message) => message.content);
  if (!cleaned.length || cleaned[cleaned.length - 1].role !== 'user') return null;
  return cleaned;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin');
    const allowedOrigin = env.ALLOWED_ORIGIN || 'https://yueyingluo.github.io';
    const headers = corsHeaders(origin, allowedOrigin);

    if (request.method === 'OPTIONS') return new Response(null, {status:204, headers});
    if (url.pathname === '/health') return jsonResponse({ok:true, model:env.DEEPSEEK_MODEL || 'deepseek-v4-flash'}, 200, headers);
    if (url.pathname !== '/chat' || request.method !== 'POST') return jsonResponse({error:'Not found'}, 404, headers);
    if (origin && origin !== allowedOrigin && origin !== 'http://127.0.0.1:4173' && origin !== 'http://localhost:4173') return jsonResponse({error:'Origin not allowed'}, 403, headers);
    if (isRateLimited(request)) return jsonResponse({error:'Too many requests. Please wait a minute.'}, 429, headers);
    if (!env.DEEPSEEK_API_KEY) return jsonResponse({error:'Assistant secret is not configured.'}, 503, headers);

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({error:'Invalid JSON body.'}, 400, headers);
    }
    const messages = sanitizeMessages(body.messages);
    if (!messages) return jsonResponse({error:'A valid user message is required.'}, 400, headers);

    const deepseekResponse = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: env.DEEPSEEK_MODEL || 'deepseek-v4-flash',
        messages: [{role:'system', content:SYSTEM_PROMPT}, ...messages],
        thinking: {type:'disabled'},
        temperature: 0.25,
        max_tokens: 900,
        stream: true
      })
    });

    if (!deepseekResponse.ok || !deepseekResponse.body) {
      const providerStatus = deepseekResponse.status;
      console.error('DeepSeek request failed', providerStatus, await deepseekResponse.text());
      return jsonResponse({error:'The model provider is temporarily unavailable.'}, 502, headers);
    }

    return new Response(deepseekResponse.body, {
      status: 200,
      headers: {
        ...headers,
        'Content-Type':'text/event-stream; charset=utf-8',
        'Cache-Control':'no-cache, no-store',
        'Connection':'keep-alive',
        'X-Content-Type-Options':'nosniff'
      }
    });
  }
};
