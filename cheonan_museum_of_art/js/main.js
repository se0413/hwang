$(document).ready(function(){

	setTimeout(function(){
		$('.visual > strong').addClass('mr')
	}, 1000);
	setTimeout(function(){
		$('.visual h1 > strong:nth-child(1).mr').removeClass('mr')
	}, 3000);

})