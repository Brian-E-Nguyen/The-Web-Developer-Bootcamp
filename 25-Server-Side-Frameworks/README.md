# Server Side Frameworks

## 1. Intro to Express

- What is a framework? How is it different from a library?
- What is Express?
- Why are we using Express?

A library is code that someone else wrote, but also frameworks. The defining difference between the two is _Inversion of Control_

When you call a library, _you_ are in control. But with a framework, the control is inverted: the _framework_ calles you.

All of the control flow is already in the framework, and there's a bunch of predefined white spots that you can fill out with your own code. A library on the other hand is a collection of functionality that _you_ can call

Express is a web development framework. We are using it because:
- It's the most popular Node framework
- It's a lightweight framework, where we do most of the work. We have the freedom of how to do things

## 2. Package.json

The `package.json` file contains all of the metadata about a framework. It contains dependencies, contributors, versions, etc.

The `--save` takes the package name and version and automatically saves it into the `package.json` file if we have one

Using `npm init` creates a new `package.json` file

## 3. Express Routing Assignment

1. Create a brand new Express app from scratch
2. Create a package.json using `npm init` and add express as a dependency
3. In your main app.js file: add 3 different routes:

- Visiting "/" should print "Hi there, welcome to my assignment!"
- Visiting "/speak/pig" should print "The pig says 'Oink'"
- Visiting "/speak/cow" should print "The cow says 'Moo'"
- Visiting "/speak/dog" should print "The dog says 'Woof'"
- Visiting "/repeat/hello/3" should print "hello hello hello"
- Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
- Visiting "/repeat/blah" should print "blah blah"

If a user visits any other route, print: "Sorry, page not found...What are you doing with your life?"