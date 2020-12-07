var parallaxInstance = new Parallax(scene);
$(document).ready(function () { 
	var n = document.getElementById("scene"), 
		a = $("#container"); document.getElementById("message").scrollHeight; 

	$(window).scrollTop(1);
	$(window).scroll(function (n) { 
		var e = $(this).scrollTop(); a.scrollTop(e);
		if ($(window).scrollTop() > 550) {
			$("#goTop").css('display', 'block');
		} else {
			$("#goTop").css('display', 'none');
		}
	});
	$(".layer.delay-1000").on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function () { 
		$(".layer").removeClass("bounceInUp", "animated"), parallaxInstance = new Parallax(n) 
	});
	$("textarea#message").keyup(function () {
		if ($(this)[0].scrollHeight < 230) {
			$(this).css("overflow", "hidden");
			$(this).css("height", "5px");
			$(this).css("height", $(this)[0].scrollHeight);
		} else {
			$(this).css("overflow-y", "scroll");
		}
	});
	$("#homeBtn").click(function() {
		$(window).scrollTop(0);
	});
	$("#aboutBtn").click(function() {
		if ($(window).width() >= 992) {
			$(window).scrollTop(1000);
		};
		if ($(window).width() <= 992) {
			$(window).scrollTop(925);
		};
		if ($(window).width() <= 767) {
			$(window).scrollTop(885);
		};
		if ($(window).width() <= 575) {
			$(window).scrollTop(1130);
		};
		if ($(window).width() <= 400) {
			$(window).scrollTop(1010);
		};
	});
	$("#contactBtn").click(function() {
		if ($(window).width() >= 992) {
			$(window).scrollTop(1980);
		};
		if ($(window).width() <= 991) {
			$(window).scrollTop(1733);
		};
		if ($(window).width() <= 767) {
			$(window).scrollTop(1684);
		};
		if ($(window).width() <= 575) {
			$(window).scrollTop(1800);
		};
		if ($(window).width() <= 400) {
			$(window).scrollTop(1700);
		};
	});
	$("#goTop").click(function() {
		$(window).scrollTop(0);
	});
});