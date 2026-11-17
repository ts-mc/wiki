# Writing a clear wiki guide

Wiki pages are stored as JSON in `public/wiki/`. The site discovers each folder containing an `article-<folder-name>.json` file automatically. The article's `slug` should match its folder name.

## Add a page

1. Pick a short, descriptive slug using lowercase words separated by hyphens, such as `move-a-world-to-bedrock`.
2. Create `public/wiki/<slug>/article-<slug>.json`.
3. Add the required article fields: `title`, `edition`, `slug`, `summary`, `lastUpdated`, and `body`. See [the content format reference](WIKI-CONTENT.md).
4. Add images and a manifest if needed. See [image manifests](WIKI-IMAGE-MANIFESTS.md).
5. Keep the guide focused on one question. Put steps in the order a reader will do them, and link to related guides when they answer the next likely question.

## Make instructions easy to follow

- Put the answer or goal near the start. Use the summary to say exactly what the reader will learn.
- Use headings that describe the task or question, not vague labels such as “More”.
- Give one action per numbered step. Say what to click or enter, and what the reader should see next.
- Explain unfamiliar terms the first time they appear. Spell out edition-specific behavior where it matters.
- Use short paragraphs, descriptive link text, and images with useful alt text.
- Add a warning callout before a step that can delete, overwrite, or permanently change something.
- Include a version or date when behavior can change. Set `lastUpdated` to the day the guide was checked, in `YYYY-MM-DD` format.

## Example starter file

```json
{
  "title": "Move a world to Bedrock Edition",
  "edition": "bedrock",
  "slug": "move-a-world-to-bedrock",
  "summary": "Copy a world into the Bedrock worlds folder and check that it appears in the game.",
  "tags": ["Worlds", "Bedrock", "Installation"],
  "lastUpdated": "2026-11-17",
  "body": [
    {
      "type": "paragraph",
      "text": "This guide explains where to put a Bedrock world folder. It assumes the world is already downloaded and extracted."
    },
    { "type": "heading", "level": 2, "text": "Find the worlds folder" },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "Close Minecraft before copying files.",
        "Open the Bedrock worlds folder for your device.",
        "Copy the world folder into that location and launch Minecraft."
      ]
    }
  ]
}
```

Replace the example date with the actual review date. Check existing articles for local conventions and links.
