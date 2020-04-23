
// Computer generate random number between 19-120
// Radom number is displayed on screen at start of game
// Make images interactive
// Assign random value to image buttons between 1-12
// When player clicks button, value is added to score (counter)
// Win => total score = random number displayed at beginning
// Lose => total score > random number displayed at beginning  
// Restart happens after win or lose

// New game
// New random number
// Images get new value
// User score and score counter start set to 0
// Keeps count of total wins and loses throughout game until page is refreshed



// Notes

//Function to generate number within range
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);

// // Call function within range for image value
// document.write(randomNumber(1, 12));

// // Call function within range for computerChoice
// document.write(randomNumber(19, 120));


















// //Displays:
// $("winCount").text(wins);
// // $("loseCount").text(losses);
// $("randomNumber").text(computerChoice);
// $("score").text(totalScore);





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
    // This generates COMPUTER Random Number:


    $(function randomNumber() {
        var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
        $(".computerChoice").text(randomNumber);
        console.log(randomNumber);
        // });

        startGame();


        // This adds crystal value to total score: 
        $("#crystal1").on("click", function () {
            totalScore = crystal1 + totalScore
            $(".scoreTally").html("<h4>" + totalScore + "</h4>")
            if (totalScore === randomNumber) {
                wins++;
                $("#wins").html("Wins: " + wins);
                console.log("win");
            }
            else if (totalScore > randomNumber) {
                losses++
                $("#losses").text("Losses: " + losses);
                console.log("loss");
            }
        });


        $("#crystal2").on("click", function () {
            totalScore = crystal2 + totalScore
            $(".scoreTally").html("<h4>" + totalScore + "</h4>")

            if (totalScore === randomNumber) {
                wins++;
                $("#wins").html("Wins: " + wins);
                console.log("win");
            }
            else if (totalScore > randomNumber) {
                losses++
                $("#losses").text("Losses: " + losses);
                console.log("loss");
            }
        });

        $("#crystal3").on("click", function () {
            totalScore = crystal3 + totalScore
            $(".scoreTally").html("<h4>" + totalScore + "</h4>")
            if (totalScore === randomNumber) {
                wins++;
                $("#wins").html("Wins: " + wins);
                console.log("win");
            }
            else if (totalScore > randomNumber) {
                losses++
                $("#losses").text("Losses: " + losses);
                console.log("loss");
            }

        });

        $("#crystal4").on("click", function () {
            totalScore = crystal4 + totalScore
            $(".scoreTally").html("<h4>" + totalScore + "</h4>")

            if (totalScore === randomNumber) {
                wins++;
                $("#wins").html("Wins: " + wins);
                console.log("win");
            }
            else if (totalScore > randomNumber) {
                losses++
                $("#losses").text("Losses: " + losses);
                console.log("loss");
            }

        });





    });
});





