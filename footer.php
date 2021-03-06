<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package jwp
 */

?>
<div class="dark-bg" id="darkBg"></div>
<?php wp_footer(); ?>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/data/gdp.js"></script>
<script>
    new svgMap({
        targetElementID: 'svg-map',
        data: svgMapDataGPD
    });
</script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/index.js"></script>
</body>
</html>
