# Working on the wiki

Read [CONTRIBUTING-WIKI.md](CONTRIBUTING-WIKI.md) and [the article walkthrough](docs/ADDING-ARTICLES.md) before adding a guide. Follow the existing folder, slug and JSON block conventions. Preserve URLs used by players and cross-links between articles.

For content changes, parse the guide JSON, open the article directly and through search, and inspect captions and media on mobile. For a new block type, update the type, renderer and [content reference](docs/WIKI-CONTENT.md) together.

Run `npm run lint` for linting and `npm run verify` for the TypeScript and production build checks.
