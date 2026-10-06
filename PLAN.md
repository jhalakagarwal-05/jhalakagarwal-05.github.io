# Portfolio Site Plan

## Site
- Build a GitHub user site for `jhalakagarwal-05` at `jhalakagarwal-05.github.io`.
- Use Jekyll with Markdown pages and YAML front matter, published from the repository root on `main`.
- Pages: Home, About, Work Experience, and Contact, with shared navigation and footer.

## Content
- Use the supplied About text and résumé for education, experience, leadership, skills, and selected outcomes.
- Do not add employers, achievements, projects, or metrics not present in the supplied material.
- Do not display an email address or mailto link. Link to the LinkedIn profile supplied in the résumé.

## Design
- Responsive, accessible, single-column layout with warm pastel colors and both light and dark themes.
- Use readable, friendly system fonts; no reference sites or specific font preference were supplied.
- Use semantic HTML, reusable Jekyll layouts/includes, SEO metadata, sitemap, and favicon.

## Technical choices and assumptions
- Keep the whole site at the repository root; no app framework, server, backend, database, contact form, trackers, or unnecessary libraries.
- Use plain HTML/CSS and minimal JavaScript. Use URL filters and an empty `baseurl` for a GitHub user site.
- Treat `jhalakagarwal-05` as the GitHub username and `jhalakagarwal-05.github.io` as the repository name.
- Check links and responsive layout at 375px and 1280px; target Lighthouse scores of 90+ in all four requested categories.
- Local Lighthouse results may depend on the available browser/tooling; document how to run Lighthouse in the README.
