<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to Lovable. Avoid rewriting published git history.
<!-- LOVABLE:END -->

- Keep bilingual copy and entity content in typed local content modules, because a future API should replace data without changing presentation components.
- Keep site-wide language and accessibility preferences in shared React context, because every route and global control must stay synchronized.
- Use TanStack file routes for every public content section, because each page requires independent navigation and metadata.
