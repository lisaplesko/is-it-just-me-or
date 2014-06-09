$(document).ready(function(){
//

var editor = new MediumEditor('.editable', {
    anchorInputPlaceholder: 'is it just me or...',
    buttons: ['bold', 'italic', 'underline', 'header1', 'header2', 'quote'],
    diffLeft: 25,
    diffTop: 10,
    firstHeader: 'h1',
    secondHeader: 'h2'
  });
    // delay: 1000,
    // targetBlank: true



// var timerId = setTimeout(func|code, delay)

// $("#my-form").bind('keyup paste', function(e) {
//     clearTimeout($(this).data('timeout'));
//     $(this).data('timeout', setTimeout(function(){
//         // your code
//     }, 200));
// });


// $('.editable').on('input', function() {
//   // Do some work
// });


//setup before functions
var typingTimer;                //timer identifier
var doneTypingInterval = 1500;  //time in ms, 5 second for example

//on keyup, start the countdown
$('.title-input-field, .editable').keyup(function(){
    $('.status').html('Saving...');
    clearTimeout(typingTimer);
    if ($('.title-input-field').val() !== "") {
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
});

//user is "finished typing," do something
function doneTyping () {
    $('.status').html('Saved.');
}




// var time_remaining = setTimeout( (function() {
//     $('.new-post-form').submit();}) , 3000);

// var time_remaining = function() {

//   $('.new-post-form').submit(); , 3000);

// };



// $('.editable, .title-input-field').on('keyup', function() {
//   // as soon as key lifts, restart timeout
//   time_remaining();

//   // clearTimeout(time_remaining);
//   save_to_form();

//   $('.status').html('Saving...');

//   // Trigger the submit button when the timer runs out -> move from new TO EDIT (update controller)


// });

// // once it switches to edit page, use edit identifier...



// function save_to_form() {
//   var content = $('#editor').html();
//   $("input[type=hidden").val(content); // drop it into a hidden input field
//   // Ajax call?
// }






});

