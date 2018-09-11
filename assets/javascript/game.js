// Create variables to hold wins, losses, crystalScore, targetScore and totalScore.
var wins = 0;
var losses = 0;
var images = ["./assets/images/crystal-1.jpg", "./assets/images/crystal-2.jpg", "./assets/images/crystal-3.jpg", "./assets/images/crystal-4.jpg"];
var targetNumber = "";
var totalScore = 0;

// Function generate random target number between 19 and 120.
function randomTargetNumber () {
    targetNumber = Math.floor(Math.random() * 102) + 19;
}

// Set variable crystal value between 1-12.
function resetCrystals () {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        crystal.attr("height", "100");
        $(".crystal-images").append(crystal);
    }
}

// Function reset HTML display.
function resetHTML () {
    $("#target-number").html(targetNumber);
    $("#win-losscounter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
    $(".resultscore").html(totalScore);
    $(".crystal-images").empty();
}

// function reset the whole game.
function totalReset () {
    randomTargetNumber ();
    totalScore = 0;
    resetHTML ();
    resetCrystals ();
}

// Start page setup
randomTargetNumber();
resetHTML();
resetCrystals();

// Click function
function crystalClick () {
    totalScore += parseInt($(this).attr("value"));
    $("#resultscore").html(totalScore);
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
