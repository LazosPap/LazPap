---
layout: default
title: "LazPap"
---
<script>
  window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.selector', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 'screenWidth/2', 'screenWidth'],
        ]
      }
    })
  }
</script>


<nav>
  <div class="hamburger">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#work">Work</a></li>
    <li><a href="#inline" class="modaal" data-modaal-type="inline" data-modaal-animation="fade" data-modaal-height="500">Contact</a>
      <div id="inline" style="display:none">
        <h2 class="modaal-heading">Contact Me</h2>
        <h1 class="modaal-heading"><a class="d-box" href="mailto:lazospap3@gmail.com">lazospap3@gmail.com</a></h1>
      </div>
    </li>
  </ul>
</nav>

<section class="landing">

<!-- HTML -->
<div class="selector">Hello</div>
<div class="lax lax_preset_fadeIn:50:100 lax_preset_spin">TESTT</div>
  <h1 class="lax heading" data-lax-translate-x="0 0, vh -200" data-lax-opacity="0 1, (vh*0.5) 0">LazPap</h1>
  <p class="scroll-text lax" data-lax-scale="0 1, vh 0.2" data-lax-translate-y="0 0, vh 1200" data-lax-opacity="0 1, (vh*0.3) 0">Scroll down</p>
</section>

<section class="scroll-down" id="about">
  <h1 class="lax jekyllHead" data-lax-preset="eager fadeInOut" >This project designed with Jekyll</h1>
  <p class="parJekyll lax" data-lax-preset="eager fadeInOut">I turned it from Rails app into Jekyll and created some</p>
  <p class="parJekyll parCoolColor lax" data-lax-preset="crazy zoomInOut" >COOOL CSS animations.</p>
  <div class="grid">
  <img src="{{ '/images/Ruby_On_Rails.png' | prepend: site.baseurl }}" class="icon-ruby lax" data-lax-preset="lazy-150 fadeOutIn fadeInOut" />
  <img src="{{ '/images/Jekyll.png' | prepend: site.baseurl }}" class="icon-jekyll lax" data-lax-preset="fadeOutIn fadeInOut" />
  </div>
  <div class="bubbles lax" data-lax-preset="fadeInOut">
  <div class="bubble"></div>
  <div class="bubble x2"></div>
  <div class="bubble x1"></div>
  </div>
</section>

<section class="workSection" id="work">
  <div class="lax upperWork" data-lax-preset="driftRight-80 fadeInOut">
    <h3 class="wordpressText">These are my Wordpress</h3>
  </div>
  <div>
      <h3 class="lax flyingText" data-lax-preset="rightToLeft-1.25 speedy" data-lax-optimize="true">work</h3>
  </div>
  <div class="lax" data-lax-preset="leftToRight-1.1 fadeInOut" style="z-index: -1;">
    <div class="lax box"
      style="background: #35D5E5;"
      data-lax-preset="spin"
    ></div>
  </div>

  <div class="lax" data-lax-preset="leftToRight-1.2 fadeInOut" style="z-index: -1;">
    <div class="lax box"
      style="background: #EDD943; margin-top: -50pt; margin-left: -50pt; width: 40pt; height: 40pt;"
      data-lax-preset="spinRev-500"
    ></div>
  </div>

  <div class="lax" data-lax-preset="leftToRight-1.4 fadeInOut" style="z-index: -1;">
    <div class="lax box"
      style="background: #ED2471; margin-top: -90pt; margin-left: -0pt;"
      data-lax-preset="spin-500"
    ></div>
  </div>

  <div class="lax" data-lax-preset="leftToRight-1.5 fadeInOut">
    <div class="lax box"
      style="background: #EDD943; margin-top: 70pt; margin-left: -150pt; width: 40pt; height: 40pt;"
      data-lax-preset="spinRev-500"
    ></div>
  </div>

  <div class="lax" data-lax-preset="leftToRight-1.3 fadeInOut" style="z-index: -1;">
    <div class="lax box"
      style="background: #EDD943; margin-top: 100pt; margin-left: -60pt; width: 25pt; height: 25pt;"
      data-lax-preset="spin-500"
    ></div>
  </div>
  <a href="https://bazagiazi.com/">
  <div class="lax" data-lax-preset="leftToRight-1.05 fadeInOut">
    <div class="lax box linkBox"
      style="background: #ED2471; margin-top: -30pt; margin-left: -70pt; width: 75pt; height: 75pt;"
      data-lax-preset="spin"
    ><h3>Bazagiazi</h3></div>
  </div>
</a>
  <div class="lax" data-lax-preset="leftToRight-1.15 fadeInOut" style="z-index: -1;">
    <div class="lax box"
      style="background: #35D5E5; margin-top: -70pt; margin-left: -20pt; width: 40pt; height: 40pt;"
      data-lax-preset="spinRev-500"
    ></div>
  </div>

  <div class="lax" data-lax-preset="leftToRight-1.45 fadeInOut">
    <div class="lax box"
      style="background: #ED2471; margin-top: -50pt; margin-left: -50pt; width: 25pt; height: 25pt;"
      data-lax-preset="spin-500"
    ></div>
  </div>

  <div class="lax" data-lax-preset="leftToRight-1.5 fadeInOut" style="z-index: -1;">
    <div class="lax box"
      style="background: #35D5E5; margin-top: 30pt; margin-left: -20pt;"
      data-lax-preset="spinRev-500"
    ></div>
  </div>

  <div class="lax" data-lax-preset="leftToRight-1.25 fadeInOut" style="z-index: -1;">
    <div class="lax box"
      style="background: #ED2471; margin-top: 80pt; margin-left: -10pt;"
      data-lax-preset="spin-500"
    ></div>
  </div>
</section>

<section class="lastSection">
  <div class="lax">
    <h3 data-lax-preset="zoomInOut-0.1" class="lax lastHeading">No More Scrolling For You</h3>
  </div>
</section>

<script src="{{site.baseurl}}/assets/js/nav.js"></script>

<script defer>
  AOS.init();
</script>

<script src="https://code.jquery.com/jquery-3.4.1.js"></script> 
