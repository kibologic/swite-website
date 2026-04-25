# DIRECTIVE.md — SWITE WEBSITE / KIBOLOGIC AI OPERATING CONTRACT

**Version:** 1.0
**Mode:** Developer Documentation Site Specification
**Applies To:** All AI-assisted development in this repository

---

# 1. SYSTEM CONTEXT

## Project Identity

* **Project:** Swite Website
* **Type:** Developer-first product site and documentation surface for Swite
* **Product Represented:** Swite, the SwissJS development server and build/runtime toolchain
* **Audience:** Framework users, app engineers, contributors, internal Kibologic developers

---

## Stack

### Frontend

* SwissJS Framework
* `.ui` / `.uix` source files
* SwissJS component model
* Signal-based client-side routing

### Runtime / Tooling

* Swite dev server
* Node.js `dev.mjs` entry
* Local static asset serving via Express middleware

---

## Site Purpose

This repository is **NOT** a marketing site.

The site exists to help developers understand:

* what Swite is
* how Swite fits into the SwissJS ecosystem
* how to run SwissJS applications with Swite
* how Swite resolves modules, compiles source, serves monorepos, and handles HMR
* what workflows, primitives, and configuration matter in real use

The site must behave like a developer product surface:

* precise
* technical
* grounded in real repo behavior
* documentation-oriented
* easy to scan and trust

It must NOT drift into generic startup copy, vague benefits language, or flashy marketing filler.

---

## Product Truths

Swite must be represented accurately as:

* the SwissJS development server
* a programmable application server for SwissJS apps
* a monorepo-aware tool
* a resolver/compiler/HMR toolchain aware of SwissJS file types
* a dev workflow surface that can integrate backend services and proxies

If the codebase and the site disagree, the codebase wins.

---

# 2. GIT OPERATING CONTRACT

## Branch Model

This repository has 3 required long-lived branches:

* `main` → production
* `staging` → pre-release validation
* `development` → active development base

If any are missing locally or remotely, they must be created before normal feature work continues.

---

## Feature Development Rule

All implementation work must follow:

```bash
development -> feature/<task-name> -> development -> staging -> main
```

---

## PR And Branch Cleanup Rule

Every feature branch must be:

* opened as a PR into `development`
* merged into `development` before the next task begins
* deleted remotely after merge
* deleted locally after merge

No stale feature branches should remain after a completed task.

---

## Required Workflow

### Step 1 — Before Work

AI must read:

* this full `DIRECTIVE.md`
* current repo status
* current branch
* relevant site files
* relevant source repos when product truth is required

---

### Step 2 — During Work

* Only change scoped website files
* Do not touch external product repos from this repo
* Do not invent product claims
* Do not add flashy marketing sections unless explicitly requested
* Keep the site developer-first

---

### Step 3 — Completion Rule

Every completed task must:

* update this directive if project understanding changed
* update feature tracking state
* be committed
* be pushed to remote
* be opened as a PR into `development`
* be merged into `development`
* have the feature branch cleared locally and remotely

No task is complete without push, PR, merge, and branch cleanup.

---

# 3. AI EXECUTION LOOP

Every task must follow this loop:

## Step 1 — Load Context

Read:

* full `DIRECTIVE.md`
* relevant page/component files
* `package.json`
* `dev.mjs`
* source-of-truth repos if content depends on real product behavior

---

## Step 2 — Understand Scope

AI must identify:

* which page(s) are affected
* which claims need source verification
* whether the task is content, structure, styling, or navigation

---

## Step 3 — Plan Minimally

Internal plan should cover:

* files to change
* information source
* UI/content outcome

No unnecessary redesign.

---

## Step 4 — Implement

Rules:

* preserve repo conventions
* prefer clarity over ornament
* reflect actual Swite behavior
* avoid generic AI landing-page patterns

---

## Step 5 — Verify

AI must ensure:

* site copy matches real Swite behavior
* navigation still works
* layout remains readable for developers
* no broken runtime assumptions were introduced

---

## Step 6 — Finalize

Before task ends AI must:

* update feature tracking
* update this directive if needed
* commit changes
* push branch

---

# 4. FEATURE TRACKING SYSTEM

This is the live state for this site.

## Format

```md
## MODULE: Information Architecture

- [x] Directive established
- [~] Product positioning corrected
- [ ] Navigation aligned to real docs needs
```

---

## Current State

## MODULE: Repo Operations

- [x] `main` branch confirmed
- [x] `staging` branch created and pushed
- [x] `development` branch created and pushed
- [x] directive workflow adopted
- [x] current feature branch merged into `development`
- [x] merged feature branch cleared locally and remotely

## MODULE: Product Accuracy

- [x] Swite positioning aligned with real codebase
- [x] boilerplate claims removed
- [x] real workflow and architecture reflected
- [x] unsupported claims removed

## MODULE: Information Architecture

- [x] landing page rewritten for developers
- [x] docs surface restructured
- [x] navigation aligned to real developer tasks
- [x] ecosystem relationship to SwissJS explained

## MODULE: Runtime Verification

- [x] site runs locally via `node dev.mjs`
- [x] key routes verified
- [x] content audited against `kibologic/swite`

---

# 5. CONTENT AND DESIGN GUARDRAILS

## Core Rules

* This is a developer tool site
* explanation beats persuasion
* specifics beat slogans
* architecture beats aesthetics
* workflows beat generic feature cards

---

## Design Rules

* design must feel intentional, not flashy
* visual hierarchy should support scanning
* code, config, workflow, and architecture deserve first-class presentation
* avoid decorative sections that do not help a developer decide or act

---

## Content Rules

* describe real Swite behavior only
* prioritize config, runtime model, monorepo support, resolver behavior, HMR, and backend integration
* explain how Swite is used in Kibologic projects
* keep language crisp and technical

---

# 6. DIRECTIVE MAINTENANCE RULE

This file must be read before each task and updated after each meaningful task if:

* branch policy changes
* project purpose changes
* feature tracking changes
* new product truths are discovered

If task state changes and this file is not updated, the repo memory is stale.

---

# 7. SESSION LOG

### 2026-04-18

* established repository directive
* created and pushed `development` and `staging`
* created `feature/directive-setup`
* locked workflow rule that every feature branch must PR into `development` and be cleared before the next task
* PR #1 merged into `development`
* `feature/directive-setup` cleared locally and remotely after merge
* rebuilt the swite landing and docs surfaces around actual Swite codebase behavior
* removed generic boilerplate positioning and replaced it with real CLI, config, HMR, resolver, plugin, and Alpine ERP Core usage references
* verified the rewritten site locally on temporary port `6102`

### 2026-04-24

* styling revamp started (developer-first, less generic)
* branch: `feature/swite-site-style-revamp`
