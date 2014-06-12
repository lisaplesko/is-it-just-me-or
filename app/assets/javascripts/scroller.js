Handlebars.registerHelper('link', function(text, url) {
  text = Handlebars.Utils.escapeExpression(text);
  url  = Handlebars.Utils.escapeExpression(url);

  var result = '<a href="' + url + '">' + text + '</a>';

  return new Handlebars.SafeString(result);
});

$(document).ready(function(){

  $('#scroll-section').scroll(updateText);

  $.ajax({
    url: '/categories.json'
  })
  .done(calculateTop8);
});

var insertCategorySection = function(posts, count){
  $('#scroll-section').append("<section class='scrollback' id='scroll" + count + "' data-type='background' data-speed='10'>");
  for(var i = 0; i < posts.length; i++){
    $('#scroll' + count).append(generatePostHTML(posts[i]));
    $('#scroll').append("<div class='.row'><div class='span12'><hr></div></div>");
  }
};

var generatePostHTML = function(post){
  return HandlebarsTemplates['posts/show'](post);
};

var insertScrollBreakSection = function(category){
  var scrollbreak_html = HandlebarsTemplates['scroller/break'](category);
  $('#scroll-section').append(scrollbreak_html);
};

var appendTop8 = function(topCategories){
  for(var i = 0; i < topCategories.length; i++){
    insertScrollBreakSection(topCategories[i]);
    insertCategorySection(getTop4Posts(topCategories[i]), i);
  }
};

var calculateTop8 = function(categories){
  categories.sort(function (a, b) {
    if (a.category_score < b.category_score){
      return 1;
    } else if (a.category_score > b.category_score){
      return -1;
    } else {
      return 0;
    }
  });
  categories.length = 8;
  appendTop8(categories);
};

var getTop4Posts = function(category){
  var top4Posts = category.posts.sort(function (a, b) {
    if (a.post_score < b.post_score){
      return 1;
    } else if (a.post_score > b.post_score){
      return -1;
    } else {
      return 0;
    }
  });
  if(top4Posts.length > 4){
    top4Posts.length = 4;
  }
  return top4Posts;
};

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



