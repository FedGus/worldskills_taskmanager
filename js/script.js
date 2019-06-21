var app = new Vue ({
	el: '#app',
	data: {
		message: 'Delete item ',
		items: [
		{ text: "New item" }
		]
	},
	methods: {
		addItem: function () {
			var input = document.getElementById('itemForm');

			if (input.value !== '') {
				this.items.push({
					text:input.value
				})
				input.value = "";
			}
		},
		deleteItem: function(index) {
			this.items.splice(index, 1);
		}
	}

});


$('section').sortable({
	connectWith: 'section'
  }).disableSelection();