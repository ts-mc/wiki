# Wiki image manifests

Some wiki articles have a plain-text manifest alongside their JSON. It lists image filenames in the order they appear in the article. The manifest is named `article-<slug>.txt` and is stored in the same `public/wiki/<slug>/` folder.

Example folder:

```text
public/wiki/portal-coordinates-and-linking/
├── article-portal-coordinates-and-linking.json
├── article-portal-coordinates-and-linking.txt
├── image-1.png
├── image-2.png
└── image-3.png
```

Example manifest:

```text
image-1.png
image-2.png
image-3.png
```

Keep one filename per line, in the same sequence as the image blocks in the JSON `body`. Each image block's `src` should point to the corresponding public path, such as `/wiki/portal-coordinates-and-linking/image-1.png`.

When adding, removing, or reordering images, update both the article JSON and manifest. Keep filenames simple and ordered (`image-1.png`, `image-2.png`, and so on). Existing articles without a manifest can still contain image blocks; follow the manifest convention when adding one or when the contribution workflow expects it.
