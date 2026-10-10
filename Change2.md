# Change 2: Return to primary navigation with the keyboard

**Branch confirmed:** `improve-keyboard-navigation`

**Status:** Implemented and locally verified on `improve-keyboard-navigation`. No staging, commit, push, merge, or publication has been performed for this improvement.

## Current issue

The three originally requested keyboard-navigation features already exist and work:

- `_layouts/default.html` provides a “Skip to content” link as the first keyboard Tab stop.
- `assets/css/main.css` reveals the skip link on focus and gives links, navigation links, and buttons a visible 3px focus outline.
- The shared layout contains one `<main id="main" tabindex="-1">` target. Activating the skip link moves keyboard focus there, and the next Tab moves into the page content.

These behaviors were checked in Chromium on Home, About, Work Experience, and Contact at 375px and 1280px in light and dark themes. Creating duplicate features would not be a meaningful improvement.

The proposed alternative addresses a different navigation opportunity: there is no direct link from the footer back to primary navigation. A keyboard user reaching the bottom must tab backward through earlier links or use browser shortcuts.

## Planned changes

1. Add a visible “Back to navigation” link to the shared footer, separate from the list labeled “External links.”
2. Give the existing primary navigation a unique `id="primary-navigation"` and `tabindex="-1"`. The footer link will use `href="#primary-navigation"` to move focus there without JavaScript.
3. Extend the existing focus styling to the navigation target so its location is visibly indicated after the jump. Reuse the existing light and dark theme colors.
4. Keep the navigation target out of the normal Tab order. After the jump, the next Tab should reach the first navigation link.
5. Preserve the existing skip link, main-content target, current-page indication, theme control, homepage introduction, and `Change1.md`.
6. Exclude `Change2.md` from published site output, just as `Change1.md` is excluded.

No additional application, framework, library, backend, or JavaScript is planned.

## Why this improves navigation

- Provides a direct keyboard route from the bottom of every page to the site's primary navigation.
- Moves actual keyboard focus, rather than merely scrolling the page.
- Makes the destination visible and keeps subsequent Tab navigation predictable.
- Complements the existing skip-to-content route without duplicating it.
- Works without JavaScript.

## Files to edit

- `Change2.md`: this plan, created before website edits; record verification results after implementation.
- `_includes/header.html`: add the navigation target's ID and negative tabindex.
- `_includes/footer.html`: add the “Back to navigation” link.
- `assets/css/main.css`: apply visible focus styling to the navigation target.
- `_config.yml`: add `Change2.md` to the publishing exclusions.

`Change1.md`, `index.md`, and `_layouts/default.html` will remain unchanged.

## How we will test the result

After approval:

1. Confirm the branch is still `improve-keyboard-navigation`; stop if it is `main` or another branch.
2. Run a Jekyll build. Check that each page has one main landmark and one primary-navigation target, with no duplicate IDs or unrendered Liquid.
3. On all four pages at 375px and 1280px in both themes, use real Tab and Enter input to verify that the skip link still appears first, focuses main content, and allows subsequent navigation into content.
4. Reach the new footer link with the keyboard and press Enter. Confirm that focus moves to primary navigation, the target and its focus outline are visible, and the next Tab reaches the first navigation link.
5. Check forward and reverse Tab order, keyboard activation of navigation links, current-page indication, and the absence of a keyboard trap. The navigation container must not become an extra ordinary Tab stop.
6. Repeat the skip and return-to-navigation checks with JavaScript disabled. Confirm that existing reduced-motion behavior is preserved.
7. Check for horizontal overflow, clipped focus outlines, broken links, and browser console or resource errors.
8. Confirm that both assignment documents are excluded from site output and that `Change1.md` and the first homepage improvement are byte-for-byte unchanged.
9. Review the diff and run `git diff --check`. Only the planned files may change. Do not stage, commit, push, or merge.

## Approval gate

The user approved this alternative before website edits began. Approval to implement does not authorize a commit, push, merge, or publication.

## Verification results

- The Jekyll build passed. All four pages have unique main and navigation targets and a footer return link.
- Chromium keyboard checks passed in 32 combinations: four pages, two widths (375px and 1280px), two themes, and JavaScript enabled or disabled.
- The existing skip link remains the first Tab stop and moves focus to main content.
- The footer link is reachable with Tab. Enter moves focus to primary navigation, displays an unclipped 3px outline, and the next Tab reaches Home.
- Forward and reverse Tab order, navigation activation with Enter, current-page indication, theme switching, and theme persistence passed.
- No keyboard trap, horizontal overflow, browser console error, or failed resource request was observed.
- Both system color themes work with JavaScript disabled. The reduced-motion preference retains nonanimated scrolling.
- `Change1.md`, `index.md`, `_layouts/default.html`, and the existing theme JavaScript are byte-for-byte unchanged.
- Both assignment documents are excluded from published site output. `Change2.md` remains in the repository root.
- Implementation uses HTML and CSS only. The navigation's scroll margin keeps its focus outline clear of the viewport edge after the jump.

## Specific checks to perform

1. Reload a page, then press Tab. The “Skip to content” link should appear with a visible outline.
2. Press Enter to skip the header, then Tab. Focus should move into the page's content links.
3. Continue tabbing until “Back to navigation” in the footer is focused. It should have a visible outline and be separate from the external links.
4. Press Enter. Focus should move to the primary-navigation region, with an outline visible around it.
5. Press Tab. Home should receive focus. Use Shift+Tab to move backward and Enter to activate navigation links; there should be no trap or extra ordinary Tab stop on the navigation container.
6. Repeat on Home, About, Work Experience, and Contact in both themes, at 375px and 1280px.
7. In a standalone app-preview tab, disable JavaScript and reload. Repeat the skip and footer-return checks. With reduced motion enabled, scrolling should not animate.

Optional terminal checks:

```sh
git branch --show-current
JEKYLL_ENV=production jekyll build
git diff --check
git diff -- Change1.md index.md _layouts/default.html assets/js/theme.js
```

The branch should be `improve-keyboard-navigation`, the build should succeed, and both diff checks should produce no output.
