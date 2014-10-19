Template.create.events({

	'submit #create-form' : function (e, t) {
		
		e.preventDefault();
		
		var email = t.find('#create-email').value;
		var password = t.find('#create-password').value;

		Accounts.createUser(
			{ email: email, password: password },
			function (err) {

				if (err) { alert(err.reason); }
				else { Session.set("showGame", "true"); }
			}
		);

		return false;
	}
});