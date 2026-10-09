# Change 1: Clearer professional homepage introduction

**Branch confirmed:** `improve-home-introduction`  
**Status:** Approved, implemented, and locally verified. Changes remain uncommitted; no push, merge, or publication has been performed.

## Current issue or opportunity

The homepage introduction identifies the Berkeley Haas MBA and broad experience areas, but describes AI interest generally. The target role areas—AI product, strategy, and trust & safety—appear only in the later “Looking ahead” section. Recruiters must read further to understand the desired career direction.

## Planned improvement

- Replace the opening paragraph with a concise introduction that connects the MBA, relevant experience, AI interests, and target role areas.
- Use only the supplied About text, résumé, and existing factual content. Do not add qualifications, employers, projects, achievements, or metrics.
- Update the homepage's front-matter description to reflect the clearer positioning.
- Adjust “Looking ahead” only if needed to avoid repeating the new introduction.
- Preserve the existing heading, experience outcomes, links, themes, layouts, and static Jekyll structure.
- Exclude this planning document from the published site output.

### Proposed introduction

> I’m an MBA candidate at Berkeley Haas interested in AI product, strategy, and trust & safety roles. My experience spans consulting, product, education, and social impact, including product and growth initiatives, AI-enabled business workflows, and workforce and education programs. I want to help create technology that is useful, trustworthy, and accessible.

### Personal details not assumed

The draft uses the previously supplied role areas. Exact job titles, seniority, opportunity type (internship or full-time), and availability have not been supplied and will not be added without confirmation. The user may provide these details before implementation if they want more specific wording.

## Why it helps recruiters

- Makes the desired role areas visible immediately rather than below the work examples.
- Connects the broad background to concrete, relevant work without implying prior trust & safety experience.
- Gives recruiters a concise summary they can assess before following the experience link.

## Files expected to change

- `Change1.md`: this plan, created before website edits.
- `index.md`: opening introduction, homepage description, and “Looking ahead” wording only if needed for consistency.
- `_config.yml`: add `Change1.md` to the excluded publishing files; no other configuration changes.

No CSS, JavaScript, layouts, dependencies, frameworks, backends, or additional applications are planned.

## How we will test the change

After approval:

1. Confirm the branch is still `improve-home-introduction`; stop if it is `main` or any other branch.
2. Review the copy against the supplied personal information and confirm that existing achievement claims and metrics are unchanged.
3. Run a Jekyll build and confirm that the homepage renders without unprocessed Markdown or Liquid and that `Change1.md` is excluded from site output.
4. Check the homepage at 375px and 1280px in light and dark themes for readable introduction text and no horizontal overflow.
5. Confirm navigation, homepage links, and the theme button still work.
6. Check the page title, single main heading, and updated description. Run homepage Lighthouse checks, targeting at least 90 in Performance, Accessibility, Best Practices, and SEO.
7. Review the diff to ensure it contains only the planned changes. Do not commit, push, or merge.

## Approval gate

The user approved this plan before website edits began. Approval of this plan does not authorize a commit, push, merge, or publication.

## Verification results

- Jekyll build passed; `Change1.md` is excluded from site output.
- The approved introduction renders exactly. The existing achievement section and metrics are unchanged.
- The homepage title, single main heading, description, navigation, and homepage links passed checks.
- Both themes display without horizontal overflow at 375px and 1280px. Theme switching and remembered preference work.
- No browser console or resource errors were observed.
- The diff is limited to `index.md`, `_config.yml`, and this document. No new application or website dependencies were added.

Local homepage Lighthouse results:

| Width | Theme | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- | --- |
| 375px | Light | 99 | 100 | 100 | 100 |
| 375px | Dark | 99 | 100 | 100 | 100 |
| 1280px | Light | 100 | 100 | 100 | 100 |
| 1280px | Dark | 100 | 100 | 100 | 100 |

These results are from the local Jekyll preview, not a published deployment.
