# TheySix Wiki

TheySix Wiki is a searchable collection of practical guides for Minecraft Java Edition, Bedrock Edition, and the TheySix Discord community. It also includes small tools for Minecraft and Discord.

## Find a guide

Start the website and use the search box on the home page. Guides are grouped by **Java Edition**, **Bedrock Edition**, and **Discord**. Search by a guide title, topic, or tag.

## Run the website locally

You need Node.js and npm installed.

```bash
npm install
npm run dev
```

Open the local address printed by Next.js (usually `http://localhost:3000`).

## Where things live

- `src/app/` contains the website pages.
- `src/components/wiki/` contains wiki search and article display components.
- `src/content/wiki/` contains the article types and tool index.
- `public/wiki/` contains the published guide data and its images.
- `docs/` contains notes for people writing and maintaining guides.

## Add or improve a guide

Guides are JSON files in `public/wiki/<slug>/article-<slug>.json`. Read [the guide writing notes](docs/ADDING-ARTICLES.md) for a step-by-step walkthrough and [the content format reference](docs/WIKI-CONTENT.md) for supported blocks. If the guide has images, see [image manifests](docs/WIKI-IMAGE-MANIFESTS.md).

For repository contribution expectations, see [CONTRIBUTING-WIKI.md](CONTRIBUTING-WIKI.md).
