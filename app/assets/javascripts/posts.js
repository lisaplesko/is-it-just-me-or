$(document).ready(function(){
  $('.post').children('.post-body').hide();
  $('.panel').on('click', '.post', function(){
    $(this).children('.post-body').fadeToggle('slow');
  });
});
