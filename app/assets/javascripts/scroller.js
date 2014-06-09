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

var appendTop8 = function(categories){



<% count = 2 %>
<% @top_8_categories.each do |cat| %>
  <!-- Make a new div row for every two categories -->
  <% if count % 2 == 0 %>
    <div class='.row'>
  <% end %>

  <div class='col-md-6'>
  <div class='panel panel-default'>
  <div class='panel-heading'>
    <h3 class='panel-title'><%= cat.name %></h3>
  </div>
    <% post_counter = 0 %>
    <% cat.posts.each do |post| %>



    <% end %>
  </div>
  </div>
  <% if count % 2 == 0 %>
  </div>
  <% end %>
  <% count += 1 %>
<% end %>

};

$.ajax({
  url: '/categories/top8'
})
  .done(appendTop8);



