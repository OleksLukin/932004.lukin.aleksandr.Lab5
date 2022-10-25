var btn = document.querySelectorAll("button.modal-button");
var modals = document.querySelectorAll('.modal');

for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}


















/* 
function function1() { 
document.body.style.backgroundColor = 'blue'; 
modal.style.display = "block";
} 

function function2() { 
document.body.style.backgroundColor = 'red'; 
} 

function function3() { 
document.body.style.backgroundColor = 'green'; 
} 

*/


/* 
var modal = document.getElementById('myModal');
var modalOpen = document.getElementById("myBtn");
var modalClose = document.getElementsByClassName("close")[0];

modalOpen.onclick = function() {
	modal.style.display = "block";
}

modalClose.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

*/

