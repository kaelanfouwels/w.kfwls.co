var element = document.getElementById("pgpRootDialog");
var duration = 250;

function SetOpa(o) {
	element.style.opacity = o;
}

function FadeOut() {
	setTimeout("element.style.display = 'none'", duration);
	for (i = 0; i <= 1; i += 0.01) {
		setTimeout("SetOpa(" + (1 - i) +")", i * duration);
	}
}
function FadeIn() {
	element.style.display = 'block';
	for (i = 0; i <= 1; i += 0.01) {
		setTimeout("SetOpa(" + i +")", i * duration);
	}
}
function togglePGPDialog(show) {
	if (show) {
		FadeIn();
	}
	else {
		FadeOut();
	}
}
function keyhandler(e) {
	if (e.keyCode == 27)
		FadeOut();
}
document.onkeydown = keyhandler;
