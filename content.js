document.body.onkeyup = function(e){
	if(e.keyCode == 32){
		var btnPlay = document.getElementById("player-playPause").click();
		if(btnPlay) {
			document.getElementById("player-playPause").click()
		}
	} else if(e.keyCode == 70) {
		var btnPlay = document.getElementById("player-playPause");
		var enter = document.getElementById("player-fullscreen");
		var exit = document.getElementById("player-leave-fullscreen");
		if(enter && exit && btnPlay) {
			if(hidden(enter)) {
				exit.click();
			} else if(hidden(exit)) {
				enter.click();
			}
		}
	}
}

function hidden(element) {
	return element.offsetWidth === 0 && element.offsetHeight === 0;
}
