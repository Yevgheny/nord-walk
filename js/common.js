
$(function() {


    new WOW().init();


	// Smooth Scroll to block
	$('a[href^="#new-way-to-health"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false; 
   });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
$(document).ready(function() {
	$('#slider').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		dots: true,
		items: 1
	});

	$('#slider-1').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	});
	$(".static-menu div.link").append("<i class='fa fa-chevron-down'></i>");
$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
 
    var links = this.el.find('.link');
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
  };
 
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();
 
    $next.slideToggle();
    $this.parent().toggleClass('open');
 
    if (!e.data.multiple) {
      $el.find('.sub-menu').not($next).slideUp().parent().removeClass('open');
    }
  };
 
  var accordion = new Accordion($('#accordion'), false);
});


	$("#head-form").validate();
	$("#present-form").validate();
	$("#modal-form-1").validate();
	$("#modal-form-2").validate();
	$("#modal-form-3").validate();
	$("#modal-form-4").validate();
	$("#modal-form-5").validate();
	$(".phone").mask("(999) 999-9999");
});

