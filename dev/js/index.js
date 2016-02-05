var duration = 250;
var currentEscapeDialog;

function SetOpa(element, o) {
	element.style.opacity = o;
}

function FadeOut(element) {
	setTimeout(element + ".style.display = 'none'", duration);
	for (i = 0; i <= 1; i += 0.01) {
		setTimeout(SetOpa(element, 1 - i), i * duration);
	}
}
function FadeIn(element) {
	element.style.display = 'block';
	for (i = 0; i <= 1; i += 0.01) {
		setTimeout(SetOpa(element,i), i * duration);
	}
}

function toggleDialog(id, show) {
	var element = document.getElementById(id);
	currentEscapeDialog = element;
	if (show) {
		FadeIn(element);
	}
	else {
		FadeOut(element);
	}
}
function keyhandler(e) {
	if (e.keyCode == 27)
		FadeOut(currentEscapeDialog);
}
document.onkeydown = keyhandler;
