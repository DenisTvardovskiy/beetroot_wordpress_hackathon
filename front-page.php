<?php /* Template Name: Front-page */ ?>

<?php get_header(); ?>
<section class="front-page">
    <?php include( 'template-parts/map-component.php' ); ?>
    <?php include('template-parts/map-legend.php'); ?>
    <?php include('template-parts/github-component.php'); ?>
</section>

<?php get_footer(); ?>