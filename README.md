# Jhalak Agarwal — portfolio

A small, static Jekyll site intended for GitHub Pages. The website files live in this repository's root; no application server, database, build workflow, or JavaScript framework is required for GitHub Pages publishing.

## Publish with GitHub Pages

1. Push this repository to GitHub as `jhalakagarwal-05.github.io`.
2. In the repository, open **Settings → Pages**.
3. Select **Deploy from a branch**, choose `main` and `/(root)`, and save.
4. GitHub Pages builds the Jekyll site from the root of the `main` branch.

The site is configured as a GitHub user site: `url` is set to `https://jhalakagarwal-05.github.io` and `baseurl` is empty. Links to local pages and assets use Jekyll's `relative_url` filter.

## Update the content

- Edit `index.md` for the home page.
- Edit `about.md`, `work-experience.md`, and `contact.md` for the other pages.
- Navigation labels and paths are in `_data/navigation.yml`.
- Shared page structure and metadata are in `_layouts/` and `_includes/`.
- Colors, layout, and responsive rules are in `assets/css/main.css`.
- The small theme-toggle script is in `assets/js/theme.js`.
- Update `_config.yml` if the site title, description, domain, GitHub username, or LinkedIn URL changes.

Keep factual claims consistent with the information you want to publish. The email address and phone number from the résumé are intentionally not included.

The original uploads in `attached_assets/` are excluded from the site build and ignored by Git so the résumé is not accidentally published.

## Technical choices

- Native Jekyll layouts and includes share the navigation, footer, and page structure.
- Standard Kramdown Markdown keeps the site compatible with GitHub Pages without extra plugins.
- SEO metadata is in `_includes/head.html`; `sitemap.xml` uses the navigation data so the listed pages stay consistent.
- System fonts avoid external font requests. Warm pastel surfaces use high-contrast text in both themes.
- The only JavaScript is the theme button, which follows the system preference initially and remembers an explicit choice in the browser. Without JavaScript, the theme follows the system preference.
- The Replit preview runs Jekyll's built-in preview command. It is not a separate application or backend and is not needed by GitHub Pages.

## Assumptions

- The supplied repository name means the GitHub owner is `jhalakagarwal-05` and the user-site repository is `jhalakagarwal-05.github.io`.
- No reference websites or named fonts were supplied; the design interprets “warm and pastels” with friendly system fonts and serif headings.
- The supplied résumé and About text are the sources for all professional claims; some wording is shortened for readability.

## Preview locally

Install Ruby, then install Jekyll and its local preview HTTP dependency:

```sh
gem install jekyll webrick
jekyll build
jekyll serve
```

Open `http://127.0.0.1:4000/`. Jekyll rebuilds the site as you edit files. If previewing under a path prefix, set a matching `baseurl` locally; keep it empty for the published user site.

## Run Lighthouse

With the local preview running, open Chrome DevTools, choose **Lighthouse**, select Performance, Accessibility, Best Practices, and SEO, then run an audit. Test both mobile and desktop. The layout is designed for 375px and 1280px viewports; re-run the audits after changing content, styles, or scripts.

Aim for at least 90 in each category. Audit all four pages, check both themes and their keyboard focus states, and confirm navigation works. Repeat on the published GitHub Pages URL because hosting and network conditions can affect the results.
