

// onload responsive footer and menu stuff
jQuery(document).ready(function($){

	// select some things we'll use to make things responsive
	var menu = $( 'header nav' ),
		menu_toggle = menu.find( 'button.menu-toggle' ),
		menu_ul = menu.find( '.nav-menu' ),
		fluid_images = $( '.content-area img, .site-content img' );


	// function to set the sidebar height
	var set_sidebar_height = function(){
		if ( matchMedia('only screen and (min-width: 768px)').matches && $('.three-quarter').height() > $('.sidebar').height() ) {
			$( '.sidebar' ).height( $('.three-quarter').height() + 50 );
		} else {
			$( '.sidebar' ).height( 'auto' );
		}
	};


	// remove height and width from images inside
	fluid_images.removeAttr( 'width' ).removeAttr( 'height' );


	// show/hide menus when they click the toggler
	menu_toggle.click(function(){

		if ( menu_ul.is( ':visible' ) ) {
			menu_ul.hide();
		} else {
			menu_ul.show();
		}

		// when user clicks a link, open submenu if it exists.
		menu_ul.find( 'a' ).click(function(){
			var parent_li = $( this ).parent( 'li' );
			var submenu = $( this ).next( 'ul' );
			if ( !submenu.is( ':visible' ) && parent_li.hasClass( 'menu-item-has-children' ) ) {
				event.preventDefault();
				parent_li.addClass( 'open' );
				submenu.show();
			}
		});

	});


	// do third-party link confirm dialog
	$( '.content a:not(.previous):not(.next):not(.lightbox-iframe), a.off-site, .nav-menu a' ).click(function( e ){
		
		// break the normal linking behavior
		e.preventDefault();

		// get the link
		var the_link = $( this );
		var the_link_href = the_link.attr( 'href' );

		// prompt the user and if they confirm the prompt, proceed to the third party site.
		if ( the_link.hasClass( 'bypass' ) ||
			the_link_href.match( /frontroyalfcu.test/i ) || 
			the_link_href.match( /frontroyalfcu.org/i ) || 
			the_link_href.match( /mortgages.cumortgage.net/i ) || 
			the_link_href.match( /cumortgage.mycuhomeadvantage.com/i ) || 
			the_link_href.match( /frontroyalfcu.cuconnections.com/i ) || 
			the_link_href.match( /www.camsbycbs4.net/i ) || 
			the_link_href.match( /cuballot.com/i ) ||
			the_link_href.charAt(0) === '#' || 
			the_link_href.charAt(0) === '/' ) {
			location.href = the_link_href;
		} else {
			if ( confirm( "You are leaving frontroyalfcu.org and entering a third party website that is not a part of Front Royal Federal Credit Union.  The content you are about to view is produced by a third party unaffiliated to Front Royal Federal Credit Union. Front Royal FCU takes no responsibility for the content of the page." ) ) {
				window.open( the_link_href, "_blank" );
			}
		}

	});


	// if we have a button with a 'data-url' attribute, use the property to make the button link.
	$( 'button[data-url]' ).click(function(){
		window.location.href = $( this ).attr( 'data-url' );
	});

	
	// resize the sidebar on load and when the window is resized.
	setTimeout( function(){
		set_sidebar_height();
	}, 1000 );
	$(window).resize( set_sidebar_height );

});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-38315794-50', 'auto');
ga('send', 'pageview');

