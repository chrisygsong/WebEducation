Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	wainOn: function() { return Meteor.subscribe('posts'); }
});

Router.map(function() {
	this.route('postsList', {path: '/'});
});