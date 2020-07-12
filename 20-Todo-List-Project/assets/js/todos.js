// Check off specific to-do's by clicking
// When an li is clicked within the ul, run this code
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Click on X to delete to-do. This will cause event bubbling
$("ul").on("click", "span", function(event) {
    // Gives us the parent of the current element (li)
    $(this).parent().fadeOut(500, function() {
        // Refers to the li, not the span
        $(this).remove();
    });
    // Prevents event bubbling
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        // Grab todo text
        var todoText = $(this).val();
        // Clears input
        $(this).val("");
        // Create a new li and add to ul
        $("ul").append(`<li><span>X</span> ${todoText}</li>`)
    }
});