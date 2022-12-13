$(document).ready(function(){
    let sec01lSlide = $('.sec01_slider');
    let sliderCounter = $('.pagingInfo');
    let calc;
    var percentTime;
    var tick;
    var time = 1;
    var progressBarIndex = 0;

    sec01lSlide.slick({
       dots: true,
       infinite: true,
       arrows: true,
       prevArrow: $('.sec01_prev'), //이전 화살표
       nextArrow: $('.sec01_next'), //다음 화살표
       dots: false,
       autoplay: true,
       autoplaySpeed: 4800,
       speed: 800,
       swipe: false, //스와이프
       slidesToShow: 1,
       slidesToScroll: 1,
       fade: true,
    });

      function slickActive01() {
  
        if ($('.item_A1').hasClass('slick-active')) {
              $('.desc-A1').addClass('active');
          } else if ($('.item_A2').hasClass('slick-active')) {
              $('.desc-A2').addClass('active');
          } else if ($('.item_A3').hasClass('slick-active')) {
              $('.desc-A3').addClass('active');
        }
      }
      sec01lSlide.on({
          init: function (event, slick) {
  
          },
          beforeChange: function (event, slick, currentSlide, nextSlide) {
              $('.desc').removeClass('active');
          },
          afterChange: function (event, slick, currentSlide, nextSlide) {
              slickActive01();
          }
      });
       //ticking machine

  
    $('.progressBarContainer .progressBar').each(function(index) {
        var progress = "<div class='inProgress inProgress" + index + "'></div>";
        $(this).html(progress);
    });
  
    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        tick = setInterval(interval, 10);
    }
  
    function interval() {
        if (($('.sec01_slider div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
            progressBarIndex = $('.sec01_slider div[aria-hidden="false"]').data("slickIndex");
            startProgressbar();
        } else {
            percentTime += 1 / (time + 3.5);
            $('.inProgress' + progressBarIndex).css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $('.sec01_slider').slick('slickNext');
                progressBarIndex++;
                if (progressBarIndex > 1) {
                    progressBarIndex = 0;
                }
                startProgressbar();
            }
        }
    }
  
    function resetProgressbar() {
        $('.inProgress').css({
            width: 0 + '%'
        });
        clearInterval(tick);
    }
    startProgressbar();
    // End ticking machine
  
    $('.progressBarContainer div').click(function () {
        clearInterval(tick);
        var goToThisIndex = $(this).find("span").data("slickIndex");
        $('.sec01_slider').slick('slickGoTo', goToThisIndex, false);
        startProgressbar();
    });


    let updateSliderCounter = function(slick, currentSlide) {

      // 현재 페이지 index +1 을 해준 이유는 1부터 시작되게 하게끔
      currentSlideCount = slick.slickCurrentSlide() + 1;

      // 전체 슬라이드 페이지 갯수
      totalSlideCount = slick.slideCount;

      $('.pagingInfo').text("0" + currentSlideCount + '/' + 0 + totalSlideCount);
  };


  sec01lSlide.on('init', function(event, slick) {
      visualSlide.append(sliderCounter);
      updateSliderCounter(slick);
  });

  sec01lSlide.on('afterChange', function(event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
  });

//   sec02
$('.sec02_slider').slick({
   dots: false,
   infinite: true,
   arrows: true,
   prevArrow: $('.sec02_prev'), //이전 화살표
   nextArrow: $('.sec02_next'), //다음 화살표
   autoplay: true,
   autoplaySpeed: 3800,
   speed: 800,
   swipe: true, //스와이프
   slidesToShow: 4,
   slidesToScroll: 1,
});
});
