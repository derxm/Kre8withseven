# Kre8withseven

Kre8withseven is a creative portfolio for graphic design and video editing work. It is built with React and Vite, with project galleries, keyboard-accessible image modals, responsive layouts, and previews for hosted video projects.
## Requirements

- Node.js 20.19+ or 22.12+
- npm (included with Node.js)
- Git, if you plan to contribute or deploy from a Git checkout
## Getting Started

Open a terminal in the `Kre8withseven` project folder, then install dependencies and start the development server:
## Available Commands

| Command | Description |
## Portfolio Features

- **All Work** shows the graphic design campaigns and hosted video projects.
## Project Structure

```text
## Updating Project Galleries

Campaign cards and their artwork are configured in `src/data/projects.js`. Add the artwork file under `src/assets/`, import it near the other assets, and add an object to the appropriate project's `gallery` array:
### Selected Works

Selected Works is kept separate from client campaigns. Its image list is exported as `selectedWorksImages` from `src/data/projects.js`, and the dedicated folder card is configured in `src/components/Portfolio.jsx`. Add new miscellaneous artwork to that image list with a source and descriptive alt text. Do not put independent designs into the Morenchiz, PULCHRA, The Nexus Lagos, or BloomX campaign galleries.
### Video Projects

Video cards are configured in the `videoProjects` array in `src/data/projects.js`. Each entry can include a unique `id`, title, category, local thumbnail, `previewUrl`, and external `url`. The current previews use Google Drive's `/preview` URL and the external action uses the corresponding sharing URL. Keep sharing permissions and both URLs current when replacing a video.
## Contact Form

The enquiry form component is in `src/components/Contact.jsx`. Before publishing, replace its Formspree form ID placeholder with the ID for the destination form and submit a test enquiry. Without a valid form ID, the page can render but form delivery is not configured.
## Production Build and Deployment

Create and inspect the production bundle locally:
## Tech Stack

- React 19
- Vite 8 and the React Compiler plugin
- Framer Motion for UI transitions and reduced-motion-aware animations
- Lucide React icons
- Oxlint
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
