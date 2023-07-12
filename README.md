# JWT Auth Server

This is a demo project showcasing a JWT-based authentication server built with NestJS. The server provides endpoints for user authentication and authorization using JSON Web Tokens (JWT).

## Features

- User sign-up with email and password
- User sign-in with email and password
- Authentication using JWT
- Authorization using a JWT guard
- Get recent blogs endpoint (protected by JWT guard)
- Get posts endpoint

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (v14 or above)
- npm (v6 or above)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/jwt-auth-server.git

2. Navigate to the project directory:

    cd jwt-auth-server

3. install the dependencies

    npm install

4. Set up the environment variables:
Create a .env file in the root directory of the project and configure the following variables:

PORT=3000
JWT_SECRET=jwtauthserver

5. start the application

npm run start


# Usage
## User Sign-up
    Endpoint: POST /auth/signup

    Create a new user by sending a POST request to the above endpoint with the following payload:
    {
        "email": "user@example.com",
        "pas
## User Sign In
    
    Endpoint: POST /auth/signin

    Sign in a user by sending a POST request to the above endpoint with the following payload:      
    {
        "email": "user@example.com",
        "password": "password123"
    }

The response will include a JWT token that you can use for subsequent authenticated requests.

## Get Recent Blogs
    Endpoint: GET /blogs/recent

    Retrieve a list of recent blogs by sending a GET request to the above endpoint. This endpoint requires authentication using a JWT token.

    Include the JWT token in the Authorization header as follows:


    GET /blogs/recent HTTP/1.1
    Host: localhost:3000
    Authorization: Bearer <JWT_TOKEN>
## Get Posts
    Endpoint: GET /posts

    Retrieve a list of posts by sending a GET request to the above endpoint. No authentication is required for this endpoint.


    GET /posts HTTP/1.1
    Host: localhost:3000
    Security
    It is recommended to secure the application in a production environment by using secure environment variables, enabling HTTPS, and implementing additional security measures such as rate limiting and input validation.

## License
    This project is licensed under the MIT license.

## Contributing
    Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Acknowledgements
    This project was developed using the NestJS framework and the concepts of JSON Web Tokens (JWT). Special thanks to the NestJS and JWT communities for their excellent documentation and resources.


# Thank you for checking out this project!


    
