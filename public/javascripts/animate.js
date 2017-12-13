$(function(){
  scrollFade();
  animateNums();
});

function scrollFade(){
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {
          $(this).fadeTo(500,1);
        }
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
}

function animateNums(){
  $('#bell').animateNumber({number: 2462}, 2500);
  $('#ulu').animateNumber({number: 342}, 1500);
  $('#san').animateNumber({number: 3523}, 2500);
  $('#tag').animateNumber({number: 564}, 1500);
}
