$(document).ready(function(){
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
});

var insertCategory = function(category){
  var category_source = $('#category-template').html();
  var template = Handlebars.compile(category_source);
  var category_html = template(category);
  return category_html;
};
var insertScrollBreak = function(category){
  var scrollbreak_source = $('#scrollbreak-template').html();
  var template = Handlebars.compile(scrollbreak_source);
  var scrollbreak_html = template(category);
  return scrollbreak_html;
};

var appendTop8 = function(categories){
  var count = 2;

  for(i = 0; i < categories.length; i++){
    insertScrollBreak(categories[i]);
    insertCategory(categories[i]);

  }
};

$.ajax({
  url: '/categories/top8'
})
  .done(appendTop8);



