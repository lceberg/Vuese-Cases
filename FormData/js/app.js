;(function() {

	var FormData = new Vue({
		
		el: '#form-data',
		
		data: {
			fields: false
		},
		
		methods: {
				
			showFormData: function() {
				this.fields = {};
			
				var $dataFields = this.$els.dataform.querySelectorAll('[name]');
				
				for ( var i = 0; i < $dataFields.length; i++ ) {
					var $field = $dataFields[i];

					if ( $field.type === 'radio' && ! $field.checked ) {
						continue;
					}

					if ( $field.type === 'checkbox' && ! $field.checked ) {
						continue;
					}

					var fieldName  = $field.getAttribute('name');
					var fieldValue = $field.value;

					if ( $field.type !== 'checkbox' ) {
						this.fields[fieldName] = fieldValue;
						continue;
					}

					if ( typeof this.fields[fieldName] === 'undefined' ) {
						this.fields[fieldName] = [];
					}

					this.fields[fieldName].push(fieldValue);					
				}
				
			}
			
		}
		
	});

})();