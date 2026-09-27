# ThinkLock Meta Playable — Tap Trap

Production asset: `index.html`

This directory contains the Meta-specific version of ThinkLock's Tap Trap playable ad. It is intentionally separate from the public website demo.

## Meta-specific requirements enforced

- Self-contained HTML/CSS/JavaScript.
- No external images, fonts, scripts, XHR, fetch, WebSocket, iframe, or analytics requests.
- No JavaScript store redirect in the production playable.
- Final CTA calls `FbPlayableAd.onCTAClick()`; Meta owns the app-store destination and attribution.
- No autoplay audio.
- Upload package has `index.html` at the ZIP root.
- Package remains far below Meta's 5 MB ZIP cap.
- Automated Chromium QA checks portrait, small portrait, and small landscape widths, runs the challenge to completion, and verifies exactly one Meta CTA call.
- Automated packaging publishes a tested ZIP artifact and SHA-256 checksum.

## Important

Do not replace the Meta CTA with `window.open()`, `location.assign()`, MRAID, or a direct App Store / Google Play redirect.

The lead-in video is configured separately in Meta Ads Manager. The playable ZIP is attached under the playable destination/source.

## Automated QA

GitHub Actions workflow:
`.github/workflows/meta-playable-package.yml`

Changes to `meta-playable/index.html` automatically rerun compliance, browser interaction, responsive-layout, CTA, network-request, packaging, and checksum tests.

Meta's own Playable Preview remains the final platform-level validation before publishing because Meta injects the real `FbPlayableAd` object only inside its playable environment.
