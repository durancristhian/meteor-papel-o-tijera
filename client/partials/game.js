var options = ["stone", "paper", "scissor"];

Template.game.events({

	'click .option' : function (e) {
		
		// I build a random number between 0 and 2
		var machineOption = Math.floor((Math.random() * 3));

		var machineChoice = options[machineOption];
		var userChoice = $(e.currentTarget).data("value");

		var result = "";

		switch (userChoice) {
			case "stone":

				switch (machineChoice) {
					case "stone":

						result = "deuce";
						break;
					case "paper":
						
						result = "lose";
						break;
					case "scissor":
	
						result = "win";
						break;
				}
				break;
			case "paper":
				
				switch (machineChoice) {
					case "stone":

						result = "win";
						break;
					case "paper":
						
						result = "deuce";
						break;
					case "scissor":
	
						result = "lose";
						break;
				}
				break;
			case "scissor":
				
				switch (machineChoice) {
					case "stone":

						result = "lose";
						break;
					case "paper":
						
						result = "win";
						break;
					case "scissor":
	
						result = "deuce";
						break;
				}
				break;
		}

		showLabel(result);
		updateScore(result);
	}
});

function showLabel (result) {

	$(".label").hide();
	$(".label." + result).show();
}

function updateScore (result) {
	
	var currentScore = Scores.findOne(
		{ _id: Meteor.userId() }
	);

	switch (result) {
		case "lose":

			Scores.upsert(
				{ _id: Meteor.userId() },
				{ $set: 
					{ 
						name: Meteor.user().emails[0].address,
						score: currentScore.score - 10
					}
				}
			);
			break;
		case "win":

			Scores.upsert(
				{ _id: Meteor.userId() },
				{ 
					$inc: { score: 50 },
					$set: { name: Meteor.user().emails[0].address }
				}
			);
			break;
	}
}