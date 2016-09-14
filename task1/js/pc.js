$(function(){
	moreptHeight();
	$(window).resize(function(){
		moreptHeight();
	});
});

function moreptHeight(){
	var documentHeight = $(document).height();
	console.log($(window).height());
	$("#morept>ul").css({
		"height":documentHeight
	});
	console.log($("#morept>ul").height());
}