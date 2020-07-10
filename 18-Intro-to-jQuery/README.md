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

$("li").css({
    fontSize: "10px",
    border: "3px dashed purple",
    backgroundColor: "rgba(89, 45, 20, 0.5a)"
})
```

## 5. Text and HTML

### 5.1 .text()

`Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.`

It's the same as JavaScript's `.textContent`

```js
$("h1").text();
```

### 5.2 .html()

`Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element`

Similar to `.innerHTML`, in that it retrieves the HTML tags and the text content

## 6. Attr and Val

### 6.1 .attr()

`Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.`

We can retrieve an attribute or we can set an attribute. Same concept as getters and setters

```html
<img id="greatphoto" src="brush-seller.jpg" alt="brush seller">
```

To change the `alt` attribute, simply pass the name of the attribute and its new value to the `.attr()` method:

```js
$( "#greatphoto" ).attr( "alt", "Beijing Brush Seller" );
```

```js
$( "#greatphoto" ).attr({
  alt: "Beijing Brush Seller",
  title: "photo by Kelly Clark"
});
```

### 6.2 .val()

`Get the current value of the first element in the set of matched elements or set the value of every matched element.`

```js
// Get the value from the selected option in a dropdown
$( "select#foo option:checked" ).val();
 
// Get the value from a dropdown select directly
$( "select#foo" ).val();
 
// Get the value from a checked checkbox
$( "input[type=checkbox][name=bar]:checked" ).val();
 
// Get the value from a set of radio buttons
$( "input[type=radio][name=baz]:checked" ).val();
```

![img1](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/18-Intro-to-jQuery/18-Intro-to-jQuery/images-for-notes/img1.jpg?raw=true)

You can also pass something into this method.

![img2](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/18-Intro-to-jQuery/18-Intro-to-jQuery/images-for-notes/img2.jpg?raw=true)

...which then updates the value.

![img3](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/18-Intro-to-jQuery/18-Intro-to-jQuery/images-for-notes/img3.jpg?raw=true)

One practical use of this is when someone enters in the input, you would then use `val()` to clear the input

## 7. Manipulating Classes

The methods for manipulating classes are

- `addClass()`
- `removeClass()`
- `toggleClass()`


```js
$( "p" ).addClass( "myClass yourClass" );
```

![img4](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/18-Intro-to-jQuery/18-Intro-to-jQuery/images-for-notes/img4.jpg?raw=true)

![img5](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/18-Intro-to-jQuery/18-Intro-to-jQuery/images-for-notes/img5.jpg?raw=true)

![img6](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/18-Intro-to-jQuery/18-Intro-to-jQuery/images-for-notes/img6.jpg?raw=true)