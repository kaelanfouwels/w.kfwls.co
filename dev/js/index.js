/*var duration = 250;
var escapdlg;

function fOut(element) {
	setTimeout(element + ".style.display = 'none'", duration);
	for (i = 1; i >= 0; i -= 0.01) {
		setTimeout(function(){element.style.opacity = i;}, i * duration);
	}
}
function fIn(element) {
	element.style.display = 'block';
	for (i = 0; i <= 1; i += 0.01) {
		setTimeout(function(){ element.style.opacity = i;}, i * duration);
	}
}

function toggleDialog(id, show) {
	var element = document.getElementById(id);
	escapdlg = element;
	if (show) {
		fIn(element);
	}
	else {
		fOut(element);
	}
}
function keyhandler(e) {
	if (e.keyCode == 27)
		fOut(escapdlg);
}
document.onkeydown = keyhandler;
*/