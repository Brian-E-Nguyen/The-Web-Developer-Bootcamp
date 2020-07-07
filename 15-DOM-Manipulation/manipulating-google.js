var logo = document.querySelector("#hplogo");
logo.setAttribute("srcset", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F6a%2FPomeranian_600.jpg&f=1&nofb=1");

// Dimensions
logo.style.width = "200px";
logo.style.height = "100px";

logo.style.border = "2px solid purple"

// Get all anchor tags
var links = document.getElementsByTagName("a");

// Manipulating styles
for (let i = 0; i < links.length; i++) {
    console.log(links[i].textContent);
    links[i].style.background = "Pink"
    links[i].style.border = "1px dashed purple";
    links[i].style.color = "Orange";
}

// Manipulating links
for (let i = 0; i < links.length; i++) {
    links[i].setAttribute("href", "https://www.duckduckgo.com");
}