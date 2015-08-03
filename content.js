$(document).ready(function() {
	function focus_player () {
		$(document).ready(function() {
			$("div#movie_player").tabIndex = 0;
			$("div#movie_player").focus();
			if($('div[class="ytp-button ytp-segmented-control-deselected"]').length){
				if($('div[class="ytp-button ytp-segmented-control-deselected"]')[0].innerHTML == "Off"){
					$('div[class="ytp-button ytp-segmented-control-deselected"]')[0].click();		
				}				
			}
		});
	}
	setTimeout(focus_player,2000);
	chrome.runtime.onMessage.addListener(function(request, sender, callback) {
   		if(request == "Changed"){
   			setTimeout(focus_player,2000);
   		}

	});
});