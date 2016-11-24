////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// requireJS configuration
require.config({
	baseUrl: 'js/lib',										// libraries path

	paths: {
		app: '../app',										// views, models and utils
		tpl: '../tpl',										// html templates
		events: '../events'									// device events
	},

	map: {
		'*': {
			'app/models/employee': 'app/models/employee'	// mapping of models
		}
	},

	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		}
	}
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BackboneJS run
require(['jquery', 'backbone', 'app/router', '../events'], function ($, Backbone, Router) {

	/**
	 * Start application after the device is ready.
	 */
	document.addEventListener("deviceready", function () {
		var router = new Router();// Start Backbone app

		$("body").on("click", ".back-button", function (event) {
			event.preventDefault();
			window.history.back();
		});

		Backbone.history.start();
		events.initialize();// Add other device eventHandlers
	}, false);

});