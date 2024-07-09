# Full Stack Project

This project is a full stack application featuring two different UIs (`FinalUI` and `project`) that utilize the same backend (`swigyMain`). The backend is built using the Spring Boot framework and connects to a MySQL database named `swigy1`. The backend provides REST APIs for CRUD operations, which are consumed by both UIs.

## Features
- **Two Distinct UIs:** 
  - `project`: A form-based page to enter, display, and delete details.
  - `FinalUI`: A dynamic product listing page with cart functionality.
- **Backend:**
  - Developed with Spring Boot.
  - CRUD operations implemented using REST APIs.
  - MySQL database integration.

## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Spring Boot
- Database: MySQL (`swigy1`)

## UI - Project

This UI is designed as a form-based page where users can enter their details, view them in a table, and delete entries if needed. It interacts with the backend using REST APIs.

### Features
- **Form Submission:** Enter details using a form (POST API).
- **Table View:** Display submitted details in a table (GET API).
- **Delete Functionality:** Remove entries from the table.

### Technologies Used
- HTML
- CSS
- JavaScript

## UI - FinalUI

This UI is a dynamic product listing page that allows users to add items to a cart, view the cart, and remove items from it. It leverages the backend for product data and cart operations.

### Features
- **Product Listing:** Display a list of products.
- **Add to Cart:** Add products to the cart.
- **View Cart:** View items in the cart.
- **Remove from Cart:** Delete items from the cart.

### Technologies Used
- HTML
- CSS
- JavaScript

## Backend - swigyMain

This backend is developed using the Spring Boot framework and provides REST APIs for CRUD operations. It connects to a MySQL database named `swigy1` and serves as the backend for both UIs (`project` and `FinalUI`).

### Features
- **CRUD Operations:** Implemented using REST APIs.
- **Database:** Integrated with MySQL (`swigy1`).

### Technologies Used
- Spring Boot
- MySQL

## How to Use

To get started with this project, follow these steps:

1. **Clone the Repository:** Clone this repository to your local system.
   
2. **Configure Database:** Update the database configurations in `application.properties` with your MySQL database username, password, and name (`swigy1`).
   
3. **Run the Backend:** Navigate to the `swigyMain` directory and run the `swigy1Application` file to start the Spring Boot backend. Make sure the port configured in `application.properties` matches the port of your Spring Boot application.
   
4. **Run the Frontend UI:** 
   - For `project` UI: Open the `index.html` file located in the `project` directory.
   - For `FinalUI` UI: Open the `index.html` file located in the `FinalUI` directory.
   
5. **Explore the Application:** Use the respective UIs to interact with the application, enter data, view products, add items to the cart, and manage entries as per the UI functionality.
