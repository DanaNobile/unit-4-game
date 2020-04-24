
// Computer generate random number between 19-120
// Radom number is displayed on screen at start of game
// Make images interactive with click
// Assign random value to image buttons between 1-12
// When player clicks button, value is added to score 
// Win => total score = random number displayed at beginning
// Lose => total score > random number displayed at beginning  
// Restart happens after win or lose

// New game
// New random number
// Images get new value
// User total score counter start set to 0
// Keeps count of total wins and loses throughout game until reset implemented


$(document).ready(function () {

    // Global Variables

    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;


    function startGame() {
        // This generates random crystal numbers beteen 1-12:
        crystal1 = Math.floor(Math.random() * (12 - 1) + 1);
        crystal2 = Math.floor(Math.random() * (12 - 1) + 1);
        crystal3 = Math.floor(Math.random() * (12 - 1) + 1);
        crystal4 = Math.floor(Math.random() * (12 - 1) + 1);
        console.log(crystal1);
        console.log(crystal2);
        console.log(crystal3);
        console.log(crystal4);
    }

    $(function randomNumber() {
        // This generates COMPUTER Random Number:
        var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
        $(".computerChoice").text(randomNumber);
        console.log(randomNumber);

        startGame();

        // This adds crystal value to total score: 
        $("#crystal1").on("click", function () {
            totalScore = crystal1 + totalScore
            $(".scoreTally").html("<h4>" + totalScore + "</h4>")
            play()
        });


        $("#crystal2").on("click", function () {
            totalScore = crystal2 + totalScore
            $(".scoreTally").html("<h4>" + totalScore + "</h4>")
            play()
        });

        $("#crystal3").on("click", function () {
            totalScore = crystal3 + totalScore
            $(".scoreTally").html("<h4>" + totalScore + "</h4>")
            play()
        });

        $("#crystal4").on("click", function () {
            totalScore = crystal4 + totalScore
            $(".scoreTally").html("<h4>" + totalScore + "</h4>")
            play()
        });


        function reset() {
            totalScore = 0;
            randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
            $(".computerChoice").html(randomNumber);
            $(".scoreTally").html(totalScore);
        }

        function play() {
            if (totalScore === randomNumber) {
                wins++;
                $("#wins").html("Wins: " + wins);
                console.log("win");
            }
            else if (totalScore > randomNumber) {
                losses++
                $("#losses").text("Losses: " + losses);
                console.log("loss");
                reset();
                startGame();
            }
        }

    });
});


