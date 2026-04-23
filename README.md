# School Projects

A simple shopping web application built with React and Vite. This project demonstrates how to create an interactive shopping interface using React hooks for navigation, filtering, featured offers, and cart management.

## Repository Link

GitHub repository: [https://github.com/theecolboy/school--projects](https://github.com/theecolboy/school--projects)
Live link: [https://theecolboy.github.io/school--projects/](https://theecolboy.github.io/school--projects/)

## Project Description

This application simulates a small shopping platform with multiple sections inside one React app. Users can move between pages, search products, view current deals, add items to the cart, and see the total cost update instantly.

The project was built to practice practical React concepts in a clean and beginner-friendly way.

## Main Features

- Home page with a featured shopping message
- Shop page with searchable products
- Deals page with a rotating featured product
- Cart page with selected items and total price
- Dynamic page title updates
- Automatic input focus on the shop search bar
- Shared cart state across different sections

## How The App Works

When the application loads, the user lands on the home page where the project introduces the shopping experience and highlights a featured deal. From the navigation bar, the user can move to the shop page, deals page, or cart page.

On the shop page, users can search for products by name or category and add items directly to the cart. On the deals page, the featured product rotates automatically after a few seconds to demonstrate dynamic updates with React hooks. The cart page displays all selected items together with the total amount.

This structure shows how a React application can manage different views and shared data without needing a separate routing package.

## React Hooks Used

- `useState` for page navigation, cart items, search value, and featured deal state
- `useEffect` for document title updates, rotating deals, and search input focus
- `useMemo` for product filtering
- `useRef` for direct access to the search input

## Technologies Used

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
`-- README.md
```

## Installation And Setup

Install project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Screenshots

You can add screenshots of the following pages to make the project presentation stronger:

- Home page
- Shop page
- Deals page
- Cart page

Example markdown format:

```md
![Home Page](./screenshots/home-page.png)
![Shop Page](./screenshots/shop-page.png)
```

## Product Categories Included

- Groceries
- Home
- Electronics
- Care

## Learning Outcomes

This project helped me practice:

- creating reusable React components
- passing props between components
- managing application state with hooks
- building interactive UI behavior
- organizing a small React project structure

## Future Improvements

- connect the app to a real backend or API
- store cart items in local storage
- add product images for every item
- improve responsiveness for more screen sizes
- add checkout functionality

## Author

Ndungu Kamande

## Submission Note

This project was created as a school assignment and uploaded to GitHub for submission and review.
