
// Computer generate random number between 19-120
// Radom number is displayed on screen at start of game
// Make images into buttons
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
    var computerChoice = [];
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var imageValue = [];
    let counter = 0;


    var gemOptions = ["../images/bird.png", "../images/tree.png", "../images/heart.png", "../images/gem.png"]

    //Displays:
    $("winCount").text(wins);
    $("loseCount").text(losses);
    $("randomNumber").text(computerChoice);
    $("score").text(totalScore);

    // Computer Random Number:

    $(function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
        document.write(randomNumber(19, 120));
        console.log(randomNumber);
    });


    //These are image button functions
    $(".crystal-image").on("click", function () {

        // Clicking the button triggers an alert message.
        console.log("crystal clicked");
        // This makes counter go up each time user clicks a crystal
        counter += 1;
        console.log("crystal clicked" + counter);

    });








});