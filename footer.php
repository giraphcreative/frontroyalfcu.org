<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>	
	
	</section>
	
	<footer class="footer">
		<div class="column first">
			<p><span>Front Royal Federal Credit Union</span><br>
				P.O. Box 1470<br>
				Front Royal, VA 22630<br>
				(540) 635-7133<br>
				Routing Number: 251480631</p>
		</div>
		<div class="column">
			<ul>
				<li><a href="#">Vehicle Loans</a></li>
				<li><a href="#">Credit Cards</a></li>
				<li><a href="#">Mortgages</a></li>
				<li><a href="#">Home Equity</a></li>
				<li><a href="#">Personal Loans</a></li>
			</ul>
		</div>
		<div class="column">
			<ul>
				<li><a href="#">Savings</a></li>
				<li><a href="#">Checking</a></li>
				<li><a href="#">Certificates</a></li>
				<li><a href="#">Youth Accounts</a></li>
			</ul>
		</div>
		<div class="column last">
			<ul>
				<li><a href="#">About</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#">Locations</a></li>
				<li><a href="#">Membership</a></li>
			</ul>
		</div>
	</footer><!-- #colophon -->

	<div class="colophon">
		<div class="third">
			<img src="<?php bloginfo( 'template_url' ); ?>/img/logo-ncua.png" class="alignright">Your savings are federally insured to at least $250,000, ad backed by the full faith and credit of the united states government. 
		</div>
		<div class="third">
			<img src="<?php bloginfo( 'template_url' ); ?>/img/logo-equal-housing.png" class="alignright">Equal Housing Lender - We do business in accordance with the Federal Fair Housing Law and the Equal Housing Opportunity Act. 
		</div>
		<div class="third links">
			<a href=""><img src="<?php bloginfo( 'template_url' ); ?>/img/social-facebook.png" class="alignright"></a>
			<a href="#">Privacy Policy</a><br>
			<a href="#">Notices &amp; Policies</a>
		</div>
	</div>

</div><!-- #container -->

<?php wp_footer(); ?>
</body>
</html>