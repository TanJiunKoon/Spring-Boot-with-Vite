# Book & Publisher Management Full-Stack Application

This repository contains a full-stack Java application that demonstrates a RESTful backend built with Spring Boot, JPA (Hibernate), and a relational database (H2 for development), as well as a React + TypeScript frontend built with Vite. The application implements CRUD operations for **Books** and **Publishers**, and showcases the use of pagination, searching, and relationships between entities.

## Key Concepts, Knowledge & Tools

### Backend (Java, Spring Boot, JPA, Hibernate)
- **Spring Boot**:  
  Provides an opinionated configuration for a standalone Spring application.  
  Key features:
  - Embedded web server (Tomcat)  
  - Auto-configuration of Spring beans  
  - Simplified build and run process

- **Spring Framework (IoC/DI)**:  
  Inversion of Control and Dependency Injection help manage object lifecycles and dependencies without manual instantiation.

- **JPA & Hibernate**:  
  - **JPA (Java Persistence API)**: A specification that defines how to map Java objects to relational database tables using annotations.  
  - **Hibernate**: A popular JPA implementation that handles the actual ORM (Object-Relational Mapping) and SQL generation under the hood.

- **Spring Data JPA**:  
  Simplifies data access by providing repositories that offer built-in methods for CRUD, paging, and sorting. Custom queries can be defined via method names or annotations.

- **Database (H2)**:  
  An in-memory database used for development and testing. It starts fresh on application startup and doesn't require external installation. Queries and schema generation are handled by Hibernate based on JPA entities.

- **CORS Configuration**:  
  Configured globally to allow the frontend (running on a different port) to access backend endpoints without Cross-Origin errors.

### Frontend (React, TypeScript, Vite)
- **React**:  
  A JavaScript library for building user interfaces. Components, hooks (`useState`, `useEffect`) to manage state and side effects.

- **TypeScript**:  
  A strongly typed language that compiles to JavaScript, providing better tooling, type checks, and clearer contracts for data structures.

- **Vite**:  
  A fast build tool and development server that provides instant hot reloading, faster builds, and an easy setup for modern frontend frameworks.

- **React Router**:  
  Used for client-side routing, enabling navigation between different pages (e.g., Home, Books list, Publishers list) without full page reloads.

- **Fetch API & REST**:  
  Consumes the backend’s RESTful endpoints to retrieve and modify data. The frontend uses `fetch()` (or could use `axios`) to communicate with the Spring Boot API.

## Getting Started

### Prerequisites
- **Java 17+** installed
- **Maven** installed (optional if using a Maven wrapper)
- **Node.js + npm** installed

### Running the Backend
1. Navigate to the backend project root directory (Spring-Boot-with-Vite).
2. Run `mvn spring-boot:run` or use your IDE’s run configuration.
3. The backend should start at `http://localhost:8080`.

### Running the Frontend
1. Navigate to the `my-frontend` directory.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open `http://localhost:5173` in your browser.

You should now have a full-stack application running:
- Backend endpoints at `http://localhost:8080`
- Frontend served at `http://localhost:5173`

Interact with the UI to:
- View, add, edit, and delete **Books**.
- View, add, edit, and delete **Publishers**.
- Navigate between pages and confirm data persistence.

### Important Notes
- CORS is configured on the backend to allow requests from `http://localhost:5173`.
- The H2 database is in-memory by default. Data resets each time you restart the backend.
- For a production scenario, you would:
  - Switch to a persistent database (e.g., MySQL or PostgreSQL).
  - Set up proper `ddl-auto` handling and migrations (Flyway or Liquibase).
  - Limit CORS to known domains.
  - Build the frontend for production (`npm run build`) and serve the static files with the backend or a separate hosting solution.

## Future Improvements & Adjustments

- **Validation & Error Handling**:  
  Add `@Valid` annotations and exception handlers in the backend, and better error messages in the UI.
  
- **Authentication & Authorization**:  
  Secure the endpoints with Spring Security and add login pages on the frontend.

- **Pagination & Sorting in the UI**:  
  Expose more of the backend’s pagination and sorting capabilities directly in the UI, allowing users to browse large datasets easily.

- **UI/UX Enhancements**:  
  Add styling using CSS frameworks (e.g., Tailwind, Material UI), improve the layout, add loading indicators, and implement better responsiveness.

- **Test Coverage**:  
  Add JUnit tests for backend services and controllers, and React testing (e.g., using Jest) for frontend components.
