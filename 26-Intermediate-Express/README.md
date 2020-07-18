# Intermediate Express

## 1. Rendering HTML and Templates

- Use res.render() to render HTML (from an EJS file)
- Explain what EJS is and why we use it
- Pass variables to EJS templates

Embedded JavaScript (EJS) allows us to embed JS into HTML.

To encapsulate JS in HTML, use `<%= %>`. Example:

```html
<p> 5 + 5 = <%= 5 + 5 %>
```

To pass variables to EJS templates, use `res.render()`
```js
app.get('/fallinlovewith/:thing', function(req, res) {
    var thing = req.params.thing;
    res.render('love.ejs', {thingVar: thing});
});
```

```html
<h1>You fell in love with: <%= thingVar.toUpperCase() %></h1>

<p>P.S. this is the love.ejs file!</p>
```

## 2. EJS: Control Flow

- Show examples of control flow in EJS templates
- Write if statements and loops in an EJS file

There are two different types of tags

`<%= %>` means that the returned code will be added to the HTML

`<% %>` means that only logic will be performed. It will not be added to the HTML