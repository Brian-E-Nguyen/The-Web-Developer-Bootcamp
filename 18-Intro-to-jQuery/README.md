# Intro to jQuery

## 1. What is jQuery?

jQuery is a DOM manipulation library

`jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript. `

It comes with many useful methods to things like:

- Select elements
- Manipulate elements
- Create elements
- Add event listeners
- Animate elements
- Add effects
- Make HTTP requests (AJAX)

## 2. Why Use jQuery? Why You Might Not Use jQuery?

### 2.1 Why You Should

- Fixes "broken" DOM API
- Brevity and clarity
    - clear and shorter code
- Ease of use
- Cross-browser support
- AJAX
- Used by many
    - strong community
    - many tutorials and blogs

### 2.2 Why You Shouldn't?

- The DOM API is no longer "broken"
    - before, methods like `querySelect()` didn't use to exist, but now it does
- It doesn't do anything you can't do on your own
- It's an unnecessary dependency
- Performance
- Lots of people are moving away from jQuery

### 2.3 The Final Draw

Either way, it's worth knowing. It helps to understand the DOM more

## 3. Adding jQuery

Download jQuery and link it locally:

```html
<script type="text/javascript" src="jquery.js"></script>
```

OR

Link to a CDN, which is found on this website: https://code.jquery.com/
```html
<script
  src="https://code.jquery.com/jquery-3.5.1.js"
  integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
  crossorigin="anonymous"></script>
```

## 4. jQuery Selectors

### 4.1 Objectives

- Select elements with $()
- Use .css() to style elements

### 4.2 Selecting with jQuery

`$("selectorGoesHere")`

Selecting with jQuery is very similar to `querySelectorAll`, in that we provide a CSS style selector and jQuery will return all matching elements

```js
// Select all img tags
$("img")

// Select all elements with class "sale"
$(".sale")

// Select all elements with id "bonus"
$("#bonus")

// Select all a tags inside of li's
$("li a")
```

### 4.3 Manipulating Style with jQuery

The .css() method is jQuery's interface to styling

```
$(selector)

css(property, value)
```

```js
// Select element with id "special" and give it a border
$("#special").css("border", "2px solid red");

// We can also pass in an object with style
var styles = {
    backgroundColor: "pink",
    fontWeight: "bold"
};

$("#special").css(styles);
```

We can also style multiple elements at once 

```js
// Select all li's and make them yellow
$("li").css("color", "yellow");
```