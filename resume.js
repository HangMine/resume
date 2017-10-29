
$(
  function well(){
      var well = $(".wellcome");
      var down = $(".glyphicon-chevron-down");
      well.fadeIn('slow').animate({top: ( $(window).height() - well.outerHeight())/2 }, "slow");
      down.fadeIn(2000);
  }
);

// $(".glyphicon-chevron-down").click(function() {
//   $("body").animate({scrollTop:($(".section2").offset().top)}, "speed");
// });
