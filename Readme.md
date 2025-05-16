## Node application for a Contacts API and User API

### Overview

A demo node application using Express and Mongo DB
Demo CURD operations, Middleware, Password hashing, DB operations, Auth using JWT
Docker image for the Mongo DB and Mongo Express
Use Thunder client for REST API calls and Mongo extension for DB access
There is no front end

### Dev Setup:

    nvm node use 22    //Install and use node v22

    node --version
    npm --version
    which node
    which nodemon
    npm root -g

    npm init  // To create package.json
    npm install // Install required packages

    // Require packages
    npm install express, dotenv
    npm i express-async-handler
    npm install --save-dev nodemon
    npm i bcrypt
    npm i jsonwebtoken
    npm i mongoose

To start

    nodemon server.js
    OR node server.js

### Mango DB setup - using Docker container:

    docker-compose up -d
    docker-compose down
    docker ps

- Connection string: `mongodb://admin:Test123456@localhost:27017/contacts-db?authSource=admin`

- Use Mongo express to see Mongo Db: http://localhost:8081/

- Better to use VS code extension MongoDB

### Dockers - useful commands

    docker-compose down -v  // remove volume
    docker-compose up --build -d    // rebuild images

    sudo lsof -i :27017     // Check ports
    sudo lsof -i :8081

    docker exec -it mongodb mongosh -u root -p Test@12345   // Connect to DB
    docker logs mongo-express   // See mongodb logs
    use contacts-db     //DB commands
    show collections

### REST API calls

#### User API

    GET api/users
    POST api/users
    POST api/users/register
    POST api/users/login
    GET api/users/contact //Protected route

#### Contact API

    // All routes are protected
    GET api/contacts
    POST api/contacts
    GET api/contacts/:id
    PUT api/contacts/:id
    DELETE api/contacts/:id
