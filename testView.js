Application.GitTestView = Ember.View.extend({
	gitTest: 'Yay',
	git: null,
	darrylIsAGiant: function(){
		return this.get('git');
	}
});
