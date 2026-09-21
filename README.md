# AgentKeeper Slides

Marp-based (Markdown) slide decks for AgentKeeper presentations.

Sibling project to `../agentkeeper` (product code) and `../docs` (product docs, positioning,
RFCs, ADRs). Content here should stay consistent with `../docs/positioning.md`, but this repo
owns presentation-specific material (talk tracks, deck structure, speaker notes) that doesn't
belong in `docs/`.

## Structure

```
presentations/
  elevator-pitch/
    slides.md      # the deck itself (Marp markdown)
```

Each deck lives in its own directory under `presentations/`, named after the deck (e.g.
`elevator-pitch`, `product-demo`, `investor-update`). Put deck-specific assets (images, a custom
theme) alongside `slides.md` in that same directory.

## Usage

```sh
npm install

npm run watch   # live-reload preview while editing (opens in browser)
npm run build   # render all decks to dist/ as HTML
npm run pdf     # render all decks to dist/ as PDF
npm run serve   # serve presentations/ with Marp's built-in server
```

Requires Node.js. Marp CLI is a local devDependency, no global install needed.

## Adding a new deck

1. `mkdir presentations/<deck-name>`
2. Create `presentations/<deck-name>/slides.md` with Marp front matter (see
   `presentations/elevator-pitch/slides.md` for an example).
3. `npm run watch` to preview.
