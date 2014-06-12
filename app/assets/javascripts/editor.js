var BlogApp = BlogApp || {};

BlogApp.doneTypingInterval = 1200;

BlogApp.startCountdown = function(){
  $('.status').html('Saving...');
  clearTimeout(BlogApp.typingTimer);
  if ($('.title-input-field').val() !== "") {
      BlogApp.typingTimer = setTimeout(BlogApp.doneTyping, BlogApp.doneTypingInterval);
  }
};

BlogApp.doneTyping = function() {
  $('.status').html('Saved.');
  BlogApp.saveToForm();
};

BlogApp.saveToForm = function() {
  var content = $('#editor').html(); // Change to .text? - Ethan
  $("#post_body").val(content); // drop it into a hidden input field
  $("#new_post").submit();
};

BlogApp.getUpdates = function() {
  preventDefault();
  var content = $('#editor').html();
  $("#post_body").val(content); // drop it into a hidden input field
  $("#edit_post").submit();
};

$(document).ready(function(){

  BlogApp.editor = new MediumEditor('.editable', {
    anchorInputPlaceholder: 'is it just me or...',
    buttons: ['bold', 'italic', 'underline', 'header1', 'header2', 'quote'],
    diffLeft: 25,
    diffTop: 10,
    firstHeader: 'h1',
    secondHeader: 'h2'
  });

  $('.title-input-field, .editable').keyup(BlogApp.startCountdown);
  $("#edit_post").on('submit', BlogApp.getUpdates);
});

