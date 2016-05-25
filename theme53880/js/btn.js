jQuery(document).ready(function(jQuery) {
	jQuery("a.btn-primary, a.btn-default, .reply a").each(function(){
		var btn_html = jQuery(this).html();
		var btn_text = jQuery(this).text();
		jQuery(this).attr('data-hover', btn_text).empty().append('<span data-hover="'+btn_text+'">'+btn_html+'</span>');
	});
	jQuery(".reply a").each(function(){
		jQuery(this).addClass('btn');
	}); 

});
