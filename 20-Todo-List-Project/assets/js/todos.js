// Check off specific to-do's by clicking
$("li").click(function() {
    $(this).toggleClass("completed");
});

// Click on X to delete to-do. This will cause event bubbling
$("span").click(function(event) {
    // Gives us the parent of the current element (li)
    $(this).parent().fadeOut(500, function() {
        // Refers to the li, not the span
        $(this).remove();
    });
    // Prevents event bubbling
    event.stopPropagation();
});