function clearList(event) {
	$("li").remove();
}

function removeClicked() {
	$(this).parent().remove();
}

function addEntry(event) {
	if (event.which != 13)
		return;
	var entry = $("<li></li>");
	var checkbox = $("<input type=\"checkbox\"></input>");	
	checkbox.click(removeClicked);
	checkbox.appendTo(entry);
	entry.append($("#input-text").val());

	entry.appendTo("#list");
	$("#input-text").val("");
}

function main()
{
	$("#input-text").keypress(addEntry);
	$("#clear-button").click(clearList);
}

$(document).ready(main);
