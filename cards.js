var create = document.getElementById("create");
var erase = document.getElementsByClassName("delete");
var input = document.getElementById("input");
var container = document.getElementById("container");
var card = document.getElementsByClassName("card"); //[this returns an array always]

create.addEventListener("click", createCard);

function createCard() {
  var output = '<div class="card"><section><p class="text">' + input.value + '</p></section><input type="button" class="delete" value="Delete"></div>'
               //^^^^^^^^^^^^CREATE HTML INSIDE THE JAVASCRIPT. THIS IS NEW TO ME^^^^^^^^^^^^^^^^
   container.innerHTML += output; // the plus/equal returns more than one value
  deleteBtnEl ();
}

function deleteBtnEl() { 
	for(var i = 0; i < erase.length; i++) {
		erase[i].addEventListener("click", function(event) {
		   container.remove(event.target.parentElement)
			// console.log(event.target.parentElement)
		});
	}
}


