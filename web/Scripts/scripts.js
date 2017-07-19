/* Menu extending on hover */

$(".dropbtn").hover(function () {
  $(this).children('ul').stop().slideToggle(250);
});

/* Sticky navbar */

var navPosition;
var scrollValue;
navPosition = $("#stickyNav").offset().top;
$(window).resize(function(){
	navPosition = $("#stickyNav").offset().top;
})

$(window).scroll(function () {

	scrollValue = $(this).scrollTop();

	if (scrollValue > navPosition) {
		$("#stickyNav").addClass('fixed');
		$("#search").stop().show(800);

	}else{
		$("#stickyNav").removeClass('fixed');
		$("#search").stop().hide();
	}
})

