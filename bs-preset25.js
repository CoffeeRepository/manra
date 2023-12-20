<style>
/* ALL PAGES CSS */
.h2 {word-spacing:-0.04em}
.h3, .h4 {word-spacing:-0.06em}
.h5, .gs-head {word-spacing:-0.08em}

/* Mobile specifications - font size */
@media screen and (max-width:767px) {
.h2 {word-spacing:-0.09em}
.h6.stats-wrapping {font-size:11.667px;}
.select-field.w-select {min-height:50px; !important}
.select-field.w-select option {min-height:50px; !important}
}
body { 
  min-height: 0vw;
  font-size: calc(0.10775862068965517vw + 0.8706896551724138em);
}
/* Max Font Size */
@media screen and (min-width:1920px) {
 body { font-size: 1em; }
}
/* Min Font Size */
@media screen and (max-width:991px) {
 body { font-size: calc(0.20181634712411706vw + 0.625em); }
}
.container {
  max-width: 120em;
}

/* Main Variables */
:root {
  --main-dark: #2E4F91;
  --main-light: #F4F4F4;
}

/* Global Styles */
::selection {
	background: var(--main-dark);
  color: var(--main-light);
  text-shadow: none;
}
img::selection, svg::selection {
	background: transparent;
}
/* No outline on section when scrolling to it */
div:active, div:focus {
  outline: 0;
  -moz-outline-style: none;
}

/* Link color inherits from parent font color  */
a {
	color: inherit;
}

.outlines {
	-webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #3b75e9;
}


.hyphen {
	word-wrap: break-word;
  overflow-wrap: break-word;
	-webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}

/*CURSOR */
@media (pointer:fine) {
	body:hover .cursor {
		opacity: 1.0;
  }
}

.cursor  {
	pointer-events: none;
}

.label.is--input {
	pointer-events: none;
}

/* Disable / enable clicking on an element and its children  */
.no-click, .radio.special .radio__label {
	pointer-events: none;
}
.can-click {
	pointer-events: auto;
}

/* GLOBAL ANIMATIONS */

/* Scroll Indicator */
.scroll-indicator {
	position: relative;
  overflow: hidden;
}
.scroll-indicator::after {
	content: "";
  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  transform: translateY(-101%);
  animation: scroll-indicator 2.5s ease infinite;
}
@keyframes scroll-indicator {
  0% {
    transform: translateY(-101%);
  }
  35% {
    transform: translateY(0%);
  }
  75% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(101%);
  }
}

/* Animate Line */
:root {
  --animate-line-color: #2E4F91;
  --animate-line-speed: 0.3s;
  --animate-line-ease: cubic-bezier(0.12, 0, 0.39, 0);
}
.animate-line {
	display: inline-block;
  position: relative;
  overflow-x: hidden;
}
.animate-line::after {
	pointer-events: none;
	background-color: var(--animate-line-color);
  content: "";
  height: 1.5px;
  position: absolute;
  left: auto;
  top: auto;
  right: 0%;
  bottom: 0%;
  width: 0%;
  transition: width var(--animate-line-ease) var(--animate-line-speed);
}
.animate-line:hover::after {
	width: 100%;
  right: auto;
  left: 0%;
}

/* Selected filter has underline */
.radio.fs-cmsfilter_active::after {
	pointer-events: none;
	background-color: var(--animate-line-color);
  content: "";
  width: 100%;
  height: 1.5px;
  position: absolute;
  left: 0%;
  top: auto;
  right: 0%;
  bottom: 0%;
}

/*Strikethrough Animation*/
.strikethrough {
	display: inline-block;
	position: relative;
  text-decoration: none;
}

.strikethrough::before {
	content:'';
  position: absolute;
  width: 100%;
  height: 0.25em;
  background: hsla(0, 0.00%, 100.00%, 0.90);
  top:47%;
  animation:out 0.35s cubic-bezier(1, 0, 0.58, 0.97) 1 both;
  mix-blend-mode: overlay;
}

.strikethrough:hover::before {
	animation:in 0.35s cubic-bezier(1, 0, 0.58, 0.97) 1 both;
}
@keyframes in{
  0%{
    width: 0;
    left:0;
    right:auto;
  }
  100%{
    left:0;
    right:auto;
    width: 100%;
  }
}
@keyframes out{
  0%{
    width:100%;
    left: auto;
    right: 0;
  }
  100%{
    width: 0;
    left: auto;
    right: 0;
  }
}

/* Keyframes for initial animation */

@media (pointer:fine) {
	@keyframes strikethrough {
	from {
		transform: scaleX(0);
	}
	to {
		transform: scaleX(1);
	}
}
}
.radio__label {font-family:inherit;font-weight:inherit;}
.radio2 .radio__label2 {color:inherit;}

.blog-post {
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}
.blog-post figure div {border-radius: 22px; overflow: hidden;}
.blog-post figure {margin-bottom:1.66em; margin-top:2em; margin-right:1.7em;}
.w-richtext figure.w-richtext-align-floatleft {margin: 2.4em 3.4em 2.5em 0;}

/* Blog image : Float left */
@media screen and (max-width:991px) and (min-width:479px) {
 .w-richtext figure.w-richtext-align-floatleft {width:45%;}
}
</style>
