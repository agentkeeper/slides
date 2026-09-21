---
marp: true
theme: dark-slate
paginate: true
size: 16:9
---

<!-- _paginate: false -->

# AgentKeeper

**Security, privacy & observability for AI agents**

---

## The problem

Companies adopting AI agents lose visibility and control the moment an agent
moves past a single prompt/response.

Agents call tools, read and write files, and use credentials **on their own** —
and today that activity is largely invisible to security and compliance teams.

---

## Two concrete failure modes

- **Leakage** — secrets, API keys, and PII can leak to third-party LLM
  providers through prompts or tool calls, with no gate in between.

- **No audit trail** — in regulated domains (healthcare, legal), there's no
  record of *what an agent did* (which tools, which data, which actions) —
  only logs of the LLM API calls themselves.

---

## Why existing tools don't solve this

Existing LLM gateways (LiteLLM, OpenGateLLM) and agent-infra platforms
(Solo.io) govern access to the **model** — routing, spend, rate limits — and
bolt on generic content-safety guardrails.

**They don't govern or observe what the agent *does* once it has that access.**

---

## Who it's for

- Companies operating in sensitive domains where security and/or privacy are
  critical — **healthcare, legal**.

- Software companies using AI coding agents that need to prevent leaking
  passwords or API keys to LLM providers.

---

## What AgentKeeper is

For companies that make use of AI agents, **AgentKeeper is the enterprise
tool that brings security, privacy, and observability to their AI agent
use.**

An agent security, privacy, and observability layer — governing agent
**behavior**, not just LLM traffic.

---

## Why we're different

1. **Governs actions, not just model calls.**
   We see what the agent does with the tools, files, and credentials it's
   granted — a layer above what any gateway can see.

2. **Compliance-first design for regulated verticals.**
   Audit trails and controls built around healthcare/legal needs from day
   one, not bolted on for an enterprise tier.

3. **Security is the product, not the upsell.**
   No gating SSO, audit logs, or PII controls behind a paid tier on top of an
   ungoverned free base.

---

## What we're not

- Not a multi-provider LLM router or cost optimizer — that's LiteLLM /
  OpenGateLLM / OpenRouter territory.
- Not an infrastructure/networking play — that's Solo.io's lane.
- Not for low-stakes internal tooling where agent actions carry little
  security or compliance risk.

---

<!-- _paginate: false -->

# Let's talk

What does your team need to see and control before you trust an agent with
production credentials and data?
