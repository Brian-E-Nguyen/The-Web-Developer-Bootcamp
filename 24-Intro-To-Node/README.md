# Node JS

- What is Node?
- Why are we learning it?
- (it doesn't matter (long term))

## 1. Intro to Node

Node is a way to write JavaScript code from the server side.

We are learning it because:
- It's popular among web developers
- It has high performance
- It's in JavaScript!!

## 2. Using Node

- Interact with Node console
- Run a file with Node

To run node in the terminal, type `node`

![img1](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/24-Intro-to-Node/24-Intro-To-Node/img-for-notes/img1.jpg?raw=true)

With Node, we can create a JS file and execute it in the command line. This is useful without any HTML files

`node <filename>`

## 3. Excercises

### 3.1 Excercise 1

- Using the commandline, create a file "echo.js" 
- Inside the file, write a function named "echo()" that takes two arguments: a string and a number
- It should print out the string x number of times

```js
echo('Echo!!!', 10);
echo('Tater tots', 3);
```

### 3.2 Excercise 2

- Create a new file "grader.js"
- In the file, define a new function named "average"
- It should take a single parameter: an array of test scores (all numbers)
- It should return the average score in the array, rounded to the nearest whole number

```js
var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores); // return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2); // return 68
```

## 4. Intro to NPM

- Define NPM
- Explain why NPM is awesome
- What packages we will be using

### 4.1 Intro to NPM

Node Package Manager (NPM) is a tool to add open source JavaScript libraries to your project

### 4.2 Installing and Using NPM

In your terminal, use `npm install <package name>` to install a package

In your JavaScript file, use `require()` to include a package

### 4.3 Faker Excercise

- Create a new directory "MyShop"
- Add a file named "listProducts.js"
- Install "faker" package
- Read the Faker docs and figure out how it works
- Use Faker to print out 10 random product names and prices
- Run your file with node and make sure it works!

