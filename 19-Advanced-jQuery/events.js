// click()
$('h1').click(function() {
    alert('h1 clicked')
});

$('button').click(function() {
    $(this).css('background', 'pink')
});

// keypress()
$('input').keypress(function(event) {
    // If the user hits enter
    if(event.which === 13) {
        alert('you hit enter!');
    }
});