/* SHOPPING LIST APP */

// STATE OBJECT
var state = {
	items: [],
};

// STATE MOD FUNCTIONS

// add
var addItem = function(state, item) {
	state.items.push(item);
};

// delete
var deleteItem = function(state, item) {
	state.items.splice(item, 1);
};


// RENDER FUNCTIONS

// add
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


// EVENT LISTENERS

// add
$(document).ready(function() {
	$('#js-shopping-list-form').submit(function(e) {
		e.preventDefault();
		addItem(state, $('#shopping-list-entry').val());
		renderList(state, $('.shopping-list'));
		$(this)[0].reset();
	});
});

// delete
$(document).on('click', '.shopping-item-delete', function() {
	$(this).parent().parent().remove();
	deleteItem(state, $(this));
	console.log("bye bye!");
});

// check
$(document).on('click', '.shopping-item-toggle', function() {
	$(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
});
