# The Document Object Model (DOM)

The DOM is the interface between JavaScript and HTML + CSS

## 1. The Process

DOM manipulation can be divided into two different processes: 

- _SELECT_ - selecting an element on the DOM
- _MANIPULATE_ - changing the properties of the selected element

### 1.1 Example 1

```html
<!DOCTYPE html>
<html>
<head>
	<title>My title</title>
</head>
<body>
	<a href="someLink">My link</a>
	<h1>My header</h1>
</body>
</html>
```

The code below is an example of how we can select all `<h1>` tags in the DOM. It is then saved to the variable `h1`

```js
var h1 = document.querySelector("h1");
```

We can then manipulate the object with methods

```js
var h1 = document.querySelector("h1");

h1.style.color = "pink";
```

![img1](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/15-DOM-manipulation/15-DOM-Manipulation/images-for-notes/img1.jpg?raw=true)

![img2](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/15-DOM-manipulation/15-DOM-Manipulation/images-for-notes/img2.jpg?raw=true)

### 1.2 Example 2

The following code will change the color of the background every 1 second

```js
var body = document.querySelector("body"); //SELECT
var isBlue = false;

setInterval(function(){   //MANIPULATE
 if (isBlue) {
   body.style.background = "white";
 } else {
   body.style.background = "#3498db";
 }
 isBlue = !isBlue;
}, 1000);
```

![img2](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/15-DOM-manipulation/15-DOM-Manipulation/images-for-notes/img2.jpg?raw=true)

![img3](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/15-DOM-manipulation/15-DOM-Manipulation/images-for-notes/img3.jpg?raw=true)

## 2. Important Selector Methods

The document has a bunch of methods for selecting elements. Here are the 5 important ones:

```js
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()
```

### 2.1 getElementById()

Takes a string argument and returns the one element with the matching ID

```js
var tag = document.getElementById("highlight"); 

console.dir(tag);
```

```html
<body>
  <h1>Hello</h1>
  <h1>Goodbye</h1>
  <ul>
    <li id="highlight">List Item 1</li> <!-- Gets this object -->
    <li class="bolded">List Item 2</li>
    <li class="bolded">List Item 3</li>
  </ul>
</body>
```

### 2.2 getElementsByClassName()

Takes a string argument and returns a list of elements that have a matching class

```js
var tags = document.getElementsByClassName("bolded");

console.log(tags[0]);
```

```html
<body>
  <h1>Hello</h1>
  <h1>Goodbye</h1>
  <ul>
	<li id="highlight">List Item 1</li>
	<!-- Retrieves these two <li> tags -->
    <li class="bolded">List Item 2</li>
    <li class="bolded">List Item 3</li>
  </ul>
</body>
```
### 2.3 getElementsByTagName()

Returns a list of all elements of a given tag name, like `<li>` or `<h1>`

```js
var tags = document.getElementsByTagName("li");

console.log(tags[0]);
```

```html
<body>
  <h1>Hello</h1>
  <h1>Goodbye</h1>
  <ul>
	<!-- Retrieves all <li> tags -->
	<li id="highlight">List Item 1</li>
    <li class="bolded">List Item 2</li>
    <li class="bolded">List Item 3</li>
  </ul>
</body>
```
Even if there's 0 or 1 results returned when querying, it always returns a list

### 2.4 querySelector()

Returns the __first__ element that matches a given CSS-style selector. Uses CSS syntax within the argumennts

```js
var tag = document.querySelector("#highlight"); 
```

```html
<body>
  <h1>Hello</h1>
  <h1>Goodbye</h1>
  <ul>
	<!-- Retrieves <li> tag with #highlight -->
	<li id="highlight">List Item 1</li>
    <li class="bolded">List Item 2</li>
    <li class="bolded">List Item 3</li>
  </ul>
</body>
```

Another example:

```js
var tag = document.querySelector(".bolded"); 
```

```html
<body>
  <h1>Hello</h1>
  <h1>Goodbye</h1>
  <ul>
	<li id="highlight">List Item 1</li>
	<!-- Retrieves first <li> tag with .bolded -->
    <li class="bolded">List Item 2</li>
    <li class="bolded">List Item 3</li>
  </ul>
</body>
```

It can also select HTML elements as well:

```js
var tag = document.querySelector("h1"); 
```
```html
<body>
	<!-- Retrieves first <h1> tag -->
  <h1>Hello</h1>
  <h1>Goodbye</h1>
  <ul>
	<li id="highlight">List Item 1</li>
    <li class="bolded">List Item 2</li>
    <li class="bolded">List Item 3</li>
  </ul>
</body>
```

### 2.5 querySelectorAll()

Returns __a list of elements__  that matches a given CSS-style selector. Uses CSS syntax within the argumennts

```js
var tag = document.querySelector("h1"); 
```

```html
<body>
	<!-- Retrieves all <h1> tags -->
  <h1>Hello</h1>
  <h1>Goodbye</h1>
  <ul>
	<li id="highlight">List Item 1</li>
    <li class="bolded">List Item 2</li>
    <li class="bolded">List Item 3</li>
  </ul>
</body>
```

Another example:

```js
var tag = document.querySelector(".bolded"); 
```

```html
<body>
  <h1>Hello</h1>
  <h1>Goodbye</h1>
  <ul>
	<li id="highlight">List Item 1</li>
	<!-- Retrieves all <li> tags with .bolded -->
    <li class="bolded">List Item 2</li>
    <li class="bolded">List Item 3</li>
  </ul>
</body>
```