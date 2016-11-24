////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Device event handlers
var events = {

	/**
	 * Add event handlers.
	 */
	initialize: function() {
		document.addEventListener('resume', this.onResume.bind(this), false);
	},

	/**
	 * 'resume' event handler.
	 * Common events are: 'pause', 'deviceready', etc.
	 */
	onResume: function() {
		this.receivedEvent('resume');
	},

	/**
	 * Update DOM on a Received Event.
	 * @param id event id
	 */
	receivedEvent: function(id) {
		console.log('Received Event: ' + id);
	}
};