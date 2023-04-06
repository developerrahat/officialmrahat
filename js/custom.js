$(document).ready(function () {
// menu text hover effect start===========
let blinkTextMenuLinks = document.querySelectorAll(".my-menus li a");
blinkTextMenuLinks.forEach(link => {
  let letters = link.textContent.split("");
  link.textContent = "";
  letters.forEach((letter, i) => {
    i += 1;
    let span = document.createElement("span");
    let delay = i / 20;
    if (i % 2 === 0) {
      delay -= 0.1;
    } else {
      delay += 0.05;
    }
    let letterOut = document.createElement("span");
    letterOut.textContent = letter;
    letterOut.style.transitionDelay = `${delay}s`;
    letterOut.classList.add("out");
    span.append(letterOut);
    let letterIn = document.createElement("span");
    letterIn.textContent = letter;
    letterIn.style.transitionDelay = `${delay}s`;
    letterIn.classList.add("in");
    span.append(letterIn);
    link.append(span);
  });
  
  // menu text hover effect end===========
  // Hero Case study images 	==================	
    $('.link-list li:nth-child(1)').on('mouseenter', function() {
      $('.link-list li.active').removeClass('active');
      $('.img-list li.show').removeClass("show");
      $('.img-list li:nth-child(1)').addClass("show");
      $('.link-list li:nth-child(1)').addClass('active');
    })
    $('.link-list li:nth-child(2)').on('mouseenter', function() {
      $('.link-list li.active').removeClass('active');
      $('.img-list li.show').removeClass("show");
      $('.img-list li:nth-child(2)').addClass("show");
      $('.link-list li:nth-child(2)').addClass('active');
    })
    $('.link-list li:nth-child(3)').on('mouseenter', function() {
      $('.link-list li.active').removeClass('active');
      $('.img-list li.show').removeClass("show");
      $('.img-list li:nth-child(3)').addClass("show");
      $('.link-list li:nth-child(3)').addClass('active');
    })
    $('.link-list li:nth-child(4)').on('mouseenter', function() {
      $('.link-list li.active').removeClass('active');
      $('.img-list li.show').removeClass("show");
      $('.img-list li:nth-child(4)').addClass("show");
      $('.link-list li:nth-child(4)').addClass('active');
    })
    $('.link-list li:nth-child(5)').on('mouseenter', function() {
      $('.link-list li.active').removeClass('active');
      $('.img-list li.show').removeClass("show");
      $('.img-list li:nth-child(5)').addClass("show");
      $('.link-list li:nth-child(5)').addClass('active');
    })
    $('.link-list li:nth-child(1)').trigger('mouseenter')  


});


// ===============================
const resolver = {
  resolve: function resolve(options, callback) {
    // The string to resolve
    const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
    const combinedOptions = Object.assign({}, options, {resolveString: resolveString});
    
    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    function randomCharacter(characters) {
      return characters[getRandomInteger(0, characters.length - 1)];
    };
    
    function doRandomiserEffect(options, callback) {
      const characters = options.characters;
      const timeout = options.timeout;
      const element = options.element;
      const partialString = options.partialString;

      let iterations = options.iterations;

      setTimeout(() => {
        if (iterations >= 0) {
          const nextOptions = Object.assign({}, options, {iterations: iterations - 1});

          // Ensures partialString without the random character as the final state.
          if (iterations === 0) {
            element.textContent = partialString;
          } else {
            // Replaces the last character of partialString with a random character
            element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
          }

          doRandomiserEffect(nextOptions, callback)
        } else if (typeof callback === "function") {
          callback(); 
        }
      }, options.timeout);
    };
    
    function doResolverEffect(options, callback) {
      const resolveString = options.resolveString;
      const characters = options.characters;
      const offset = options.offset;
      const partialString = resolveString.substring(0, offset);
      const combinedOptions = Object.assign({}, options, {partialString: partialString});

      doRandomiserEffect(combinedOptions, () => {
        const nextOptions = Object.assign({}, options, {offset: offset + 1});

        if (offset <= resolveString.length) {
          doResolverEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      });
    };

    doResolverEffect(combinedOptions, callback);
  } 
}
/* Some GLaDOS quotes from Portal 2 chapter 9: The Part Where He Kills You
 * Source: http://theportalwiki.com/wiki/GLaDOS_voice_lines#Chapter_9:_The_Part_Where_He_Kills_You
 */
const strings = [
  'Web Designer.',
  'Developer.',
  'And Freelancer.',

];
let counter = 0;
const options = {
  // Initial position
  offset: 0,
  // Timeout between each random character
  timeout: 5,
  // Number of random characters to show
  iterations: 5,
  // Random characters to pick from
  characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
  // String to resolve
  resolveString: strings[counter],
  // The element
  element: document.querySelector('[data-target-resolver]')
}

// Callback function when resolve completes
function callback() {
  setTimeout(() => {
    counter ++;
    
    if (counter >= strings.length) {
      counter = 0;
    }
    
    let nextOptions = Object.assign({}, options, {resolveString: strings[counter]});
    resolver.resolve(nextOptions, callback);
  }, 1000);
}
resolver.resolve(options, callback);




// Button hover effect js==============
	//Scroll back to top==============
    var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
	
// ==================JQuery Plugins==================

//  mixitub filtering=========================
var mixer = mixitup('.isotop-active');
// ==================JQuery Plugins==================
 /*================= Owl Carousel Js Testimonial  ==================*/
 $(".owl-carousel").owlCarousel({
  items: 2, 
  autoplay: true,
  smartSpeed: 500,
  loop: true,
  autoplayHoverPause: true,
  responsiveClass: true,
    responsive: {
      0: {
          items: 1
      },
      991: {
          items: 2
      }
  }
});

//  page crollIt animation=================
$(function(){
  $.scrollIt({
      topOffset:-30,
      crollTime:1000,
      upKey:1000,
      downKey:1000,
  });
});

// CounterUp========================
$('.counter').counterUp({
  delay:30,
  time:3000
});

/*========== Loading  ==========*/
$('.preloader').delay(200).fadeOut(700, function () {
  $(this).remove();
});
/*START ANIMATION JS*/
AOS.init();
/*END ANIMATION JS*/


// jQuery;
})

/*========== Start Portfolio Trigger Filterizr Js  ==========*/
$("#control li").on('click', function () {
  $(this).addClass('active').siblings("li").removeClass('active');
});



