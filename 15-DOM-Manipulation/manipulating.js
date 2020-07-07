// Generic example of manipulating style
var h1 = document.querySelector("h1");
h1.style.color = "Red";
h1.style.border = "5px solid black";

// Adding and removing a class to an tag
var p = document.querySelector("p");
p.classList; // EMPTY
p.classList.add(".big");
p.classList.remove(".big");
p.classList.toggle(".big");