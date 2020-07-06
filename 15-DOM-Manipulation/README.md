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

![img1](\images-for-notes\img1.jpg)

![img1](\images-for-notes\img2.jpg)

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

![img2](\images-for-notes\img2.jpg)

![img3](\images-for-notes\img3.jpg)

