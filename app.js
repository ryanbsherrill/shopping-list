/* SHOPPING LIST APP */

// state object
var state = {
	items: [],
};


// state mod functions

// add item
var addItem = function(state, item) {
	state.items.push(item);
};

// check item
// uncheck item

// delete item
var deleteItem = function(state, item) {
	delete state.item;
};



// RENDER FUNCTIONS

// add item
var renderList = function(state, element) {
	var itemsHTML = state.items.map(function(item) {
		return '<li>' + 
		         '<span class="shopping-item">' + item + '</span>' + 
		         '<div class="shopping-item-controls">' +
                   '<button class="shopping-item-toggle">' +
                     '<span class="button-label">' + "check" + '</span>' +
                   '</button>' + 
                   '<button class="shopping-item-delete">' + 
                     '<span class="button-label">' + "delete" + '</span>' + 
            	   '</button>' + 
                 '</div>' + 
        	   '</li>';
	});
	element.html(itemsHTML);
};

// check item
// uncheck item
// delete item

// EVENT LISTENERS

// listen for add button
$(document).ready(function() {
	$('#js-shopping-list-form').submit(function(e) {
		e.preventDefault();
		addItem(state, $('#shopping-list-entry').val());
		renderList(state, $('.shopping-list'));
	});
});

// listen for check button
$(document).on('click', '.shopping-item-toggle', function() {
	$(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
});

// listen for delete button
$(document).on('click', '.shopping-item-delete', function() {
	alert("BYE BYE!");
	$(this).parent().parent().remove();
});

/*
IMPORTANT CLASSES & IDs:
form - ID - "#js-shopping-list-form"
ul - class - ".shopping-list"
input - ID - "#shopping-list-entry"

FUNCTIONALITY TO ADD:
add - DONE
check - DONE
delete - DONE
*/