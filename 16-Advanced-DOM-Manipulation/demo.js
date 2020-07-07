// Adding an event to an <h1> tag
var h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
    // alert("h1 was clicked!");
    h1.style.background = "Blue"
})

// Adding an event to <ul> tags
document.querySelector("ul").addEventListener("click", function(){
    console.log("YOU CLICKED THE UL!")
});

// Adding an event to <li> tags
var lis = document.querySelectorAll("li");
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function () {
        // "this" refers to the item that was clicked on
        this.style.color = "Pink"
    })
}