# Wiki architecture

Next.js 16 App Router and React 19 render the site. Tailwind 4 and the global stylesheet supply the reading layout.

- Published guides live in `public/wiki/<slug>/article-<slug>.json` with their media. [WIKI-CONTENT.md](docs/WIKI-CONTENT.md) defines supported blocks.
- `src/content/wiki` contains article types and the tool index. `src/components/wiki` provides article and search views.
- `src/app/w` serves the index, edition listings and article routes. `src/app/t/[slug]` serves individual tools.

For a missing image, trace its manifest and public path using [the image reference](docs/WIKI-IMAGE-MANIFESTS.md). For a rendering change, check the affected block across existing articles.
