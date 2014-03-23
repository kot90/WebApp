define([
	'jquery',
	'bootstrap'
], function($, bootstrap) {
	'use strict';

	var id = 'content';
	var getId = function{
		return id;
	}

	var initialize: function() {
			$('body').append('<div id="'+id+'"></div>');
	}

	return {
		initialize: initialize,
		getId: getId;
	}
});