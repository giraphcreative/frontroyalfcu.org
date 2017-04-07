<?php

/*
Template Name: Page - Home
*/

get_header();

?>

	<?php the_showcase(); ?>

	<div class="home-sections group">
		
		<a href="/services/rates">
			<section class="bg-lime bg-fish">
				Catch a <span>Great Rate</span>
			</section>
		</a>
		
		<a href="/finance">
			<section class="bg-orange bg-fish">
				Faith &amp; <span>Finance</span>
			</section>
		</a>
		
		<a href="/join">
			<section class="bg-navy bg-fish">
				Join <span>Today</span>
			</section>
		</a>
		
		<a href="/services/savings">
			<section class="bg-teal bg-fish">
				Save <span>Hundreds</span>
			</section>
		</a>

	</div>

	<div class="bg-water">
		<div class="home-header">
			<h1>Serving the Saint Matthews Community</h1>
		</div>
		<div class="home-content">
			<?php 
			if ( have_posts() ) :
				while ( have_posts() ) : the_post(); 
					the_content();
				endwhile;
			endif;
			?>
		</div>
	</div>


<?php 

get_footer();

?>