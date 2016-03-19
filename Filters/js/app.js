;(function() {

	var Filters = new Vue({

		el: '#filters',

		data: {

			items: [
				{ color: 'red',   shape: 'circle' },
				{ color: 'green', shape: 'circle' },
				{ color: 'blue',  shape: 'circle' },
				{ color: 'red',   shape: 'triangle' },
				{ color: 'green', shape: 'triangle' },
				{ color: 'blue',  shape: 'triangle' },
				{ color: 'red',   shape: 'square' },
				{ color: 'green', shape: 'square' },
				{ color: 'blue',  shape: 'square' },
				{ color: 'red',   shape: 'triangle' },
				{ color: 'green', shape: 'triangle' },
				{ color: 'blue',  shape: 'triangle' },
				{ color: 'red',   shape: 'square' },
				{ color: 'green', shape: 'square' },
				{ color: 'blue',  shape: 'square' },
				{ color: 'red',   shape: 'circle' },
				{ color: 'green', shape: 'circle' },
				{ color: 'blue',  shape: 'circle' },
				{ color: 'red',   shape: 'square' },
				{ color: 'green', shape: 'square' },
				{ color: 'blue',  shape: 'square' },
				{ color: 'red',   shape: 'circle' },
				{ color: 'green', shape: 'circle' },
				{ color: 'blue',  shape: 'circle' },
				{ color: 'red',   shape: 'triangle' },
				{ color: 'green', shape: 'triangle' },
				{ color: 'blue',  shape: 'triangle' },
			],

			filter: {
				color: '',
				shape: ''
			}

		},

		methods: {

			itemClasses: function(item) {
				return item.color + ' ' + item.shape;
			},

			showItem: function(item) {

				var showItem = true;

				for ( var property in this.filter ) {
					if ( this.filter[property] && this.filter[property] !== item[property] ) {
						showItem = false;
					}
				}

				return showItem;
			}

		}

	});

})();