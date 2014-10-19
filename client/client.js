Session.setDefault('showGame', 'false');

UI.body.helpers({

	showGame: function (state) {
		return Session.equals('showGame', state);
	}
});