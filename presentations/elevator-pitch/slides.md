---
marp: true
theme: dark-slate
paginate: true
size: 16:9
---

<!-- _paginate: false -->

# Cardea

**Security, privacy & observability for AI agents**

---

## The context

AI agents are rapidly evolving from chatbots into autonomous actors: they call
tools, browse the web, read and write files, and use credentials — without a
human approving each step.

- **Coding agents** push loads of commits, run tons of shell commands, read source repos and diverse contents.
- **Ops/support agents** call internal APIs, query and handover sensitive customer data..
- Enterprises are rolling these out **faster than they extend the same
  access controls and audit practices already required for human
  employees**.

---

## The problem

Companies adopting AI agents lose visibility and control the very moment an agent
moves past a single prompt/response.

Agents call tools, read and write files, and use credentials **on their own** —
and today that activity is largely invisible to security and compliance teams.

---

## Two concrete failure modes

- **Leakage** — there is no gate between your agents and third-party LLM
  providers, so secrets, API keys, and PII can leak straight through in
  prompts or tool calls.

- **No audit trail** — in regulated domains (healthcare, legal), there is no
  record of *what an agent did* (which tools, which data, which actions) —
  only logs of the LLM API calls themselves.

---

## Why existing tools do not address these failures

Existing LLM gateways (LiteLLM, OpenGateLLM) and agent-infra platforms
(Solo.io) govern access to the **model** — routing, spend, rate limits — and
add generic content-safety guardrails as an afterthought.

**They do not govern or observe what the agent *does* once it has that access.**

---

## Who it is for

- Companies operating in sensitive domains where security and/or privacy are
  critical — **healthcare, legal**.

- Software companies that need to stop their AI coding agents from leaking
  passwords or API keys to LLM providers.

---

## What Cardea is

**Cardea is the enterprise security, privacy, and observability layer
for AI agents.**

It governs what agents *do* — their actions with the tools, files, and
credentials they are granted — not just their calls to the model.

---

## Architecture

Cardea is made of a **gateway** and a **platform**. The gateway sits in
front of your AI agents — governing and observing what they do, wherever
they run.

- **The gateway (required)** — deployed in **your infrastructure** or as a
  **hosted SaaS** — your choice. This is what enforces policy and captures
  activity in real time.

- **The platform (optional)** — a SaaS service to collect, monitor, and
  visualize that activity across your fleet. Bring your own observability
  stack instead if you prefer — **this is where our paid services live.**

---

<!-- _class: screens -->

## What it looks like

- ![Cardea Explorer: blocked, masked and pending events, facets by agent and decision](explorer.webp)
  **Explorer** — a live feed of allowed and denied calls, filterable by agent and decision.
- ![Cardea map: one hexagon per machine above a data-flow graph from agents to tools to services](map.webp)
  **Map** — every host and agent your gateways have seen, and where their data flows.
- ![Cardea session trace: each prompt, file read and tool call of a session on one timeline](session.webp)
  **Session trace** — what the agent did, step by step, on one timeline. Nothing it said.

Proof-of-concept screens, shown with sample data.

---

## Why we are different

1. **Governs actions, not just model calls.**
   We see what the agent does with the tools, files, and credentials
   it is granted — a layer above what any gateway can see.

2. **Compliance-first design for regulated verticals.**
   Audit trails and controls built around healthcare/legal needs from day
   one, not added later for an enterprise tier.

3. **Security is the product, not the upsell.**
   No gating SSO, audit logs, or PII controls behind a paid tier on top of an
   ungoverned free base.

---

## What Cardea is not

- Not a multi-provider LLM router or cost optimizer — that is LiteLLM /
  OpenGateLLM / OpenRouter territory.
- Not an infrastructure/networking play — that is Solo.io's lane.
- Not for low-stakes internal tooling, where a leaked secret or an
  unaudited action would not matter.

---

## Benefits & advantages

1. **Deploy on your terms.**
   Run it in your own cloud, on-premises, or as a SaaS hosted in Europe —
   keeping your data in-region for teams with strict residency requirements.

2. **One view, not five dashboards.**
   Agent cartography, live monitoring, and audit logs in a single
   interface — no stitching together logs across tools to answer "what did
   this agent do."

3. **Stop it before it happens.**
   Real-time policy enforcement blocks or redacts risky actions in-flight —
   a leaked secret or an out-of-scope tool call gets caught before it
   happens, not just logged after.

---

<!-- _paginate: false -->

# Let's talk

What does your team need to see and control before you trust an agent with production credentials and data?

- **Pilot program** — try Cardea on one agent, one workflow, for 30
  days.
- **Custom professional services** — integration, policy design, and
  rollout support tailored to your stack and compliance requirements.
