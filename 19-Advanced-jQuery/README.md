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