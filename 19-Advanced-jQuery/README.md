# Advanced jQuery

## 1. jQuery Events

The most common ones are

- `click()`
- `keypress()`
- `on()`

### 1.1 click()

jQuery's `click()` method is a quick and easy way to add a click listener to element(s)

```js
//prints when item with id 'submit' is clicked
$('#submit').click(function(){
  console.log("Another click");
});

//alerts when ANY button is clicked
$('button').click(function(){
  alert("Someone clicked a button");
});

$('button').click(function() {
    $(this).css('background', 'pink')
});
```
![img](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/19-Advanced-jQuery/19-Advanced-jQuery/images-for-notes/img1.jpg?raw=true)

### 1.2 keyPress()

jQuery's `keypress()` method is a quick and easy way to add a keypress listener to element(s)

```js
//listen for any keypress in any text input
$('input[type="text"]').keypress(function(){
  alert("text input keypress!");
});
```

![img2](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/19-Advanced-jQuery/19-Advanced-jQuery/images-for-notes/img2.jpg?raw=true)

### 1.3 on()

jQuery's `on()` works similarly to ``addEventListener()`.​ It lets you specify the type of event to listen for. This is by far the most used jQuery method

```js
//prints when item with id 'submit' is clicked
$('#submit').on('click', function(){
  console.log("Another click");
});

//alerts when ANY button is clicked
$('button').on('click', function(){
  console.log("button clicked!");
});
```

![img3](https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/blob/19-Advanced-jQuery/19-Advanced-jQuery/images-for-notes/img3.jpg?raw=true)

### 1.4 Why use on()?

In most cases, `click()` and `on('click')` will both get the job done.  HOWEVER, there is one key difference

- `click()` only adds listeners for existing elements
- `on()` will add listeners for all potential future elements
- This will all make sense in the next video!