$(document).ready(function() {
	var $loginOpen = $('#logIn');
	var $loginBox = $('#loginDropdown');
	$loginOpen.click(function() {
		$(this).toggleClass('active');
		$loginBox.toggleClass('opened');
		return false;
	});
});