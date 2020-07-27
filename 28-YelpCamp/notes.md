EJS has recently been updated to v3.0.1 and now uses the following syntax:

<%- include("partials/header") %>
<%- include("partials/footer") %>


# July 7th, 2020 - Update
Your mongoose.connect() code should look like this:

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));
```