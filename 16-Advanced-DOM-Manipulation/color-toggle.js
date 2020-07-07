var isWhite = true;
document.querySelector("button").addEventListener("click", function() {
    if(isWhite){
        document.body.style.background = "Purple"
    }
    else {
        document.body.style.background = "White"
    }
    isWhite = !isWhite;
})