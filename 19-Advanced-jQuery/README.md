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

