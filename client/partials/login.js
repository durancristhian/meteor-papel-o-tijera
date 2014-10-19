Template.login.events({

	'submit #login-form' : function (e, t) {
		
		e.preventDefault();
		
		var email = t.find('#login-email').value;
		var password = t.find('#login-password').value;

		Meteor.loginWithPassword(email, password, function (err) {

			if (err) { alert(err.reason); }
			else { Session.set("showGame", "true"); }
		});

		return false;
	}
});