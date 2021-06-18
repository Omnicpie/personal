$(function(){
 var shrinkHeader = 10;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('header').addClass('shrink');
           $('.secondhead').addClass('shrunk').removeClass('shrink');
        }
        else {
            $('header').removeClass('shrink');
            $('.secondhead').removeClass('shrunk');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});