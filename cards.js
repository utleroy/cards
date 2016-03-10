var create = document.getElementById("create");
var erase = document.getElementsByClassName("delete");
var input = document.getElementById("input");
var container = document.getElementById("container");
var card = document.getElementsByClassName("card"); //[this returns an array always]

create.addEventListener("click", createCard);

function createCard() {
  var output = '<div class="card"><section><p class="text">' + input.value + '</p></section><input type="button" class="delete" value="Delete"></div>'
          container.innerHTML += output;
          deleteBtnEventListener();
}

function deleteBtn(event) {
   var thisCard = event.target.parentElement;
  container.removeChild(thisCard)
}

function deleteBtnEventListener() {
	for(var i = 0; i < erase.length; i++) {
		var gone = document.getElementsByClassName("delete")
		   for( var j = 0; j < gone.length; j++)
		   	gone[j].addEventListener("click", deleteBtn)
	}
}




