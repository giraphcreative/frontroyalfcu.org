

// tab controls
jQuery(document).ready(function($){

	var numTestimonials = $('.testimonial').length;
	if ( numTestimonials>1 ) {
		setInterval(function(){
			var currentTestimonial = $('.testimonial:visible');
			var nextTestimonial = currentTestimonial.next('.testimonial');
			console.log( nextTestimonial );
			if ( nextTestimonial.length == 0 ) {
				nextTestimonial = $('.testimonial:first');
			}
			currentTestimonial.hide();
			nextTestimonial.show();
		}, 20000 );
	}

});

