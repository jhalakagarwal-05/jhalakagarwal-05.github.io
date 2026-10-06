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

## Preview locally

Install Ruby and Bundler, then install Jekyll:

```sh
gem install bundler jekyll
jekyll serve
```

Open `http://127.0.0.1:4000/`. Jekyll rebuilds the site as you edit files. If previewing under a path prefix, set a matching `baseurl` locally; keep it empty for the published user site.

## Run Lighthouse

With the local preview running, open Chrome DevTools, choose **Lighthouse**, select Performance, Accessibility, Best Practices, and SEO, then run an audit. Test both mobile and desktop. The layout is designed for 375px and 1280px viewports; re-run the audits after changing content, styles, or scripts.
