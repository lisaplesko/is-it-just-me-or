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

var insertCategory = function(){
<section id="scrollback" data-type="background" data-speed="10">
  <article><blockquote class='blockquote'>
      Title: <%= link_to post.title, post_path(post) %> - <%= post.view_counter %>
      <ul class='list-unstyled'>First Sentence: <%= post.body %></ul>
      <footer><%= link_to 'Post Author', posts_path(post.user) %></footer>
      </blockquote>
  </article>
  </section>

};

var insertBreak = function(){
<section id="scroll2" data-type="background" data-speed="10">
  <article>Simple Parallax Scroll</article>
  </section>
};

var formatTop8 = function(){
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



