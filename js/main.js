// ------NAVBAR---------
$('.burgerIcon').hover(
  function() {
    TweenMax.to('.burgerLine:first-child', 0.2, { x: -10 });
    TweenMax.to('.burgerLine:last-child', 0.2, { x: 10 });
  },
  function() {
    TweenMax.to('.burgerLine:first-child', 0.2, { x: 0 });
    TweenMax.to('.burgerLine:last-child', 0.2, { x: 0 });
  }
);

//autoAlpha will set visibility to visible and opacity to 1
let tlmenu = new TimelineMax({ paused: true });
tlmenu
  .to('nav', 0.3, { autoAlpha: 1 })
  .staggerFromTo(
    'nav li',
    0.5,
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1 },
    0.1
  );

$('.burgerIcon').click(function() {
  tlmenu.play(0);
});

$('.closeButton').click(function() {
  tlmenu.reverse(0);
});

// -----HERO SECTION-------
TweenMax.fromTo(
  '#hero h1',
  0.6,
  { y: 80, opacity: 0 },
  { y: 0, opacity: 1, delay: 0.5 }
);
TweenMax.fromTo(
  '#hero .learnMoreButton',
  0.6,
  { y: 80, opacity: 0 },
  { y: 0, opacity: 1, delay: 1, ease: Back.easeOut }
);

// --------FOUR COLUME SECTION-------
$('.fourColItem').hover(
  function() {
    TweenMax.to($(this), 0.5, { y: -10, scale: 1.03 });
    TweenMax.to($(this), 0.5, { boxShadow: '0 0 20px rgba(0, 0, 0, 0.36)' });
  },
  function() {
    TweenMax.to($(this), 0.5, { y: 0, scale: 1 });
    TweenMax.to($(this), 0.5, { boxShadow: '0 0 20px rgba(0, 0, 0, 0.06)' });
  }
);

//----------SERVICE SECTION---------
TweenMax.set('.serviceBoxInner', { y: 200, opacity: 0 });
$('.serviceBox').hover(
  function() {
    TweenMax.to($(this).find('.serviceBoxInner'), 0.5, {
      y: 0,
      opacity: 1,
      ease: Back.easeOut
    });
  },
  function() {
    TweenMax.to($(this).find('.serviceBoxInner'), 0.5, { y: 200, opacity: 0 });
  }
);

//---------COG SECTION----------
TweenMax.to('.cogLeft', 8, {
  rotation: 360,
  repeat: -1,
  ease: Linear.easeNone
});
TweenMax.to('.cogRight', 8, {
  rotation: -360,
  repeat: -1,
  ease: Linear.easeNone
});
