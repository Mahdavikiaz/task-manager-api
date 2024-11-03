# Task Manager API
A RESTful API for managing tasks with authentication and authorization features. This API allows users to register, log in, and perform CRUD operations on their tasks, ensuring that each user can only manage their own tasks.

## Features
- User Authentication: Secure user registration and login using JSON Web Tokens (JWT).
- Authorization: Ensures that each user can only access their own tasks.
- CRUD Operations: Full CRUD functionality for tasks with title, description, and status.
- Data Validation: Validates inputs to prevent incomplete or incorrect data.
- Error Handling: Proper error messages for failed operations and invalid requests.

## Technologies Used
- Node.js & Express.js: Server and routing framework.
- MongoDB & Mongoose: Database and ORM for data storage and manipulation.
- JSON Web Tokens (JWT): For secure authentication and authorization.
- bcrypt: For hashing and securely storing user passwords
