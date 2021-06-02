<?php


// init cmb2
require_once( 'cmb2/init.php' );



// add metabox(es)
function page_metaboxes( $meta_boxes ) {


    // showcase metabox
    $showcase_metabox = new_cmb2_box( array(
        'id' => 'showcase_metabox',
        'title' => 'Showcase',
        'object_types' => array( 'page' ), // post type
        'show_on' => array(
            'key' => 'template',
            'value' => array( '', 'page-front' )
        ),
        'context' => 'normal',
        'priority' => 'high',
    ) );

    $showcase_metabox_group = $showcase_metabox->add_field( array(
        'id' => CMB_PREFIX . 'showcase',
        'type' => 'group',
        'options' => array(
            'add_button' => __('Add Slide', 'cmb2'),
            'remove_button' => __('Remove Slide', 'cmb2'),
            'group_title'   => __( 'Slide {#}', 'cmb' ), // since version 1.1.4, {#} gets replaced by row number
            'sortable' => true, // beta
        )
    ) );

    $showcase_metabox->add_group_field( $showcase_metabox_group, array(
        'name' => 'Image/Video',
        'desc' => 'Upload a slide image. Usually 1220x420 is a good general size guideline, but the showcase will adapt to any height.',
        'id'   => 'image',
        'type' => 'file',
        'preview_size' => array( 200, 100 )
    ) );

    $showcase_metabox->add_group_field( $showcase_metabox_group, array(
        'name' => 'Alt text',
        'desc' => 'Specify alt text for this slide.',
        'id'   => 'alt-text',
        'type' => 'text',
    ) );

    $showcase_metabox->add_group_field( $showcase_metabox_group, array(
        'name' => 'Link',
        'desc' => 'Specify a URL to which this ad should link.',
        'id'   => 'link',
        'type' => 'text',
    ) );



    // thumb showcase metabox
    $ad_showcase_metabox = new_cmb2_box( array(
        'id' => 'ad_showcase_metabox',
        'title' => 'Ad Showcase',
        'object_types' => array( 'page' ),
        'show_on'      => array( 'key' => 'page-template', 'value' => 'page-front.php' ),
        'context' => 'normal',
        'priority' => 'high',
    ) );

    $ad_showcase_metabox_group = $ad_showcase_metabox->add_field( array(
        'id' => CMB_PREFIX . 'ad_showcase',
        'type' => 'group',
        'options' => array(
            'add_button' => __('Add Ad', 'cmb2'),
            'remove_button' => __('Remove Ad', 'cmb2'),
            'group_title'   => __( 'Ad {#}', 'cmb' ), // since version 1.1.4, {#} gets replaced by row number
            'sortable' => true, // beta
        )
    ) );

    $ad_showcase_metabox->add_group_field( $ad_showcase_metabox_group, array(
        'name' => 'Image',
        'desc' => 'Upload a 300x300 pixel image to be used for this ad. If you do not adhere to that restriction, it will be imposed and may not look right.',
        'id'   => 'image',
        'type' => 'file',
        'preview_size' => array( 200, 200 )
    ) );

    $ad_showcase_metabox->add_group_field( $ad_showcase_metabox_group, array(
        'name' => 'Alt Text',
        'desc' => 'Specify alt text for the icon.',
        'id'   => 'alt-text',
        'type' => 'text',
    ) );

    $ad_showcase_metabox->add_group_field( $ad_showcase_metabox_group, array(
        'name' => 'Link',
        'desc' => 'Specify a URL to which this ad should link.',
        'id'   => 'link',
        'type' => 'text',
    ) );



    // thumb showcase metabox
    $icon_showcase_metabox = new_cmb2_box( array(
        'id' => 'icon_showcase_metabox',
        'title' => 'Icon Showcase',
        'object_types' => array( 'page' ),
        'show_on'      => array( 'key' => 'page-template', 'value' => 'page-front.php' ),
        'context' => 'normal',
        'priority' => 'high',
    ) );

    $icon_showcase_metabox_group = $icon_showcase_metabox->add_field( array(
        'id' => CMB_PREFIX . 'icon_showcase',
        'type' => 'group',
        'options' => array(
            'add_button' => __('Add Icon', 'cmb2'),
            'remove_button' => __('Remove Icon', 'cmb2'),
            'group_title'   => __( 'Icon {#}', 'cmb' ), // since version 1.1.4, {#} gets replaced by row number
            'sortable' => true, // beta
        )
    ) );

    $icon_showcase_metabox->add_group_field( $icon_showcase_metabox_group, array(
        'name' => 'Image',
        'desc' => 'Upload a 100x100 pixel icon image. Ideally a transparent PNG.',
        'id'   => 'image',
        'type' => 'file',
        'preview_size' => array( 100, 100 )
    ) );

    $icon_showcase_metabox->add_group_field( $icon_showcase_metabox_group, array(
        'name' => 'Image Alt Text',
        'desc' => 'Set alt text for the icon.',
        'id'   => 'alt-text',
        'type' => 'text',
        'sanitization_cb' => false
    ) );

    $icon_showcase_metabox->add_group_field( $icon_showcase_metabox_group, array(
        'name' => 'Title',
        'desc' => 'Set a title to display below this icon.',
        'id'   => 'title',
        'type' => 'text',
        'sanitization_cb' => false
    ) );

    $icon_showcase_metabox->add_group_field( $icon_showcase_metabox_group, array(
        'name' => 'Link',
        'desc' => 'Specify a URL to which this ad should link.',
        'id'   => 'link',
        'type' => 'text',
    ) );

    

    // emergency metabox
    $emergency_metabox = new_cmb2_box( array(
        'id' => 'emergency_metabox',
        'title' => 'Emergency Bar',
        'desc' => "An emergency bar on the top to indicate local news or bring people into a specific area of the site when there's something you want them to read.",
        'object_types' => array( 'page' ), // post type
        'context' => 'normal',
        'priority' => 'high',
    ));

    $emergency_metabox->add_field( array(
        'name' => 'Emergency Text',
        'id'   => CMB_PREFIX . 'emergency-text',
        'type' => 'text',
    ) );

    $emergency_metabox->add_field( array(
        'name' => 'Link',
        'desc' => 'Where should the emergency bar link to.',
        'id'   => CMB_PREFIX . 'emergency-link',
        'type' => 'text',
    ) );

    $emergency_metabox->add_field( array(
        'name' => 'Color',
        'desc' => 'What color should the emergency bar be?',
        'id'   => CMB_PREFIX . 'emergency-color',
        'type' => 'select',
        'options' => array(
            'red' => 'Red',
            'yellow' => 'Yellow',
            'lime' => 'Lime',
            'forest' => 'Forest'
        )
    ) );

}
add_filter( 'cmb2_init', 'page_metaboxes' );



// get CMB value
function get_cmb_value( $field ) {
    return get_post_meta( get_the_ID(), CMB_PREFIX . $field, 1 );
}


// get CMB value
function has_cmb_value( $field ) {
    $cval = get_cmb_value( $field );
    return ( !empty( $cval ) ? true : false );
}


// get CMB value
function show_cmb_value( $field ) {
    print get_cmb_value( $field );
}


// get CMB value
function show_cmb_wysiwyg_value( $field ) {
    print apply_filters( 'the_content', get_cmb_value( $field ) );
}

