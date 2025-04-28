<?php


// set a custom field prefix
define( "CMB_PREFIX", "_p_" );


// include some theme-related things
include( "library/menus.php" );
include( "library/scripts.php" );
include( "library/widgets.php" );


// an extra image manipulation function
include( "library/images.php" );


// include our metaboxes library
include( "library/metabox.php" );


// include quote metaboxes/functions
// include( "library/title.php" );
include( "library/emergency.php" );
include( "library/showcase.php" );
include( "library/post-type/testimonial.php" );



// add editor stylesheet
// add_editor_style( 'editor-style.css' );


// pagination
function pagination( $prev = '&laquo;', $next = '&raquo;' ) {
    global $wp_query, $wp_rewrite;

    $current = ( $wp_query->query_vars['paged'] > 1 ? $wp_query->query_vars['paged'] : 1 );

    $pagination = array(
        'base' => @add_query_arg('paged','%#%'),
        'format' => '',
        'total' => $wp_query->max_num_pages,
        'current' => $current,
        'prev_text' => __($prev),
        'next_text' => __($next),
        'type' => 'plain'
	);

    if ( $wp_rewrite->using_permalinks() ) $pagination['base'] = user_trailingslashit( trailingslashit( remove_query_arg( 's', get_pagenum_link( 1 ) ) ) . 'page/%#%/', 'paged' );

    if ( !empty($wp_query->query_vars['s']) ) $pagination['add_args'] = array( 's' => get_query_var( 's' ) );

    if ( is_paged() ) {
        print '<div class="pagination">' . paginate_links( $pagination ) . '</div>';
    }
}


function post_submission_hook() { ?>
    <script>
    (function (d, e, u) {
        var s = document.createElement(e);
        s.src = u;
        s.async = true;
        s.defer = true;
        var m = d.getElementsByTagName(e)[0];
        m.parentNode.insertBefore(s, m);
    })(document, 'script', 'https://cdn.datasteam.io/js/datasteampx.js');
    MGX = typeof MGX === 'undefined' ? [] : MGX;
    MGX.push({
        AccessKey: 'D62B1A4C44E4',
        Label: 'Conversion',
        Info: 'Contact', 
        OrderId: null,
        OrderTotal: null
    });
    </script>
    <?php
}
add_action( 'gform_after_submission', 'post_submission_hook', 10, 2 );

