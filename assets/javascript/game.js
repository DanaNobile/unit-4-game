
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


// This function resets the game
function reset() {

}


// Game Starts

$(document).ready(function () {

    // Global Variables

    var wins = 0;
    var computerChoice = [];
    var losses = 0;
    var totalScore = 0;
    var imageValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    let counter = 0;
    let imageCrystal = ["../images/bird.png", "../images/tree.png", "../images/heart.png", "../images/gem.png"]


    // This generates COMPUTER Random Number:


    $(function randomNumber() {
        var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
        $(".computerChoice").text(randomNumber);
        console.log(randomNumber)
    });

    // This generates CRYSTAL Random Number and Counts Clicks:


    $("#crystals").on("click", function () {
        var randomCNumber = Math.floor(Math.random() * (12 - 1) + 1);
        counter += 1;
        console.log(randomCNumber);
        console.log("Crystal Clicked" + counter);


        $(function score() {
            var totalScore = (randomCNumber);
            $(".scoreTally").text(totalScore);
        });

    });
    //////Need to research how to hold value throughout session and regenerate upon load

    // Display and Add Points





});

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








// // })