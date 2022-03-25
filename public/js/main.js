/* GSAP Config
========================================================= */
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);


gsap.config({
  nullTargetWarn: false,
});


const tl = gsap.timeline();
gsap.set(".scroller-scene", { zIndex: (i, target, targets) => targets.length * i });
gsap.set("#lines-scroll-multiply-wrap", { autoAlpha:0 });
var sections = gsap.utils.toArray(".scroller-scene");
var height = 50 * sections.length;

tl
.to({}, {duration: 0.5})
.to(".copy-entry-01",{
  autoAlpha:0,
  y:50,
})
.to(".scroll-scene-two", {
  autoAlpha:1
},'>')
.to(".copy-entry-02",{
  autoAlpha:1,
  y:0,
},'<')
.to(".home-scroller-wrap", {
  backgroundColor:'#062E57'
},'<')
.to(".copy-entry-01",{
  autoAlpha:0,
},'>')
.to({}, {duration: 0.5})
.to(".copy-entry-02",{
  autoAlpha:0,
  y:50,
},'<')
.to(".scroll-scene-three", {
  autoAlpha:1
},'>')
.to(".copy-entry-03",{
  autoAlpha:1,
  y:0,
},'<')
.to(".home-scroller-wrap", {
  backgroundColor:'#044836'
},'<')
.to({}, {duration: 0.5})
.to(".copy-entry-02",{
  autoAlpha:0,
},'>')
.to(".copy-entry-03",{
  autoAlpha:0,
  y:50,
},'<')
.to({}, {duration: 0.5})
.to(".scroll-scene-four", {
  autoAlpha:1
},'>')
.to(".copy-entry-04",{
  autoAlpha:1,
  y:0,
},'<')
.to(".home-scroller-wrap", {
  backgroundColor:'#E3F2FC'
},'<')
.to(".copy-entry-03",{
  autoAlpha:0,
},'>')
.to("#lines-scroll", {
  autoAlpha:0
},'<')
.to("#lines-scroll-multiply-wrap", {
  autoAlpha:1
},'<')
.to({}, {duration: 0.5});

ScrollTrigger.create({
  animation: tl,
  trigger: ".home-scroller-wrap",
  start: "top top",
  end: "+=" + height + "%",
  scrub: 1,
  pin: true,
});


// Doc Ready

(function($) {
  
  
  
  /* Header Sticky Nav
  ========================================================= */
  
  var header = $("header.main-banner");
  $(window).scroll(function() {
    var currentPos = $(this).scrollTop();
    if (currentPos > 380) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });
  
  // Nav Close on Click
  $('.mobile-nav a').click(function() {
    $('.mobile-nav').fadeOut();
    $(this).parents('.mobile-nav-wrap').removeClass('open');
    $('.sub-menu').removeClass('sub-open');
  });
  
  /* Timeline
  ========================================================= */
  
  
  $(window).on('load resize', () => {
    
    let
    timelineStartOffset = $('.timeline-entry:first-child').outerHeight() / 2,
    timelineEndOffset = $('.timeline-entry:last-child').outerHeight() / 2,
    timelineHeight = $('.timeline-entries').outerHeight(),
    totalOffset = timelineHeight - (timelineStartOffset + timelineEndOffset);
    
    $(".timeline-entries").css("--timelineStartOffset", timelineStartOffset + 'px');
    $(".timeline-entries").css("--timelineOffset", totalOffset + 'px');
    
  });
  
  /* Drawers
  ========================================================= */
  
  function drawers() {
    
    $('.bio-popout').show();
    var bioTrigger = $('a.bio-toggle');
    
    bioTrigger.on('click', function(event) {  
      event.preventDefault(); //prevent default click behavior
      event.stopPropagation(); //stop event bubbling from conflicting with close function
      
      var toggleName = $(this).attr('data-bio-toggle');
      var toggleTarget = $('[data-bio-popout="' + toggleName + '"]');
      
      $('body').addClass('overlay-active'); // remove scrollbar
      toggleTarget.addClass('active');
    });
    
    // close on esc
    $(document).on('keydown', function(f) {
      if (f.keyCode === 27) {
        $('body').removeClass('overlay-active');
        $('.bio-popout.active').removeClass('active');
        $('.popup-row').removeClass('overlay');
      }
    });
    
    // close button
    var popouts = $('.bio-popout .close a');
    popouts.click(function(event) {
      event.preventDefault();
      $(this).parents('.bio-popout').removeClass('active');
      $(this).parents('.popup-row').removeClass('overlay');
    });
    
    // click outside popout to close
    $(document).on('click', function(event) {
      if (!$(event.target).parents('.bio-popout.active').length) {
        $('body').removeClass('overlay-active');
        $('.bio-popout.active').removeClass('active');
        $('.popup-row').removeClass('overlay');
      }
    });
  }
  
  drawers();
  
  /* Parallax
  ========================================================= */
  
  var rellax = new Rellax('.rellax', {
    speed: 2,
    center: true,
    round: false,
    vertical: true,
    horizontal: false
  });
  
  /* Header Sticky Nav
  ========================================================= */
  var header = $(".header-hero");
  if (header.length) {
    $(window).scroll(function() {
      var currentPos = $(this).scrollTop();
      if (currentPos > 0) {
        header.addClass("scrolled");
      } else {
        header.removeClass("scrolled");
      }
    });
  }
  
  
  (function($){
    
    let doc = document.documentElement,
    prevScroll = window.scrollY || doc.scrollTop,
    curScroll,
    direction = 0,
    prevDirection = 0,
    header = document.querySelector('.hero-nav');
    
    const toggleHeader = function(direction, curScroll) {
      if (direction === 2 && curScroll > 300) { //hide when moving down after 300px
        header.classList.add('hide');
        prevDirection = direction;
      }
      else if (direction === 1) {
        header.classList.remove('hide');
        prevDirection = direction;
      }
    };
    
    const checkScroll = function() {
      // Direction: 0 - initial, 1 - up, 2 - down
      curScroll = window.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) { 
        direction = 2;
      }
      else if (curScroll < prevScroll) { 
        direction = 1;
      }
      
      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }
      prevScroll = curScroll;
    };
    
    window.addEventListener('scroll', checkScroll);
    
  })();
  
  
  
})(jQuery);