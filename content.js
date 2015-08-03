$(document).ready(function() {
	var loc;
	function focus_player () {
		$(document).ready(function() {
			loc = window.location.href;
			var x = $('button[class="ytp-button ytp-settings-button"]').parent().parent().parent().children('.ytp-panelpopup').children('.ytp-panel').children('.ytp-panel-content').children('.ytp-menu');
			$('button[class="ytp-button ytp-settings-button"]').click();
			for (var i = 0; i < x.children().length; i++) {
				console.log(x.children().eq(i).children().eq(0).html());
				if(x.children().eq(i).children().eq(0).html() == "Annotations"){
					x.children().eq(i).children().eq(0).click();
				}
			};
			$('div[class="html5-video-container"]').click();
			$("div#movie_player").tabIndex = 0;
			$("div#movie_player").focus();
		});
	}
	setTimeout(focus_player,2000);
	chrome.runtime.onMessage.addListener(function(request, sender, callback) {
   		if(request == "Changed"){
   			if(window.location.href!=loc){
   				setTimeout(focus_player,1000);
   				loc = window.location.href;
   			}
   		}

	});
});