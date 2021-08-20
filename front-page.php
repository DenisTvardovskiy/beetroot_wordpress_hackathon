<?php /* Template Name: Front-page */ ?>

<?php get_header(); ?>
<section class="front-page">
    <?php include( 'template-parts/content-search.php' ); ?>
    <?php include( 'template-parts/map-component.php' ); ?>
    <?php include( 'template-parts/countries-stats.php' ); ?>
</section>

<?php get_footer(); ?>