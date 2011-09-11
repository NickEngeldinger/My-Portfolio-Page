$(function(){
	$('#mob').click(function(event) {
		event.preventDefault();
		$('#old_slides').css('display', 'none');
		$('#new_slides').css('display', 'block');
	});
});