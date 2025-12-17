# skarif.dev

> My personal corner of the internet, built with performance and simplicity in mind.

![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
[![Deployed on Cloudflare](https://img.shields.io/badge/Deployed%20on-Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://skarif.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](https://opensource.org/licenses/MIT)

## 👋 Hi, I'm Sk Arif!

I'm a software engineer and lifelong web enthusiast. I’ve been building for the web for over a decade and now help teams deliver thoughtful, modern, scalable cloud-first software.

I write about the challenges and solutions I encounter in my engineering journey.

## 🚀 About The Project

This repository hosts the source code for my personal website and blog, [skarif.dev](https://skarif.dev). It serves as a portfolio of my open-source work and a platform for sharing my thoughts on software engineering.

The site is designed to be:
-   **Fast**: Static generation for near-instant load times.
-   **Clean**: Minimalist design focused on readability and content.
-   **Maintainable**: Built with modern tools and a type-safe content layer.

## 🛠️ Tech Stack

This project is built using a modern, performance-focused stack:

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Astro](https://astro.build/) | The web framework for content-driven websites. |
| **UI Library** | [React](https://react.dev/) | Component-based UI for interactive elements. |
| **Styling** | [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) | Native, scoped styling without the bloat. |
| **Content** | [MDX](https://mdxjs.com/) | Markdown for the component era, powering the blog. |
| **Optimization** | [Sharp](https://sharp.pixelplumbing.com/) | High-performance image processing. |
| **Syntax Highlighting** | [Expressive Code](https://expressive-code.com/) | Beautiful code blocks with Shiki. |


## ⚡ Getting Started

Want to run this project locally? Here's how:

### Prerequisites

-   **Node.js**: (Version 18+ recommended)
-   **Package Manager**: pnpm (recommended), npm, or yarn.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/skarif2/skarif.dev.git
    cd skarif.dev
    ```

2.  **Install dependencies**:
    ```bash
    pnpm install
    ```

### Development

Start the local development server:

```bash
pnpm dev
```

Visit `http://localhost:4321` to see the site in action.

### Build

Build the project for production:

```bash
pnpm build
```

The output will be in the `dist/` directory, ready to be deployed.

## ☁️ Deployment

This site is hosted on [Cloudflare Workers](https://workers.cloudflare.com/) rather than Cloudflare Pages.

Why Workers? This project relies on a **private submodule** for some of its content. Cloudflare Pages currently has limitations when building projects with private submodules. Cloudflare Workers offers the flexibility needed to handle this setup efficiently.

## 📄 License

The code in this repository is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Note:** All blog posts, written content, resume information, and personal details are © 2018 Sk Arif and are not covered by the MIT License.
