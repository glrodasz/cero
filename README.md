# Cero a Producción

0️⃣ 🚀 **Cero a Producción** is a series of live coding sessions where we build
**RETO**, a productivity app, from scratch to production — real decisions,
failing tests, refactors and all.

📺 [YouTube](https://glrz.me/youtube-cero) · 🟣 [Twitch](https://glrz.me/stream)
(live in 🇪🇸 Spanish, Tuesdays to Fridays)

This repository is the entry point to the project: the code lives in the repos
below, and may eventually be merged here as a monorepo.

## The idea behind

The goal is to show an authentic developer experience — every decision a working
programmer makes on a daily basis with JavaScript and other tools. Expect failing
tests, refactors, Google and StackOverflow searches, and the eternal struggle of
naming things.

## The projects

### 1. Components library — [`cero-components`](https://github.com/glrodasz/cero-components)

The `@glrodasz/components` UI kit built for this project, following Atomic
Design. Published to npm and documented in Storybook.

[npm](https://www.npmjs.com/package/@glrodasz/components) ·
[Storybook](https://cero-components.vercel.app)

### 2. Web app — [`cero-web`](https://github.com/glrodasz/cero-web)

The frontend of RETO: Next.js + React, consuming `@glrodasz/components`.
Currently persists through `json-server` locally and a Redis-backed store in
demo deployments.

### 3. API — [`cero-api`](https://github.com/glrodasz/cero-api)

The backend, implemented across several stacks as an exercise in comparing them
(TypeScript, Rust, Go, Python, Elixir, PHP). Work in progress — the web app does
not consume it yet.

### 4. Mobile app — not started

Planned in React Native, which will require the components library to support
both web and native.
