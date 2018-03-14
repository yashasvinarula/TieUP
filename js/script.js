$(document).ready(function(){
	$('.fa-bars').click(function(){
		$('#header-info').hide();
		$('#menu-options').show();
	});

	$('.fa-times').click(function(){
		$('#header-info').show();
		$('#menu-options').hide();
	});
});