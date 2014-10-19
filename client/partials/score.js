Template.score.helpers({

	currentScore: function () {
		return Scores.findOne(
			{ _id: Meteor.userId() }
		);
	}
});