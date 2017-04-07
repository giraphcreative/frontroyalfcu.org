<?php

/*
Template Name: Page - Home
*/

get_header();

?>

	<?php the_showcase(); ?>

	<div class="home-pad bg-grey-light group">
		
		<div class="quarter">
			<a href="/services/rates"><img src="<?php bloginfo( 'template_url' ); ?>/img/home-equity.png"></a>
		</div>

		<div class="quarter">
			<a href="/finance"><img src="<?php bloginfo( 'template_url' ); ?>/img/home-auto.png"></a>
		</div>

		<div class="quarter">
			<a href="/join"><img src="<?php bloginfo( 'template_url' ); ?>/img/home-buying.png"></a>
		</div>

		<div class="quarter">
			<a href="/services/savings"><img src="<?php bloginfo( 'template_url' ); ?>/img/home-borrow.png"></a>
		</div>

	</div>

	<div class="home-pad icons text-center group">
		
		<div class="fifth">
			<a href="/services/rates">
				<img src="<?php bloginfo( 'template_url' ); ?>/img/icon-percent.png">
				<h5>Loan Rates</h5>
			</a>
		</div>

		<div class="fifth">
			<a href="/services/rates">
				<img src="<?php bloginfo( 'template_url' ); ?>/img/icon-check-doc.png">
				<h5>Apply For a Loan</h5>
			</a>
		</div>

		<div class="fifth">
			<a href="/services/rates">
				<img src="<?php bloginfo( 'template_url' ); ?>/img/icon-house.png">
				<h5>CUMA Mortgage Center</h5>
			</a>
		</div>

		<div class="fifth">
			<a href="/services/rates">
				<img src="<?php bloginfo( 'template_url' ); ?>/img/icon-credit-card.png">
				<h5>Credit Card Access</h5>
			</a>
		</div>

		<div class="fifth">
			<a href="/services/rates">
				<img src="<?php bloginfo( 'template_url' ); ?>/img/icon-pig.png">
				<h5>Just For Kids</h5>
			</a>
		</div>

	</div>
	
	<!--
	<div class="bg-water">
		<div class="home-header">
			<h1>Serving the Saint Matthews Community</h1>
		</div>
		<div class="home-content">
			<?php 
			/*
			if ( have_posts() ) :
				while ( have_posts() ) : the_post(); 
					the_content();
				endwhile;
			endif;
			*/
			?>
		</div>
	</div>
	-->

<?php 

get_footer();

?>