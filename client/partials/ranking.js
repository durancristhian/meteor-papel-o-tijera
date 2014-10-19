Template.ranking.helpers({
	
	scoreList: function () {

		var result = Scores
			.find(
				{}, // All
				{ sort: { score: -1 } } // Order by score DESC
			)
			.fetch()
			.slice(0, 3); // Return top 3 scores

		return result;
	}
});