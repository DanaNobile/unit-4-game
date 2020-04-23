
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

// $('#crystal1').attr('value', crystalValues[0]);

// $('#crystal2').attr('value', crystalValues[1]);

// $('#crystal3').attr('value', crystalValues[2]);

// $('#crystal4').attr('value', crystalValues[3]);





// $(".crystals").on("click", function () {
//     var randomCNumber = Math.floor(Math.random() * (12 - 1) + 1);
//     counter += 1;
//     console.log(randomCNumber);
//     console.log("Crystal Clicked" + counter);
// for (var i = 0; i < imageCrystal.length; i++) {
//     console.log("something")
// }




// $(function score() {
//     var totalScore = randomCNumber;
//     $(".scoreTally").text(randomCNumber);
//     //counter = counter + randomCNumber;
// });

//     });
//////Need to research how to hold value throughout session and regenerate upon load

// Display and Add Points





// });

// for (var i = 0; i < imageValue.length; i++) {
//     imageCrystal.attr("data-crystalvalue", numberOptions[i]);

// }


// //Displays:
// $("winCount").text(wins);
// // $("loseCount").text(losses);
// $("randomNumber").text(computerChoice);
// $("score").text(totalScore);




// //These are image button functions
// $(".crystal-image").on("click", function () {

//     // Clicking the button triggers an alert message.
//     console.log("crystal clicked");
//     // This makes counter go up each time user clicks a crystal
//     counter += 1;
//     console.log("crystal clicked" + counter);

// });

// $(function crystalValue1() {
//     var randomCNumber = Math.floor(Math.random() * (12 - 1) + 1);
//     $("crystal1")

// crystalValues = [];

// for (var i = 0; i < 4; i++) {
//     var crystalValues = Math.floor(Math.random() * (12 - 1) + 1);
//     console.log(crystalValues);




// }

// // var score = (crystalValues[]);
// $(".scoreTally").text(crystalValues);
// $(".crystalButton").on("click", function () {
//     console.log("clicked");

// });

// This function resets the game
function reset() {

}

var counter = 0;
// Game Starts



$(document).ready(function () {

    // Global Variables

    var wins = 0;
    var computerChoice = [];
    var losses = 0;
    var totalScore = 0;
    let counter = 0;
    var crystals = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;

    function startGame() {
        crystal1 = Math.floor(Math.random() * (12 - 1) + 1);
        crystal2 = Math.floor(Math.random() * (12 - 1) + 1);
        crystal3 = Math.floor(Math.random() * (12 - 1) + 1);
        crystal4 = Math.floor(Math.random() * (12 - 1) + 1);
    }

    startGame()

    // This generates COMPUTER Random Number:


    $(function randomNumber() {
        var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
        $(".computerChoice").text(randomNumber);
        console.log(randomNumber)
    });

    // Crystals

    $("#crystal1").on("click", function () {
        totalScore = crystal1 + totalScore
        $(".scoreTally").html("<h4>" + totalScore + "</h4>")
    });

    $("#crystal2").on("click", function () {
        totalScore = crystal2 + totalScore
        $(".scoreTally").html("<h4>" + totalScore + "</h4>")
    });
    $("#crystal3").on("click", function () {
        totalScore = crystal3 + totalScore
        $(".scoreTally").html("<h4>" + totalScore + "</h4>")
    });
    $("#crystal4").on("click", function () {
        totalScore = crystal4 + totalScore
        $(".scoreTally").html("<h4>" + totalScore + "</h4>")
    });

});







