$(document).ready(function(){

 var $window = $(window);

  $('section[data-type="background"]').each(function(){
    var $bgobj = $(this); // assigning the object
    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
      // Put together our final background position
      var coords = '50% '+ yPos + 'px';
      // Move the background
      $bgobj.css({ backgroundPosition: coords });
    });
  });
$.ajax({
  url: '/categories/top8'
})
  .done(appendTop8);
});

var insertCategorySection = function(category, count){
  $('#scroll-section').append("<section class='scrollback' id='scroll" + count + "' data-type='background' data-speed='10'>");
  for(var i = 0; i < category.posts.length; i++){
    $('#scroll' + count).append(generatePostHTML(category.posts[i]));
  }
};

var generateNewSection = function(count){
  var newSectionHTML = "<section class='scrollback' id='scroll" + count + "' data-type='background' data-speed='10'>";
  return newSectionHTML;
};

var generatePostHTML = function(post){
  var postSource = $('#post-template').html();
  var template = Handlebars.compile(postSource);
  var postHTML = template(post);
  return postHTML;
};

var insertScrollBreakSection = function(category){
  var scrollbreak_source = $('#scrollbreak-template').html();
  var template = Handlebars.compile(scrollbreak_source);
  var scrollbreak_html = template(category);
  $('#scroll-section').append(scrollbreak_html);
};

var appendTop8 = function(categories){
  for(i = 0; i < categories.length; i++){
    insertScrollBreakSection(categories[i]);
    insertCategorySection(categories[i], i);
  }
};



