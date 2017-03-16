/* SHOPPING LIST APP */

// STATE OBJECT
var state = {
	items: [],
};

// STATE MOD FUNCTIONS

// add
var addItem = function(item) {
	state.items.push(item);
};

// delete
var deleteItem = function(item) {
	state.items.splice(item, 1);
};


// RENDER FUNCTIONS

// add
var renderList = function(element) {
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
		addItem($('#shopping-list-entry').val());
		renderList($('.shopping-list'));
		$('#shopping-list-entry').val('');
		//$(this)[0].reset();
	});
	
	
	// delete
	$('.shopping-list').on('click', '.shopping-item-delete', function() {
		$(this).parent().parent().remove();
		deleteItem($(this));
		console.log("bye bye!");
	});

	// check
	$('.shopping-list').on('click', '.shopping-item-toggle', function() {
		$(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
	});
});
