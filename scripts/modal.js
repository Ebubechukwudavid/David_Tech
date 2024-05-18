$(document).ready(function() {
    // MODAL
    var modalText = {
      discover: {
        discover: {
          title: 'Coursera Tutorials',
          tag: 'Learn CorelDRAW Online.',
          detail: 'Coursera offers a variety of courses to help you master CorelDRAW and enhance your graphic design skills. Learn from top instructors at your own pace.',
          link: 'https://www.coursera.org/'
      }
    },      
      ordering: {
        title: 'Coursera Tutorials',
        tag: 'Learn CorelDRAW Online.',
        detail: 'Coursera offers a variety of courses to help you master CorelDRAW and enhance your graphic design skills. Learn from top instructors at your own pace.',
        link: 'https://www.coursera.org/'
    },
    
      newrelic: {
        title: 'Coursera Tutorials',
        tag: 'Learn CorelDRAW Online.',
        detail:
        'Coursera offers a variety of courses to help you master CorelDRAW and enhance your graphic design skills. Learn from top instructors at your own pace.',
        link: 'https://www.coursera.org/'
      },
      brave: {
        title: 'Coursera Tutorials',
        tag: 'Learn CorelDRAW Online.',
        detail:
        'Coursera offers a variety of courses to help you master CorelDRAW and enhance your graphic design skills. Learn from top instructors at your own pace.',
        link: 'https://www.coursera.org/'
      },
      walker: {
        "title": "GeeksforGeeks Tutorials",
        "tag": "LEARN COMPUTER SCIENCE AND PROGRAMMING.",
        "detail": "GeeksforGeeks offers tutorials and practice problems on various computer science topics and programming languages to help individuals enhance their coding skills.",
        "link": "https://www.geeksforgeeks.org/"
      },
      powur:{
        "title": "GeeksforGeeks Tutorials",
        "tag": "LEARN COMPUTER SCIENCE AND PROGRAMMING.",
        "detail": "GeeksforGeeks offers tutorials and practice problems on various computer science topics and programming languages to help individuals enhance their coding skills.",
        "link": "https://www.geeksforgeeks.org/"
      },
      mystand: {
        "title": "Graphic Design Tutorials",
        "tag": "LEARN GRAPHIC DESIGN SKILLS AND TECHNIQUES.",
        "detail": "Graphic Design Tutorials provides resources and tutorials for individuals looking to improve their graphic design skills, covering topics such as typography, color theory, layout design, and software proficiency.",
      },
      never: {
        "title": "Graphic Design Tutorials",
        "tag": "LEARN GRAPHIC DESIGN SKILLS AND TECHNIQUES.",
        "detail": "Graphic Design Tutorials provides resources and tutorials for individuals looking to improve their graphic design skills, covering topics such as typography, color theory, layout design, and software proficiency.",
      },
      themall: {
        "title": "Graphic Design Tutorials",
        "tag": "LEARN GRAPHIC DESIGN SKILLS AND TECHNIQUES.",
        "detail": "Graphic Design Tutorials provides resources and tutorials for individuals looking to improve their graphic design skills, covering topics such as typography, color theory, layout design, and software proficiency.",
      }
    };
  
    $('#gallery .button').on('click', function() {
      fillModal(this.id);
      $('.modal-wrap').addClass('visible');
    });
  
    $('.close').on('click', function() {
      $('.modal-wrap, #modal .button').removeClass('visible');
    });
  
    $('.mask').on('click', function() {
      $('.modal-wrap, #modal .button').removeClass('visible');
    });
  
    var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth / 3,
      dragStart,
      dragEnd;
  
    setDimensions();
  
    $('#next').click(function() {
      shiftSlide(-1);
    });
    $('#prev').click(function() {
      shiftSlide(1);
    });
  
    carousel.on('mousedown', function() {
      if (carousel.hasClass('transition')) return;
      dragStart = event.pageX;
      $(this).on('mousemove', function() {
        dragEnd = event.pageX;
        $(this).css('transform', 'translateX(' + dragPos() + 'px)');
      });
      $(document).on('mouseup', function() {
        if (dragPos() > threshold) {
          return shiftSlide(1);
        }
        if (dragPos() < -threshold) {
          return shiftSlide(-1);
        }
        shiftSlide(0);
      });
    });
  
    function setDimensions() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        slideWidth = $(window).innerWidth();
      }
      $('.carousel-wrap, .slide').css('width', slideWidth);
      $('.modal').css('max-width', slideWidth);
      $('#carousel').css('left', slideWidth * -1);
    }
  
    function dragPos() {
      return dragEnd - dragStart;
    }
  
    function shiftSlide(direction) {
      if (carousel.hasClass('transition')) return;
      dragEnd = dragStart;
      $(document).off('mouseup');
      carousel
        .off('mousemove')
        .addClass('transition')
        .css('transform', 'translateX(' + direction * slideWidth + 'px)');
      setTimeout(function() {
        if (direction === 1) {
          $('.slide:first').before($('.slide:last'));
        } else if (direction === -1) {
          $('.slide:last').after($('.slide:first'));
        }
        carousel.removeClass('transition');
        carousel.css('transform', 'translateX(0px)');
      }, 700);
    }
  
    function fillModal(id) {
      $('#modal .title').text(modalText[id].title);
      $('#modal .detail').text(modalText[id].detail);
      $('#modal .tag').text(modalText[id].tag);
      if (modalText[id].link)
        $('#modal .button')
          .addClass('visible')
          .parent()
          .attr('href', modalText[id].link);
  
      $.each($('#modal li'), function(index, value) {
        $(this).text(modalText[id].bullets[index]);
      });
      $.each($('#modal .slide'), function(index, value) {
        $(this).css({
          background:
            "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
          backgroundSize: 'cover'
        });
      });
    }
  });
  