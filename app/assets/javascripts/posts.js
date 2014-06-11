$(document).ready(function(){
  //hides post body on load
  $('.post').children('.post-body').hide();
  $('.panel').on('click', '.post', Post.bodyFade);
});


var Post = {
  bodyFade: function(){
    $(this).children('.post-body').fadeToggle('slow');
  }
};
