---
layout: ../../layouts/BlogPost.astro
title: "Training Procurement Agents on Real Transaction Data"
description: "How we use nine years of B2B purchasing data to build agents that understand vendor behavior, pricing patterns, and organizational purchasing rules."
date: "2026-04-13"
author: "Agentic Labs Team"
tags: ["Research", "Agent Architecture"]
---

Most procurement AI starts with a demo on synthetic data. We started with nine years of real B2B transactions.

This post covers our approach to training procurement agents: the data pipeline, the challenges unique to B2B purchasing, and the architectural decisions that make agents reliable enough to execute real orders.

## The data problem

B2B purchasing data is messy. A single transaction might touch three vendor portals, two approval chains, a budget check, a contract lookup, and a payment system. The data formats vary by vendor. The business rules vary by department. The edge cases are the common case.

Traditional ML approaches treat this as a classification problem: given inputs, predict the right action. We treat it as an execution problem: given a goal and constraints, navigate the real systems to complete the work.

## What the training pipeline looks like

Our agents learn from three data sources:

**Transaction history.** Nine years of Order platform data. Every requisition, approval, PO, invoice, and payment. This teaches agents what normal looks like: typical vendors for a category, expected price ranges, standard approval paths, and common exception patterns.

**Vendor portal behavior.** We instrument agent interactions with vendor systems. Login flows, search interfaces, cart behavior, checkout sequences. Each vendor portal is different. Some have APIs. Most don't. The agent needs to navigate the actual UI.

**Policy documents.** Organizational purchasing rules, budget hierarchies, preferred vendor lists, contract terms. These are the constraints the agent operates within. They change frequently and vary by department.

## Architecture decisions

**Separate reasoning from execution.** The agent's decision about what to do and its ability to do it are different systems. The reasoning layer evaluates options against policy. The execution layer navigates vendor portals and internal systems. This separation means we can update reasoning without retraining execution, and vice versa.

**Fallback by default.** Every agent action has a defined fallback. If a vendor portal changes its layout, the agent doesn't fail silently. It escalates to a human with full context on what it was trying to do and where it got stuck. We measure success not just by completion rate but by the quality of escalations.

**Audit everything.** Every decision gets logged with the reasoning behind it. Which policy applied. Which alternatives were considered. Why the chosen vendor was selected. This isn't compliance theater. It's how we debug agent behavior and improve the training data.

## What we've learned

The biggest insight: agents trained on real data handle edge cases dramatically better than agents trained on synthetic data. Real purchasing data contains the patterns that synthetic data can't replicate. Seasonal vendor behavior. Department-specific preferences. The vendor who always ships late but has the best price. The approval chain that changes during budget season.

The second insight: reliability matters more than capability. An agent that completes 80% of orders flawlessly and escalates the other 20% cleanly is more valuable than an agent that attempts 100% and fails unpredictably on 15%.

We'll publish more on specific components of this system in future posts. Next up: vendor portal automation across 500+ unique interfaces.
