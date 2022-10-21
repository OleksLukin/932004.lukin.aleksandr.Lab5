var popup = document.getElementById('myPopup');
var popupOpen = document.getElementById("myBtn");
var popupClose = document.getElementsByClassName("close")[0];

popupOpen.onclick = function() {
	popup.style.display = "block";
}

popupClose.onclick = function() {
	popup.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == popup) {
		popup.style.display = "none";
	}
}


