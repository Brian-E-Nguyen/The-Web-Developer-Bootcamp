# Backend Basics

Objectives

- Review Internet Basics
- Static vs. Dynamic Sites
- Stacks / Backend Technologies

## 1. Intro to The Backend

### 1.1 Finding the Right Address

`www.udemy.com` -> `23.235.47.175`

- Your query is submitted to your ISP
- Within your ISP, the DNS takes the domain name and turns it into an IP address

### 1.2 Going to that Address

`www.udemy.com` -> `23.235.47.175`

- A request is sent to the desired IP address via HTTP
- Your request finds the fastest path possible to the server with the specific IP
- This is not a direct journey. It requires hoping from server to server until we arrive

### 1.3 The Udemy Server Responds

- The requested server figures out exactly what we're asking for  (/course)
- The server builds us the right content, often pulling info from the database
- The server responds with any combination of HTML, CSS, and JS
- The page is then rendered to the user

### 1.4 Static vs. Dynamic Sites

- Static - the same exact content every time
- Dynamic - compiled on the server side where the server is constructing a webpage before it is sent back as a response

### 1.5 Stacks

Stacks refer to what particular choices developers make and what technologies did they use

The blue line represents the boundary between frontend and backend

![img1](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/22-Backend-Basics/22-Backend-Basics/img-for-notes/img1.jpg?raw=true)

![img2](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/22-Backend-Basics/22-Backend-Basics/img-for-notes/img2.jpg?raw=true)

![img3](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/22-Backend-Basics/22-Backend-Basics/img-for-notes/img3.jpg?raw=true)

![img4](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/22-Backend-Basics/22-Backend-Basics/img-for-notes/img4.jpg?raw=true)

![img5](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/22-Backend-Basics/22-Backend-Basics/img-for-notes/img5.jpg?raw=true)

## 2. HTTP in Depth

### 2.1 HTTP Verbs

The most common ones are

- GET - Retrieving information
- POST - Creating information
- PUT - Updating information
- DELETE - Deleting information

There are two important parts in every response

1. The __body__ of the response. That's like the payload of the response that is being sent back (HTML, CSS, JS)

![img6](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/22-Backend-Basics/22-Backend-Basics/img-for-notes/img6.jpg?raw=true)

2. The __headers__ of the response. The most important ones are _content-type_ and _status code_

![img7](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/22-Backend-Basics/22-Backend-Basics/img-for-notes/img7.jpg?raw=true)