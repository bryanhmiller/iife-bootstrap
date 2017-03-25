var Donator = (function(contributions){
	var donationArray = [];

	contributions.addDonation = function(newDonation) {
		donationArray.unshift(newDonation);
	}

	contributions.getDonation = function() {
		return donationArray;
	}

	return contributions;
})(Donator || {});