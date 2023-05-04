<!DOCTYPE html lang="en">
<!--[if IE 7]><html class="ie ie7" <?php language_attributes(); ?>><![endif]-->
<!--[if IE 8]><html class="ie ie8" <?php language_attributes(); ?>><![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!--><html <?php language_attributes(); ?>><!--<![endif]-->
<head>

<!-- tgtm -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5FH3VF3');</script>
<!-- /gtm -->

<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width,initial-scale=1" />

<title><?php wp_title( '|', true, 'right' ); ?> Front Royal FCU</title>

<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#365F3C">
<meta name="msapplication-TileColor" content="#365F3C">
<meta name="theme-color" content="#ffffff">

<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->

<?php wp_head(); ?>
<link href="<?php bloginfo( "template_url" ) ?>/css/main.css?v=4" rel="stylesheet" type="text/css">

</head>
<body <?php body_class(); ?>>

<!-- gtm-noscript -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5FH3VF3" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- /gtm-noscript -->

<?php the_emergency_bar(); ?>

<div class="container">

<header>

	<div class="wrap">

		<a href="#content" class="skip-content">Jump to main content</a>

		<div class="logo">
			<a href="/" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
				<img src="<?php bloginfo( "template_url" ) ?>/img/logo.png" alt="<?php bloginfo( 'name' ); ?>">
			</a>
		</div>
		
		<a href="https://frontroyalfcu.cuconnections.com/login" class="banking" target="_blank">
			<p class="caps"><strong>Home Banking</strong></p>
			<p>Log in &gt;</p>
		</a>
		
		<a href="/feedback" class="feedback">
			<p class="caps"><strong>Rate Your<br> Royal Treatment</strong></p>
		</a>

	</div>

	<nav role="navigation">
		<!--<button class="menu-toggle"><i class="fa fa-bars"></i></button>-->
		<?php wp_nav_menu( array( 'theme_location' => 'main-menu', 'menu_class' => 'nav-menu' ) ); ?>
	</nav>
	
</header>

<section class="content" id="content">
