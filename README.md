# Nebula

A minimalist desktop web browser built with Electron.js. Nebula strips away the noise - no tabs cluttering your view, no bulky chrome - just a clean, focused window for the web.

## Features

- **Frameless window** - custom title bar keeps the UI tight and native-feeling
- **Smart address bar** - type a full URL, a domain, or plain text (falls back to Google search)
- **Always-on-top toggle** - pin Nebula above all other windows with one click
- **Hide title bar mode** - collapse the entire toolbar for full-content view; hover the top edge to reveal it again
- **Navigation controls** - back, forward, refresh, and home buttons
- **New window** - open an additional browser window instantly
- **Custom window controls** - close, minimize, and maximize without the OS frame
- **Cross-platform packaging** - ships as `.exe` (Windows), `.zip` (macOS), `.deb` and `.rpm` (Linux)

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | [Electron](https://www.electronjs.org/) v33 |
| Build tool | [Vite](https://vitejs.dev/) v5 |
| Packaging | [Electron Forge](https://www.electronforge.io/) v7 |
| Icons | [Font Awesome](https://fontawesome.com/) |
| Language | Vanilla JavaScript |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm

### Installation

```bash
git clone https://github.com/ashrafmd0506/nebula.git
cd nebula
npm install
```

### Run in development

```bash
npm start
```

### Build a distributable

```bash
# Package without an installer
npm run package

# Create platform installers
npm run make
```

Outputs land in the `out/` directory.

## Project Structure

```
nebula/
├── src/
│   ├── main.js        # Electron main process - window creation, IPC handlers
│   ├── preload.js     # Context bridge - exposes safe IPC calls to the renderer
│   ├── renderer.js    # Renderer process - all UI logic and event bindings
│   └── index.css      # Styles
├── index.html         # App shell / title bar markup
├── forge.config.js    # Electron Forge + Vite plugin config
└── package.json
```

## Usage

| Action | How |
|---|---|
| Navigate | Type in the address bar and press `Enter` |
| Search | Type any text (no URL) and press `Enter` - searches Google |
| Always on top | Click the **ban** icon (turns red when active) |
| Hide toolbar | Click the **window-maximize** icon; hover the top edge to peek |
| New window | Click the **+** icon |
| Go home | Click the **home** icon (loads google.com) |

## License

MIT - see [LICENSE](LICENSE) for details.
