
$(
  function(){
      var well = $(".wellcome");
      var down = $(".glyphicon-chevron-down");
      well.fadeIn('slow').animate({top: ( $(window).height() - well.outerHeight())/2 }, "slow");
      down.fadeIn(2000);
        $('#pagepiling').pagepiling({
          menu: '#menu',
          anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
          sectionsColor: ['rgb(54, 219, 165)', '#51bec4', '#2C3E50', 'rgb(183, 232, 78)', 'rgb(44, 204, 180)'],
          afterRender: function() {
            $('#callbacksDiv').append('<p>afterRender</p>');
          },
          afterLoad: function(anchorLink, index) {
            $('#callbacksDiv').append('<p>afterLoad - anchorLink:' + anchorLink + " index:" + index + '</p>');
          },
          navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['首页', '介绍', '技能', '经历', '联系']
          },
          loopTop: true,
          loopBottom: true
        });

  }

);

// $(".glyphicon-chevron-down").click(function() {
//   $("body").animate({scrollTop:($(".section2").offset().top)}, "speed");
// });
