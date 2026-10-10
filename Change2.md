# Change 2: Return to primary navigation with the keyboard

**Branch confirmed:** `improve-keyboard-navigation`

**Status:** Awaiting approval. No website files have been changed.

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

Wait for the user's approval of this alternative before editing any website file. Approval to implement does not authorize a commit, push, merge, or publication.
