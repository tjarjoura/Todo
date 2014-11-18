function addTodo()
{
	var txt = document.getElementById("input-text").value;
	if (txt.length == 0)
		return;

	var todo_list = document.getElementById("list");
	var entry = document.createElement("li");
	var entry_text = document.createTextNode(txt); 
	var check_box = document.createElement("input");
	check_box.type = "checkbox";
	check_box.onclick = function() {check_box.checked = true; removeChecked();}

	entry.appendChild(check_box);
	entry.appendChild(entry_text);
	todo_list.appendChild(entry);
	document.getElementById("input-text").value = "";
}

function handleKey(event)
{
	if (event.which == 13 || event.keyCode == 14) 
		addTodo();
}

function clearTodo()
{
	var list = document.getElementById("list");
	var list_entries = list.children;

	if (list_entries.length > 0) {
		while (list_entries.length > 0) 
			list.removeChild(list_entries[0]);
	}
}

function removeChecked()
{
	var list = document.getElementById("list");

	for (var i = 0; i < list.children.length; i++) {	
		if (list.children[i].children[0].checked) {
			list.removeChild(list.children[i]);
			return;
		}
	}
}

function updateTodo()
{
	var list = document.getElementById("list");
	var list_entries = list.children;

	var i = 0;
	while (i != list_entries.length) {
		var entry = list_entries[i]; 
		console.log(entry.children);
		if (entry.children[0].checked) {
			list.removeChild(list_entries[i]);
		} else
			i++;
	}	
}

document.getElementById("submit-button").onclick = addTodo; 
document.getElementById("input-text").onkeypress = handleKey;
document.getElementById("clear-button").onclick = clearTodo;
