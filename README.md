# snappfood_test

# SnappFood Vendors List - React.js with TypeScript Project

Welcome to the SnappFood Vendors List project! This is a React.js application with TypeScript that displays a list of vendors with essential details such as restaurant title, logo, cover photo, vendor rate, delivery type, price, and description. The project implements features like pagination based on scrolling and uses SASS (SCSS) for styling with BEM naming convention, Styled Components for designing VendorCards component, Redux Toolkit for state management, Redux Saga for handling asynchronous API calls, and Axios for making HTTP requests. React Router is used for navigation.

## Getting Started

### Prerequisites
Before running the project, ensure you have the following software installed:
- Node.js (version 18.x)
- npm (Node Package Manager)

## Features

### Infinite Scrolling and Pagination with Lazy Loading
- The vendor list supports infinite scrolling with lazy loading, meaning more vendors are fetched and displayed as the user scrolls down the page. This provides a seamless browsing experience as new vendors load dynamically without the need for traditional pagination.

### Styling with SASS (SCSS) and BEM
- The homepage and VendorCardsPage are styled using SASS (SCSS) with the BEM (Block Element Modifier) naming convention for a structured and modular approach.

### Styled Components
- The VendorCard component is designed using Styled Components, allowing dynamic styling based on the data.

### State Management with Redux Toolkit and Redux Saga
- Redux Toolkit is used for state management, providing a simplified and efficient way to work with Redux.
- Redux Saga is utilized for handling asynchronous API calls.

### Routing with React Router
- React Router is implemented to enable navigation within the application.
- If the user enters a false path, the application automatically returns to the homepage.

### How to Run the Project
To run the project locally, use the following command:

npm start

The application will be available at `http://localhost:3000`.
