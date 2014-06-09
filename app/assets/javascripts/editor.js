$(document).ready(function(){
//

// REFACTOR TO REMOVE GLOBAL VARIABLES

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
      save_to_form();
  }

  function save_to_form() {
    var content = $('#editor').html();
    $("#post_body").val(content); // drop it into a hidden input field
    $("#new_post").submit();
  }


  // Get updates
  $("#edit_post").on('submit', function() {
    preventDefault();
    alert('Testing!');
    var content = $('#editor').html();
    $("#post_body").val(content); // drop it into a hidden input field
    $("#edit_post").submit();
  });



// // once it switches to edit page, use edit identifier...


});

