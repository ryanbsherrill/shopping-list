/* JS for shopping-list-app */

// single state object
var state = {
	items: [],
};

// state modification functions
var addItem = function(state, item) {
	state.items.push(item);
};

// render functions
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


// event listeners
$(document).ready(function() {
	$('#js-shopping-list-form').submit(function(e) {
		e.preventDefault();
		addItem(state, $('#shopping-list-entry').val());
		renderList(state, $('.shopping-list'));
	});
});

/*
IMPORTANT CLASSES & IDs
form - #js-shopping-list-form
input - #shopping-list-

add, check, delete
*/