/* /js/summit.js */

var main = function() {
  var navbar = $('#navbar');
  $(document).scroll(function() {
    if($(this).scrollTop() > 100) {
      navbar.removeClass('navbar-scroll').addClass('navbar-fixed')
    }
    else {
      navbar.removeClass('navbar-fixed').addClass('navbar-scroll')
    }
  })
}

$(document).ready(main);