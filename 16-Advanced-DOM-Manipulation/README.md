# Advanced DOM Manipulation

## 1. Events

Events are everywhere, such as:

- clicking on a button
- hovering over a link 
- dragging and dropping
- pressing the Enter key

### 1.1 The Process

We select an element and add an __event listener__

"Listen for a click on this `<button>`"

"Listen for a hover event on this `<h1>`"

"Listen for a keypress on text input"

### 1.2 The Process

To add a listener, we use a method called _addEventListener_

```js
// The first argument is the type of event we want to listen for
// The second is the code we run when that event happens
element.addEventListener(type, functionToCall);
```

```js
var button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log("SOMEONE CLICKED THE BUTTON!");
});
```

### 1.3 An Example

```html
<button>Click Me</button>
<p>No One Has Clicked Me Yet</p>
```

```js
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

//SETUP CLICK LISTENER
button.addEventListener("click", function() {
  paragraph.textContent = "Someone Clicked the Button!";
});
```

![img1](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/16-Advanced-DOM-Manipulation/16-Advanced-DOM-Manipulation/images-for-notes/img1.jpg?raw=true)

![img2](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/16-Advanced-DOM-Manipulation/16-Advanced-DOM-Manipulation/images-for-notes/img2.jpg?raw=true)