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

// Manipulating text
var p1 = document.getElementsByTagName("p")[0];
console.log(p1.textContent);
var ul = document.querySelector("ul");
ul.innerHTML = "<strong>Hello there!</strong>";
var test = document.querySelector("h1").textContent = "GENERAL KENOBI!";

// Manipulating attributes
var img1 = document.getElementsByTagName("img")[0];
img1.setAttribute("src", "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Foperationrainfall.com%2Fwp-content%2Fuploads%2F2014%2F03%2FMaster-Chief.jpg&f=1&nofb=1");

var a = document.querySelector("a");
a.setAttribute("href", "https://github.com/Brian-E-Nguyen/The-Web-Developer-Bootcamp/tree/15-DOM-manipulation/15-DOM-Manipulation")
a.textContent = "Link to this repository on my GitHub!"