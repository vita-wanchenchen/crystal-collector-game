// Create variables to hold wins, losses, crystalScore, targetScore and totalScore.
var wins = 0;
var losses = 0;
var crystalsValue = [];
var targetNumber = "";
var totalScore = 0;

// Function generate random target number between 19 and 120.
function randomTargetNumber () {
    targetNumber = Math.floor(Math.random() * 102) + 19;
}

// Set variable crystal value between 1-12.
/*
function fourCrystalsValue(){
	for (var i = 0; i < 4; i++) {
		var values = Math.floor(Math.random() * 12) + 1;
		crystalsValue.push(values);
	}
	console.log(crystalsValue)
}

crystalsValue();
*/
/*
var crystal1 = Math.floor(Math.random() * 12) + 1
var crystal2 = Math.floor(Math.random() * 12) + 1
var crystal3 = Math.floor(Math.random() * 12) + 1
var crystal4 = Math.floor(Math.random() * 12) + 1
*/

function resetCrystalValue () {
    for (var i = 0; i < 4; i++) {
        var crystals = $(".crystalsvalue");
        crystals.attr("value", (Math.floor(Math.random() * 12) + 1));
        $(".crystalsvalue").append(crystals)
    }
}

// Function reset HTML display.
function resetHTML () {
    $("#target-number").html(targetNumber);
    $("#win-losscounter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
    $(".resultscore").html(totalScore);
    $(".crystalsvalue").empty();
}

// function reset the whole game.
function totalReset () {
    randomTargetNumber ();
    targetNumber = 0;
    resetHTML ();
    resetCrystalValue ();
}

// Start page setup
randomTargetNumber();
resetHTML();
resetCrystalValue();

// Click function
function crystalClick () {
    totalScore += parseInt($(this).attr("value"));
    $(".score-number").html(totalScore);
    if (totalScore == targetNumber) {
        wins++;
        totalReset();
    }
    else if (totalScore > targetNumber) {
        losses++;
        totalReset();
    };
};

$(document).on("click", ".crystal", crystalClick);
