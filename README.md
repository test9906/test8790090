# PixDung website

The current site is a small starting point with PixDung branding, a stone-texture background, a sign-in dialog, a checkout card, and starter community forum categories. Add other sections as they are needed.

## Current setup

- The stone texture is loaded from `pic/stone.png`.
- The pixel-style font is loaded from Google Fonts.
- Sign-in and checkout are intentionally unavailable until a real account service and secure payment provider are connected. The site does not collect passwords or payment information.
- Forum categories are informational placeholders; connect a forum backend to display live discussions and accept posts.

## Hosting and HTTPS

These files are a website front end, not a web server. Serve them with an HTTP server and configure HTTPS with a valid certificate. Your game’s TCP/UDP port `65456` is separate; a public website normally uses TCP port `443`.
