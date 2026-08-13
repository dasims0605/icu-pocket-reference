# ICU Pocket Reference

A self-contained personal ICU RN quick-reference PWA. Open `index.html` in a browser for desktop review; serve this folder through any simple HTTPS/static host to install it on a phone home screen and enable reliable offline caching.

## Publish with GitHub Pages

1. Create a repository such as `icu-pocket-reference` and upload the contents of this folder to its root.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/(root)`, and save.
4. After GitHub shows the published URL, open it on your phone and choose **Add to Home Screen** (iPhone/Safari) or **Install app** (Android/Chrome).

Keep this repository private only if your GitHub plan supports Pages for private repositories. Do not upload workplace policies, patient information, credentials, or any sensitive notes: phone notes stay local, but repository files are published.

## Included

- 15 medication cards and 15 condition cards
- Five problem-based bedside quick references
- MAP, anion gap, corrected sodium/calcium, P/F ratio, QTc, and shock-index calculators
- Global search, favorites, and device-local personal notes
- A separate, clearly labeled area for workplace protocol reminders

## Expand it

All starter content lives at the beginning of `app.js` in the `meds`, `dx`, and `quick` lists. Add an entry using the same five-field pattern: title, category, overview, monitor/trend, and bedside pearl. Personal notes are stored only in the current browser’s local storage; they are not shared or backed up by this app.

## Clinical-use boundary

This is general educational reference material—not an order set, policy source, dosing authority, or substitute for clinical judgment. Validate all clinical decisions against current patient context, provider orders, institutional policies, pharmacy guidance, and emergency procedures.
