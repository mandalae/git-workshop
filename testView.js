Application.GitTestView = Ember.View.extend({
	git: null,
	darrylIsAGiant: function(){
		return this.get('git');
	}
});
