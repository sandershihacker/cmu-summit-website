/* /js/summit.js */

$(document).ready(function() {
  // Navbar Toggle Section
  var navbar = $('#navbar');
  var mobileNav = $('#mobile-nav');
  $(document).scroll(function() {
    if($(this).scrollTop() > 100) {
      navbar.removeClass('navbar-scroll').addClass('navbar-fixed');
      mobileNav.addClass('mobile-nav-dark');
    }
    else {
      navbar.removeClass('navbar-fixed').addClass('navbar-scroll');
      mobileNav.removeClass('mobile-nav-dark');
    }
  });
  

  // Picture Loop Section 2014
  var dir2014 = "src/pictures/2014/";
  $.ajax({
    url: dir2014,
    success: function(data) {
      var imageTags = "";
      $(data).find("a").attr("href", function(i, val) {
        if(val.match(/\.(jpe?g|png|gif)$/)) {
          imageTags += "<div class='uk-width-medium-1-3 uk-width-large-1-4'><a href='" + dir2014 + val + "' data-uk-lightbox=\"{group:'group-14'}\"><img src='" + dir2014 + val + "'></a></div>";
        }
      });
      $("#photo-section-2014").html(imageTags);
    }
  });

  // Picture Loop Section 2015
  var dir2015 = "src/pictures/2015/";
  $.ajax({
    url: dir2015,
    success: function(data) {
      var imageTags = "";
      $(data).find("a").attr("href", function(i, val) {
        if(val.match(/\.(jpe?g|png|gif)$/)) {
          imageTags += "<div class='uk-width-medium-1-3 uk-width-large-1-4'><a href='" + dir2015 + val + "' data-uk-lightbox=\"{group:'group-15'}\"><img src='" + dir2015 + val + "'></a></div>";
        }
      });
      $("#photo-section-2015").html(imageTags);
    }
  });

  // Picture Loop Section 2016
  var dir2016 = "src/pictures/2016/";
  $.ajax({
    url: dir2016,
    success: function(data) {
      var imageTags = "";
      $(data).find("a").attr("href", function(i, val) {
        if(val.match(/\.(jpe?g|png|gif)$/)) {
          imageTags += "<div class='uk-width-medium-1-3 uk-width-large-1-4'><a href='" + dir2016 + val + "' data-uk-lightbox=\"{group:'group-16'}\"><img src='" + dir2016 + val + "'></a></div>";
        }
      });
      $("#photo-section-2016").html(imageTags);
    }
  });

});