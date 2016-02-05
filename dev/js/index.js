var duration = 25000;
var currentEscapeDialog;

function fOut(element) {
	setTimeout(element + ".style.display = 'none'", duration);
	for (i = 1; i >= 0; i -= 0.01) {
		setTimeout(element.style.opacity = i, i * duration);
	}
}
function fIn(element) {
	element.style.display = 'block';
	for (i = 0; i <= 1; i += 0.01) {
		setTimeout(element.style.opacity = i, i * duration);
	}
}

function toggleDialog(id, show) {
	var element = document.getElementById(id);
	currentEscapeDialog = element;
	if (show) {
		fIn(element);
	}
	else {
		fOut(element);
	}
}
function keyhandler(e) {
	if (e.keyCode == 27)
		fOut(currentEscapeDialog);
}
document.onkeydown = keyhandler;
