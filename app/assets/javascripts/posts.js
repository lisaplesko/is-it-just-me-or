$(document).ready(function(){
  //hides post body on load
  $('.post').children('.body-text').hide();
  $('.panel').on('click', '.post', Post.bodyFade);
});


var Post = {
  bodyFade: function(){
    $(this).children('.body-text').fadeToggle('slow');
  }
};
