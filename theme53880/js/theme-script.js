jQuery(document).ready(function() {
	jQuery(window).resize(
		function(){
			if(!jQuery('body').hasClass('cherry-fixed-layout')) {
				jQuery('.full-width-block, .parallax-slider').width(jQuery(window).width());
				jQuery('.full-width-block, .parallax-slider').css({width: jQuery(window).width(), "margin-left": (jQuery(window).width()/-2), left: "50%", "position": "relative"});
			};
			if(!jQuery('body').hasClass('cherry-fixed-layout')) {
				jQuery('.extra-size').width('1270');
			};
		}
	).trigger('resize');

	jQuery('#search-header, #searchform').delegate('*', 'focus blur', function() {
		var elem = jQuery(this);
		setTimeout(function(){
			elem.parent().toggleClass('focused', elem.is(':focus'));
		})
	})
	
	jQuery('.post-author_h, .related-posts_h, .comments-h, #respond > h3, .widget > h3, .widget .banner_wrapper > h3').wrapInner('<span class="title"></span>');
})