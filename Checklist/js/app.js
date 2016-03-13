;(function() {

	var Checklist = new Vue({

		el: '#checklist',

		data: {
			tasks: [],
			taskName: ''
		},

		computed: {
			progress: function() {
				var tasksCount = this.tasks.length;

				if ( ! tasksCount ) {
					return 0;
				}

				var tasksDone = 0;

				for ( task in this.tasks ) {
					if ( ! this.tasks[task].done ) {
						continue;
					}

					tasksDone++;
				}

				var percentage = Math.ceil( ( 100 / tasksCount ) * tasksDone );

				return percentage > 100 ? 100 : percentage;
			}
		},

		methods: {
			addTask: function() {
				this.tasks.push({
					name: this.taskName,
					done: false
				});

				this.taskName = '';
			},

			toggleTask: function(task) {
				task.done = ! task.done;
			}
		}

	});

})();