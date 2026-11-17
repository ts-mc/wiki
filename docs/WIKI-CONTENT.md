# Wiki content format

Each published guide is a JSON object in `public/wiki/<slug>/article-<slug>.json`. The loader reads these files when the site starts or builds. The `slug` must match both the folder and filename.

## Article fields

| Field | Required | Meaning |
| --- | --- | --- |
| `title` | Yes | Human-readable page title. |
| `edition` | Yes | One of `java`, `bedrock`, or `discord`. |
| `slug` | Yes | URL-friendly identifier, matching the folder name. |
| `summary` | Yes | One-sentence description shown in search and indexes. |
| `body` | Yes | Ordered array of content blocks. |
| `lastUpdated` | Yes | Date the content was last checked, `YYYY-MM-DD`. |
| `tags` | No | Search terms that help readers find the page. |

## Supported body blocks

| `type` | Fields | Use it for |
| --- | --- | --- |
| `paragraph` | `text` (or legacy `content`) | Explanations. Inline links can use `[label](https://example.com)`. |
| `heading` | `level` (`2` or `3`), `text` | Sections and subsections. |
| `list` | `items`, optional `ordered` | Steps or related points. Use `ordered: true` for steps. |
| `ruleList` | `items` with `title` and `text` | A set of named rules or definitions. |
| `code` | `code`, optional `language` | Commands, configuration, or text to copy. |
| `image` | `src`, `alt`, optional `caption` | A local image under `public/` (for example `/wiki/my-guide/image-1.png`). |
| `video` | `src`, `title`, optional `caption` | A YouTube video or external video link. |
| `link` | `href`, `label`, optional `description` | A standalone resource link. |
| `callout` | `variant` (`note`, `warning`, `danger`), `text` | Important context or risk. |
| `table` | `head`, `rows` | Compact comparisons or reference data. |

`text` is preferred for paragraph and heading blocks. `content` is also accepted for older articles. List items can be strings or objects containing `text`/`content`.

## Images and links

Store article images in that article's folder under `public/wiki/<slug>/`. In JSON, refer to them with a site path beginning `/wiki/`, not a filesystem path. Write alt text that explains the useful information in the image; a caption can add context without repeating it. See [image manifests](WIKI-IMAGE-MANIFESTS.md) for the companion image list convention.

Use complete `https://` links. For links to other wiki pages, follow the URL style used by nearby articles and check that the destination slug exists.
