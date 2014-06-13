var BlogApp = BlogApp || {};

$(document).ready(function() {
  BlogApp.header = new Headroom(document.querySelector(".navbar-fixed-top"), {
    tolerance: 1,
    offset : 100,
    classes: {
      initial: "animated",
      pinned: "slideDown",
      unpinned: "slideUp"
    }
  });
  BlogApp.header.init();
  $('.collapse').collapse();
});
