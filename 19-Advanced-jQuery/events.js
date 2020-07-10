// // click()
// $('h1').click(function() {
//     alert('h1 clicked')
// });

// $('button').click(function() {
//     $(this).css('background', 'pink')
// });

// // keypress()
// $('input').keypress(function(event) {
//     // If the user hits enter
//     if(event.which === 13) {
//         alert('you hit enter!');
//     }
// });

// on()
$('h1').on('click', function() {
    $(this).css('color', 'purple')
});

$('input').on('keypress', function() {
    console.log('keypressed!')
})

$('button').on('mouseenter', function() {
    $(this).css('font-weight', 'bold')
});

$('button').on('mouseleave', function() {
    $(this).css('font-weight', 'normal')
});