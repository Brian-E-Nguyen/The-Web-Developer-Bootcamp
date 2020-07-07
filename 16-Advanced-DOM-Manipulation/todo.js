var lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function(){
        this.style.color = "Green";
    })
    lis[i].addEventListener("mouseout", function(){
        this.style.color = "Black";
    })
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done")
    })
}