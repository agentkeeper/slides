// Generates dist/index.html linking to each built deck, so the Pages root isn't a 404.
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const presentationsDir = path.join(__dirname, '..', 'presentations');

const decks = fs
  .readdirSync(distDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((name) => fs.existsSync(path.join(distDir, name, 'slides.html')))
  .sort();

// Reuse a deck's logo as the site-wide brand logo, since there's no separate
// top-level brand asset yet.
const logoDeck = decks.find((name) => fs.existsSync(path.join(presentationsDir, name, 'logo.svg')));
if (logoDeck) {
  fs.copyFileSync(path.join(presentationsDir, logoDeck, 'logo.svg'), path.join(distDir, 'logo.svg'));
}

const items = decks
  .map((name) => {
    const title = name.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return `      <li><a href="${name}/slides.html">${title}</a></li>`;
  })
  .join('\n');

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>AgentKeeper Slides</title>
    <style>
      body { font-family: sans-serif; background: #1e293b; color: #e2e8f0; padding: 2rem; }
      a { color: #38bdf8; }
      li { margin: 0.5rem 0; }
      .logo { width: 96px; height: 96px; display: block; margin-bottom: 1.5rem; }
    </style>
  </head>
  <body>
${logoDeck ? '    <img class="logo" src="logo.svg" alt="AgentKeeper logo" />\n' : ''}    <h1>AgentKeeper Slides</h1>
    <ul>
${items}
    </ul>
  </body>
</html>
`;

fs.writeFileSync(path.join(distDir, 'index.html'), html);
console.log(`Wrote dist/index.html with ${decks.length} deck(s).`);
