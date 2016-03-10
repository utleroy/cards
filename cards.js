var create = document.getElementById("create");
var erase = document.getElementsByClassName("delete");
var input = document.getElementById("input");
var container = document.getElementById("container");
var card = document.getElementsByClassName("card"); //[this returns an array always]



function createCard() {
  var output = '<div class="card"><section><p class="text">' + input.value + '</p></section><input type="button" class="delete" value="Delete"></div>'
          container.innerHTML += output;
}

function deleteBtnEl() { 
  input.delete; 
		 {
		};
	}

create.addEventListener("click", createCard);
erase.addEventListener("click", deleteBtnEl);
