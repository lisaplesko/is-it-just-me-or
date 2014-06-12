var BlogApp = BlogApp || {};

BlogApp.bodyFade = function(){
  $(this).children('.body-text').fadeToggle('slow');
};

$(document).ready(function(){
  //hides post body on load
  $('.post').children('.body-text').hide();
  $('.panel').on('click', '.post', BlogApp.bodyFade);
});
