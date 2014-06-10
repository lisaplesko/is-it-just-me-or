$(document).ready(function(){

  $('#scroll-section').scroll(updateText);

  // // Code from internet for parallax -- doesnt seem to work
  // var $window = $(window);

  // $('section[data-type="background"]').each(function(){
  //   var $bgobj = $(this); // assigning the object
  //   $(window).scroll(function() {
  //     var yPos = -($window.scrollTop() / $bgobj.data('speed'));
  //     // Put together our final background position
  //     var coords = '50% '+ yPos + 'px';
  //     // Move the background
  //     $bgobj.css({ backgroundPosition: coords });
  //   });
  // });

// Working
$.ajax({
  url: '/categories/top8'
})
  .done(appendTop8);
});

// Experimental
// $.ajax({
//   url: '/categories/top8'
// })
//   .done(displayOne);
// });

var displayOne = function(categories){
  insertScrollBreakSection(categories[0]);
  insertCategorySection(categories[0], 0);
};

var updateText = function(event){
  // The text on the page should stay put in center
  // this means it must scroll down for each scroll down
  event.preventDefault();

  var calcTop = function(){
    var windowHeight = $(window).height();   // returns height of browser viewport
    var documentHeight = $(document).height(); // returns height of HTML document
    var scrollTop = $(window).scrollTop(); // return the number of pixels scrolled vertically
    return windowHeight - scrollTop;
  };

  $('#scroll-section').css('top', calcTop);

};

var insertCategorySection = function(category, count){
  $('#scroll-section').append("<section class='scrollback' id='scroll" + count + "' data-type='background' data-speed='10'>");
  for(var i = 0; i < category.posts.length; i++){
    $('#scroll' + count).append(generatePostHTML(category.posts[i]));
    $('#scroll').append("<div class='.row'><div class='span12'><hr></div></div>");
  }
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



