var BlogApp = BlogApp || {}

$(document).ready(function() {
  BlogApp.header = new Headroom(document.querySelector(".navbar-fixed-top"), {
    tolerance: 10,
    offset : 200,
    classes: {
      initial: "animated",
      pinned: "slideDown",
      unpinned: "slideUp"
    }
  });
  BlogApp.header.init();
});
