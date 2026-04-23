# Shopping App

A responsive shopping interface built with React and Vite. The project demonstrates practical use of React hooks to manage navigation, product filtering, rotating featured deals, and cart updates in a single-page application.

## Live Demo

- Repository: [school--projects](https://github.com/theecolboy/school--projects)
- Live Site: [theecolboy.github.io/school--projects](https://theecolboy.github.io/school--projects/)
- Main branch: `main`

## Overview

This project simulates a small online shopping experience with four main sections:

- `Home` to introduce the app and highlight the featured product
- `Shop` to browse products and search by name or category
- `Deals` to display the current featured offer
- `Cart` to review selected items and total cost

The app is designed as a school project to demonstrate state management, component composition, and interactive UI behavior using React.

## Key Features

- Multi-section navigation without a routing library
- Search products by name or category
- Add items to cart instantly
- Dynamic cart total calculation
- Rotating featured deals
- Auto-focus on the shop search input
- Dynamic browser tab title updates

## React Concepts Demonstrated

- `useState` for page navigation, cart state, search text, and featured deals
- `useEffect` for title updates, timed deal rotation, and input focus behavior
- `useMemo` for filtered product results
- `useRef` for direct input focus control
- Props for component communication between `App` and `HomePage`

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- ESLint

## Project Structure

```text
shopping/
|-- public/
|-- src/
|   |-- assets/
|   |-- pages/
|   |   `-- HomePage.jsx
|   |-- App.jsx
|   |-- App.css
|   |-- index.css
|   `-- main.jsx
|-- package.json
|-- vite.config.js
`-- README.md
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Sample Product Categories

- Groceries
- Home
- Electronics
- Care

## How It Works

When the app loads, the user starts on the home page and can move between sections using the navigation buttons. The shop page allows product searching and adding items to the cart. The deals page rotates the featured product automatically after a few seconds, while the cart page displays all selected items and the total amount in Kenyan shillings.

## Deployment

This project is configured for GitHub Pages deployment with Vite. The repository includes a GitHub Actions workflow that builds the app and publishes the production files automatically after pushes to `main`.

For best GitHub compatibility, the project also includes:

- GitHub Pages deployment through Actions
- a `404.html` fallback for direct page loads
- a `.nojekyll` file so GitHub Pages serves build files without Jekyll interference
- a `.gitattributes` file to keep line endings consistent across Windows and GitHub

## Possible Improvements

- Add persistent cart storage with local storage
- Connect products to a real API or backend
- Add checkout and payment flow
- Add product images for all items
- Improve mobile responsiveness further

## Author

Ndungu Kamande

## Submission

This repository was prepared and uploaded as a school project submission.
