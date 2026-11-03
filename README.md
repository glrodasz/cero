# Cero

0️⃣ 🚀 **Cero** is the project behind **RETO**, a productivity app built from
scratch to production in public — real decisions, failing tests, refactors and
all.

It started as **Cero a Producción** (Spanish for "Zero to Production"), a series
of live coding sessions streamed in 🇪🇸 Spanish on Twitch. The sessions built the
components library and the web app, and started the API. The recordings are on
YouTube.

📺 [YouTube](https://glrz.me/youtube-cero) · 🟣 [Twitch](https://glrz.me/stream)

This repository is the entry point to the project: the code lives in the repos
below, and may eventually be merged here as a monorepo.

## Naming

| Name | What it is | Where it appears |
| --- | --- | --- |
| **Cero** | The project, and the prefix of every repository (`cero-*`) | Everywhere; the other repos link back here |
| **Cero a Producción** | The Spanish name of the original live stream series | Only in this repository, with the stream links |
| **RETO** | The todo / productivity app the project builds | Everywhere; always written in capitals |

Everything else is written in English. "Cero to Production" is not used.

## The idea behind

The goal is to show an authentic developer experience — every decision a working
programmer makes on a daily basis with JavaScript and other tools. Expect failing
tests, refactors, Google and StackOverflow searches, and the eternal struggle of
naming things.

## The repositories

### 1. Components library — [`cero-components`](https://github.com/glrodasz/cero-components)

The `@glrodasz/components` UI kit built for this project, following Atomic
Design. Published to npm and documented in Storybook.

[npm](https://www.npmjs.com/package/@glrodasz/components) ·
[Storybook](https://cero-components.vercel.app)

### 2. Web app — [`cero-web`](https://github.com/glrodasz/cero-web)

The frontend of RETO: Next.js + React, consuming `@glrodasz/components`.
Persists through `json-server` locally, and in the browser's `localStorage` in
the [public demo](https://reto.guillermorodas.com/).

### 3. API — [`cero-api`](https://github.com/glrodasz/cero-api)

The backend, implemented across several stacks as an exercise in comparing them
(TypeScript, Rust, Go, Python, Elixir, PHP). Work in progress — the web app does
not consume it yet.
