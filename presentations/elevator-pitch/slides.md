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

## How it works

**Your company certificate, pushed to every workstation.** AgentKeeper sits
between your agents and the LLM providers — no change to your agents or your
code.

```
Agent  ──►  AgentKeeper  ──►  LLM provider
```

- **Redact** secrets and PII before they leave your network
- **Enforce** policy on the tool calls an agent requests
- **Record** an audit trail of what every agent did

Every agent, sanctioned or not.

<!--
Speaker notes: we see what transits to the LLM providers (prompts, tool calls
requested, tool results sent back) — not purely local actions. TODO: confirm the
three capabilities above against the MVP scope once it is decided.
-->

---

## Why we're different

1. **Understands the agent, not just the traffic.**
   We inspect the full agent loop — tool calls requested, data sent back to
   the model — and apply policy per action, not generic filters on text.

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
- Not a general network or web-security suite — we focus on AI agents only.
- Not for low-stakes internal tooling where agent actions carry little
  security or compliance risk.

---

<!-- _paginate: false -->

# Let's talk

What does your team need to see and control before you trust an agent with
production credentials and data?
