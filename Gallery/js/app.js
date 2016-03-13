;(function() {

	Vue.component('gallery', {		
		data : function() {
			return {
				count : 0,
				active: 0
			};
		},

		events: {
			'increase-index': function() {
				this.count++;
			},

			'goto-image': function(index) {
				this.active = index;
			}
		},

		template: '<div class="col-md-5 col-md-offset-3 list-group"><slot></slot></div>'
	});

	Vue.component('gallery-image', {
		props   : ['src', 'index'],
		template: '<img :src="src" alt="" v-show="index === this.$parent.active" class="list-group-item" />',
		ready   : function() {
			this.index = this.$parent.count;
			this.$dispatch( 'increase-index' );
		}
	});

	Vue.component('gallery-navigaton', {
		data: function() {
			return {
				count: 0,
				active: 0
			};
		},

		ready: function() {
			this.count = this.$parent.count;
		},

		methods: {
			goToImage: function(index) {
				this.active = index;
				this.$dispatch( 'goto-image', index );
			}
		},

		template: '<div class="text-center">' +
			'<a v-for="n of count" class="btn btn-default" :class="{ \'btn-info\' : n === active }" @click.prevent="goToImage(n)">{{ n + 1 }}</a>' +
		'</div>'
	});

	var Gallery = new Vue({

		el: '#gallery'

	});

})();