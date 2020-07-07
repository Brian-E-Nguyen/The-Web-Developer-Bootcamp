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

## 3. Manipulating

### 3.1 Style

The `style` property is one way to manipulate an element's style

```js
// SELECT
var tag = document.getElementById("highlight");

// MANIPULATE
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";
```
### 3.1.1 Separation of Concerns

Rather than directly manipulating style with JS, we can define a CSS class and then toggle it on or off with JS

```js
//INSTEAD OF THIS:
var tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border = "10px solid red";
```

```css
/*DEFINE A CLASS IN CSS*/
.some-class {
  color: blue;
  border: 10px solid red;
}
```

```js
var tag = document.getElementById("highlight");
//ADD THE NEW CLASS TO THE SELECTED ELEMENT
tag.classList.add("some-class");
```

### 3.1.2 classList

A read-only list that contains the classes for a given element. It is __not an array__

```css
/*DEFINE A CLASS IN CSS*/
.another-class {
  color: purple;
  fontSize: 76px;
}
```

```js
var tag = document.querySelector("h1");

//ADD A CLASS TO THE SELECTED ELEMENT
tag.classList.add("another-class");

//REMOVE A CLASS
tag.classList.remove("another-class");

//TOGGLE A CLASS
tag.classList.toggle("another-class");

```

## 3.2 Manipulating Text and Content

### 3.2.1 textContent

Returns a string of all the text contained in a given elements

```html
<p>
  This is an <strong>awesome</strong> paragraph 
</p>
```
```js
// Select the <p> tag:
var tag = document.querySelector("p");

//Retrieve the textContent:
tag.textContent //"This is an awesome paragraph"

//alter the textContent:
tag.textContent = "blah blah blah";
```

### 3.2.2 innerHTML

Similar to textContent, except it returns a string of all the HTML contained in a given element

```html
<p>
  This is an <strong>awesome</strong> paragraph 
</p>
```

```js
//Select the <p> tag:
var tag = document.querySelector("p");

tag.innerHTML
//"This is an <strong>awesome</strong> paragraph"
```

## 3.3 Attributes

### 3.3.1 getAttribute and setAttribute()

Use getAttribute and setAttribute() to read and write attributes like `src` or `href`

```html
<a href="www.google.com">I am a link</a>
<img src="logo.png">
```
```js
var link = document.querySelector("a");
link.getAttribute("href");  //"www.google.com"
//CHANGE HREF ATTRIBUTE
link.setAttribute("href","www.dogs.com"); 
///<a href="www.dogs.com">I am a link</a>

//TO CHANGE THE IMAGE SRC
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");
//<img src="corgi.png">
```
