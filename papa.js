document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });