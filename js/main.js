$( document ).ready(function() {



  if ($(window).width() < 430) {
      /*--------------------------MOBILE BEGINING------------------------------*/
      var mobile = true;
    /*header*/
    $('.navbar ul').removeClass('justify-content-around');
    $('.underlineBar').parent().hide();
    $('.navbar').css('opacity', '0');
    $('.navbar').css('position', 'relative');
    $('.navbar').css('bottom','30vh');
    $('.navbar ul').addClass('flex-column');
    $('.navbar ul li').addClass('d-flex justify-content-center');
    $('.mobileNavBurger').removeClass('d-none');
    $('.mobileNavBurger').addClass('d-flex justify-content-end');
    $('.navbarContainer').removeClass('justify-content-end');
    $('.navbarContainer').addClass('flex-column');
    $('.mobileNavBurger').click(function() {
      if(!$('.mobileNavBurger').hasClass('done')) {
        $('.mobileNavBurger').addClass('done');
        slideDownMenu();
      } else {
        $('.mobileNavBurger').removeClass('done');
        slideUpMenu();
      }
    });

    /*first page*/
    $('.titleSubContainer').removeClass('justify-content-center');
    $('.titleSubContainer').addClass('flex-column');

    /*second page*/
    $('.secondPageTopContainer').removeClass('justify-content-start');
    $('.secondPageTopContainer').addClass('flex-column');
    $('.secondPageBottomContainer ul').removeClass('justify-content-between');
    $('.secondPageBottomContainer ul').addClass('flex-column');
    $('.secondPageBottomContainer ul li').addClass('flex-column');

    /*third page*/
    $('.thirdPageBottom').removeClass('justify-content-center');
    $('.thirdPageBottom').addClass('flex-column');
    $('.projectContainer').removeClass('justify-content-start');
    $('.projectContainer').addClass('flex-column');


    //Background project image size
    var backgroundSizeBefore = '80%';
    var backgroundSizeAfter = '100%';

    //contact id to scroll to
    var contactTag = '.fourthPage';

    //first page animations
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
      if(scrollPercent > 4) {
        if(!$('.firstPage').hasClass('done')) {
          $('.firstPage').addClass('done');
          firstPageFadeOut();
        }
      } else if(scrollPercent < 4) {
        if($('.firstPage').hasClass('done')) {
          $('.firstPage').removeClass('done');
          firstPageFadeIn();
          $('#homeMenu').parent().find( '.underlineBar' ).addClass( "clicked" );
          $( "a" ).not('#homeMenu').parent().find( '.underlineBar' ).removeClass( "clicked" );
          $( "a" ).not('#homeMenu').parent().find( '.underlineBar' ).removeClass( "active" );
          $( "a" ).not('#homeMenu').parent().find( '.underlineBar' ).removeClass( "fullWidth" );
        }
      }
    });

    //second page animations
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
        if(scrollPercent > 48) {
          if(!$('.secondPage').hasClass('done')) {
            $('.secondPage').addClass('done');
            secondPageFadeOut();
          }
        } else if(scrollPercent > 11 && scrollPercent < 48) {
          if($('.secondPage').hasClass('done')) {
            $('.secondPage').removeClass('done');
            secondPageFadeIn();
            $('#aboutMenu').parent().find( '.underlineBar' ).addClass( "clicked" );
            $( "a" ).not('#aboutMenu').parent().find( '.underlineBar' ).removeClass( "clicked" );
            $( "a" ).not('#aboutMenu').parent().find( '.underlineBar' ).removeClass( "active" );
            $( "a" ).not('#aboutMenu').parent().find( '.underlineBar' ).removeClass( "fullWidth" );
          }
        } else if(scrollPercent < 11) {
          if(!$('.secondPage').hasClass('done')) {
            $('.secondPage').addClass('done');
            secondPageFadeOut();
          }
        }
      });

      //third page animations
      $(window).scroll(function (event) {
          var scroll = $(window).scrollTop();
          var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
          if(scrollPercent > 90) {
            if(!$('.thirdPage').hasClass('done')) {
              $('.thirdPage').addClass('done');
              thirdPageFadeOut();
            }
          } else if(scrollPercent > 48 && scrollPercent < 90) {
            if($('.thirdPage').hasClass('done')) {
              $('.thirdPage').removeClass('done');
              thirdPageFadeIn();
              $('#workMenu').parent().find( '.underlineBar' ).addClass( "clicked" );
              $( "a" ).not('#workMenu').parent().find( '.underlineBar' ).removeClass( "clicked" );
              $( "a" ).not('#workMenu').parent().find( '.underlineBar' ).removeClass( "active" );
              $( "a" ).not('#workMenu').parent().find( '.underlineBar' ).removeClass( "fullWidth" );
            }
          } else if(scrollPercent < 40) {
            if(!$('.thirdPage').hasClass('done')) {
              $('.thirdPage').addClass('done');
              thirdPageFadeOut();
            }
          }
        });

        //fourth page animations
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
            if(scrollPercent > 90) {
              if(!$('.fourthPage').hasClass('done')) {
                $('.fourthPage').addClass('done');
                fourthPageFadeIn();
                $('#contactMenu').parent().find( '.underlineBar' ).addClass( "clicked" );
                $( "a" ).not('#contactMenu').parent().find( '.underlineBar' ).removeClass( "clicked" );
                $( "a" ).not('#contactMenu').parent().find( '.underlineBar' ).removeClass( "active" );
                $( "a" ).not('#contactMenu').parent().find( '.underlineBar' ).removeClass( "fullWidth" );
              }
            }  else if(scrollPercent < 90) {
              if($('.fourthPage').hasClass('done')) {
                $('.fourthPage').removeClass('done');
                fourthPageFadeOut();
              }
            }
          });

    /*--------------------------MOBILE END------------------------------*/

  } else {
    /*--------------------------DESKTOP, LAPTOP, TABLET BEGINING------------------------------*/
    var mobile = false;
    //fade navbar on scroll
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var currentScrollTop = $(this).scrollTop();
        if (currentScrollTop > lastScrollTop) {
            $(".navWrap").fadeOut(500, () => {
            });
        } else {
            $(".navWrap").fadeIn(500);
        }
        lastScrollTop = currentScrollTop;
    });

    //Background project image size
    var backgroundSizeBefore = '150%';
    var backgroundSizeAfter = '180%';

    //contact id to scroll to
    var contactTag = '#contact';

    //first page animations
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
      if(scrollPercent > 4) {
        if(!$('.firstPage').hasClass('done')) {
          $('.firstPage').addClass('done');
          firstPageFadeOut();
        }
      } else if(scrollPercent < 4) {
        if($('.firstPage').hasClass('done')) {
          $('.firstPage').removeClass('done');
          firstPageFadeIn();
          $('#homeMenu').parent().find( '.underlineBar' ).addClass( "clicked" );
          $( "a" ).not('#homeMenu').parent().find( '.underlineBar' ).removeClass( "clicked" );
          $( "a" ).not('#homeMenu').parent().find( '.underlineBar' ).removeClass( "active" );
          $( "a" ).not('#homeMenu').parent().find( '.underlineBar' ).removeClass( "fullWidth" );
        }
      }
    });

    //second page animations
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
        if(scrollPercent > 48) {
          if(!$('.secondPage').hasClass('done')) {
            $('.secondPage').addClass('done');
            secondPageFadeOut();
          }
        } else if(scrollPercent > 18 && scrollPercent < 48) {
          if($('.secondPage').hasClass('done')) {
            $('.secondPage').removeClass('done');
            secondPageFadeIn();
            $('#aboutMenu').parent().find( '.underlineBar' ).addClass( "clicked" );
            $( "a" ).not('#aboutMenu').parent().find( '.underlineBar' ).removeClass( "clicked" );
            $( "a" ).not('#aboutMenu').parent().find( '.underlineBar' ).removeClass( "active" );
            $( "a" ).not('#aboutMenu').parent().find( '.underlineBar' ).removeClass( "fullWidth" );
          }
        } else if(scrollPercent < 18) {
          if(!$('.secondPage').hasClass('done')) {
            $('.secondPage').addClass('done');
            secondPageFadeOut();
          }
        }
      });

      //third page animations
      $(window).scroll(function (event) {
          var scroll = $(window).scrollTop();
          var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
          if(scrollPercent > 78) {
            if(!$('.thirdPage').hasClass('done')) {
              $('.thirdPage').addClass('done');
              thirdPageFadeOut();
            }
          } else if(scrollPercent > 50 && scrollPercent < 78) {
            if($('.thirdPage').hasClass('done')) {
              $('.thirdPage').removeClass('done');
              thirdPageFadeIn();
              $('#workMenu').parent().find( '.underlineBar' ).addClass( "clicked" );
              $( "a" ).not('#workMenu').parent().find( '.underlineBar' ).removeClass( "clicked" );
              $( "a" ).not('#workMenu').parent().find( '.underlineBar' ).removeClass( "active" );
              $( "a" ).not('#workMenu').parent().find( '.underlineBar' ).removeClass( "fullWidth" );
            }
          } else if(scrollPercent < 78) {
            if(!$('.thirdPage').hasClass('done')) {
              $('.thirdPage').addClass('done');
              thirdPageFadeOut();
            }
          }
        });

        //fourth page animations
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
            if(scrollPercent > 78) {
              if(!$('.fourthPage').hasClass('done')) {
                $('.fourthPage').addClass('done');
                fourthPageFadeIn();
                $('#contactMenu').parent().find( '.underlineBar' ).addClass( "clicked" );
                $( "a" ).not('#contactMenu').parent().find( '.underlineBar' ).removeClass( "clicked" );
                $( "a" ).not('#contactMenu').parent().find( '.underlineBar' ).removeClass( "active" );
                $( "a" ).not('#contactMenu').parent().find( '.underlineBar' ).removeClass( "fullWidth" );
              }
            }  else if(scrollPercent < 78) {
              if($('.fourthPage').hasClass('done')) {
                $('.fourthPage').removeClass('done');
                fourthPageFadeOut();
              }
            }
          });

    /*--------------------------DESKTOP, LAPTOP, TABLET END------------------------------*/
  }



  //change nav "li a" styling on "hover/click"

  $('.active').addClass('fullWidth');

  $( "a" ).click(
    function() {
      $(this).parent().find( '.underlineBar' ).addClass( "clicked" );
      $( "a" ).not(this).parent().find( '.underlineBar' ).removeClass( "clicked" );
      $( "a" ).not(this).parent().find( '.underlineBar' ).removeClass( "active" );
      $( "a" ).not(this).parent().find( '.underlineBar' ).removeClass( "fullWidth" );
    }
  );

  $( "a" ).hover(
    function() {
      $(this).parent().find( '.underlineBar' ).addClass( "fullWidth" );
    }, function() {
      $(this).parent().find( '.underlineBar').removeClass( "fullWidth" );
    }
  );

  /*slide mobile menu*/
  function slideDownMenu() {
    $('.navbar').animate({
      "opacity": '1',
      "bottom": '0'
    }, 1500);
  }

  function slideUpMenu() {
    $('.navbar').animate({
      "opacity": '0',
      "bottom": '30vh'
    }, 1500);
  }

  /*----------------------------Slide animations begining----------------------------------*/

  $(window).scroll(function (event) {
    var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
    console.log('scroll percent: ' + scrollPercent);
  });

  //initAnimations
  firstPageFadeIn();

  //first page animations

  function firstPageFadeIn() {
    $("#davidTextWraper").animate({
      "opacity": '1',
      "margin-right": '0'
    }, 1500);
    $("#imageProfileWraper").animate({
      "opacity": '1',
      "margin-top": '0'
    }, 1500);
    $("#developerTextWraper").animate({
      "opacity": '1',
      "margin-left": '0'
    }, 1500);
  }

  function firstPageFadeOut() {
    $("#davidTextWraper").animate({
      "opacity": '0',
      "margin-right": '5vw'
    }, 1500);
    $("#imageProfileWraper").animate({
      "opacity": '0',
      "margin-top": '5vw'
    }, 1500);
    $("#developerTextWraper").animate({
      "opacity": '0',
      "margin-left": '5vw'
    }, 1500);
  }



  //second page animations

  $('.secondPage').addClass('done');

  function secondPageFadeIn() {
    $("#secondPagetopLeftWrapper").animate({
      "opacity": '1',
      "right": '0'
    }, 1500);
    $("#secondPagetopRightWrapper").animate({
      "opacity": '1',
      "left": '0'
    }, 1500);
    $("#secondPageBottomWrapper").animate({
      "opacity": '1',
      "top": '0'
    }, 1500);
  }

  function secondPageFadeOut() {
    $("#secondPagetopLeftWrapper").animate({
      "opacity": '0',
      "right": '5vw'
    }, 1500);
    $("#secondPagetopRightWrapper").animate({
      "opacity": '0',
      "left": '5vw'
    }, 1500);
    $("#secondPageBottomWrapper").animate({
      "opacity": '0',
      "top": '5vw'
    }, 1500);
  }

    //third page animations

    $('.thirdPage').addClass('done');

    function thirdPageFadeIn() {
      $("#thirdPageTopWrapper").animate({
        "opacity": '1',
        "right": '0'
      }, 1500);
      $("#leftProjectsWrapper").animate({
        "opacity": '1',
        "right": '0'
      }, 1500);
      $("#rightProjectsWrapper").animate({
        "opacity": '1',
        "left": '0'
      }, 1500);
    }

    function thirdPageFadeOut() {
      $("#thirdPageTopWrapper").animate({
        "opacity": '0',
        "right": '5vw'
      }, 1500);
      $("#leftProjectsWrapper").animate({
        "opacity": '0',
        "right": '5vw'
      }, 1500);
      $("#rightProjectsWrapper").animate({
        "opacity": '0',
        "left": '5vw'
      }, 1500);
    }

      //fourth page animations


      function fourthPageFadeIn() {
        $("#fourthPageTopWrapper").animate({
          "opacity": '1',
          "right": '0'
        }, 1500);
        $("#fourthPageBottomWrapper").animate({
          "opacity": '1',
          "left": '0'
        }, 1500);
      }

      function fourthPageFadeOut() {
        $("#fourthPageTopWrapper").animate({
          "opacity": '0',
          "right": '5vw'
        }, 1500);
        $("#fourthPageBottomWrapper").animate({
          "opacity": '0',
          "left": '10vw'
        }, 1500);
      }

    /*----------------------------Slide animations end----------------------------------*/

  //go to upwork

  $('.upworkButton').click(function() {
    window.location.href = "https://www.upwork.com/fl/davidmarcosmendiluce2";
  });

  //changing project images for hvoered ones

  $('.angular').hover(
    function() {
      $(this).css("background-image", "url('img/angular13Hover.png')");
      $(this).animate({
        'background-size': backgroundSizeAfter
      }, 500);
    }, function() {
      $(this).css("background-image", "url('img/angular13Logo.png')");
      $(this).animate({
        'background-size': backgroundSizeBefore
      }, 500);
    }
  );

  $('.angularjs').hover(
    function() {
      $(this).css("background-image", "url('img/angularJSHover.png')");
      $(this).animate({
        'background-size': backgroundSizeAfter
      }, 500);
    }, function() {
      $(this).css("background-image", "url('img/angularJSLogo.png')");
      $(this).animate({
        'background-size': backgroundSizeBefore
      }, 500);
    }
  );

  $('.wordpress').hover(
    function() {
      $(this).css("background-image", "url('img/wordpressHover.png')");
      $(this).animate({
        'background-size': backgroundSizeAfter
      }, 500);
    }, function() {
      $(this).css("background-image", "url('img/wordpressLogoCrop.png')");
      $(this).animate({
        'background-size': backgroundSizeBefore
      }, 500);
    }
  );

  $('.php').hover(
    function() {
      $(this).css("background-image", "url('img/phpHover.png')");
      $(this).animate({
        'background-size': backgroundSizeAfter
      }, 500);
    }, function() {
      $(this).css("background-image", "url('img/phpLogoCrop.png')");
      $(this).animate({
        'background-size': backgroundSizeBefore
      }, 500);
    }
  );

  //scroll to the diferent pages

  $('#homeMenu').click(function() {
    var tag = $('#home');
    $('html,body').animate({scrollTop: tag.offset().top}, 500);
    if(mobile === true) {
      if(!$('.mobileNavBurger').hasClass('done')) {
        $('.mobileNavBurger').addClass('done');
        slideDownMenu();
      } else {
        $('.mobileNavBurger').removeClass('done');
        slideUpMenu();
      }
    }
  });

  $('#workMenu').click(function() {
    var tag = $('#work');
    $('html,body').animate({scrollTop: tag.offset().top}, 500);
    if(mobile === true) {
      if(!$('.mobileNavBurger').hasClass('done')) {
        $('.mobileNavBurger').addClass('done');
        slideDownMenu();
      } else {
        $('.mobileNavBurger').removeClass('done');
        slideUpMenu();
      }
    }
  });

  $('#aboutMenu').click(function() {
    var tag = $('#about');
    $('html,body').animate({scrollTop: tag.offset().top}, 500);
    if(mobile === true) {
      if(!$('.mobileNavBurger').hasClass('done')) {
        $('.mobileNavBurger').addClass('done');
        slideDownMenu();
      } else {
        $('.mobileNavBurger').removeClass('done');
        slideUpMenu();
      }
    }
  });

  $('#contactMenu').click(function() {
    var tag = $(contactTag);
    $('html,body').animate({scrollTop: tag.offset().top}, 500);
    if(mobile === true) {
      if(!$('.mobileNavBurger').hasClass('done')) {
        $('.mobileNavBurger').addClass('done');
        slideDownMenu();
      } else {
        $('.mobileNavBurger').removeClass('done');
        slideUpMenu();
      }
    }
  });




});
