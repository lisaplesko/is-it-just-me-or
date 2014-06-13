var BlogApp = BlogApp || {};

$('.categories.index').ready(function(){

  $('#scroll-section').scroll(BlogApp.updateText);

  $.ajax({
    url: '/categories.json'
  })
  .done(BlogApp.calculateTop8);
});

BlogApp.insertCategorySection = function(posts, count){
  $('#scroll-section').append("<section class='scrollback' id='scroll" + count + "' data-type='background' data-speed='10'>");
  for(var i = 0; i < posts.length; i++){
    $('#scroll' + count).append(BlogApp.generatePostHTML(posts[i]));
    $('#scroll').append("<div class='.row'><div class='span12'><hr></div></div>");
  }
};

BlogApp.generatePostHTML = function(post){
  return HandlebarsTemplates['posts/show'](post);
};

BlogApp.insertScrollBreakSection = function(category){
  var scrollbreak_html = HandlebarsTemplates['scroller/break'](category);
  $('#scroll-section').append(scrollbreak_html);
};

BlogApp.appendTop = function(topCategories){
  for(var i = 0; i < topCategories.length; i++){
    BlogApp.insertScrollBreakSection(topCategories[i]);
    BlogApp.insertCategorySection(BlogApp.getTop4Posts(topCategories[i]), i);
  }
};

BlogApp.hasPosts = function(category){
  return category.posts.length > 0;
};

BlogApp.calculateTop8 = function(categories){
  categories.sort(function (a, b) {
    if (a.category_score < b.category_score){
        return 1;
    } else if (a.category_score > b.category_score){
      return -1;
    } else {
      return 0;
    }
  });
  var count = 5;
  while(!BlogApp.hasPosts(categories[count])){
    count--;
  }
  categories.length = count;
  BlogApp.appendTop(categories);
};

BlogApp.getTop4Posts = function(category){
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

BlogApp.displayOne = function(categories){
  BlogApp.insertScrollBreakSection(categories[0]);
  BlogApp.insertCategorySection(categories[0], 0);
};

BlogApp.updateText = function(event){
  // The text on the page should stay put in center
  // this means it must scroll down for each scroll down
  event.preventDefault();

  var calcTop = function(){
    var windowHeight = $(window).height(),  // returns height of browser viewport
        documentHeight = $(document).height(), // returns height of HTML document
        scrollTop = $(window).scrollTop(); // return the number of pixels scrolled vertically
    return windowHeight - scrollTop;
  };

  $('#scroll-section').css('top', calcTop);

};



