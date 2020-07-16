// Create a new directory "MyShop"
// Add a file named "listProducts.js"
// Install "faker" package
// Read the Faker docs and figure out how it works
// Use Faker to print out 10 random product names and prices
// Run your file with node and make sure it works!

var faker = require('faker');
var productName;
var price;
for (let i = 0; i < 10; i++) {
    productName = faker.commerce.productName();
    price = faker.commerce.price();
    console.log(`${productName} - \$${price}`);
}