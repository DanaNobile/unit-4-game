
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

    var imageClick = 0;






    //These are image button functions
    $(function () {
        $(document).on('click', '#birdImage', function () {
            console.log("bird picked");
        });
    });

    $(function () {
        $(document).on('click', '#treeImage', function () {
            console.log("tree picked");
        });
    });

    $(function () {
        $(document).on('click', '#heartImage', function () {
            console.log("heart picked");
        });
    });

    $(function () {
        $(document).on('click', '#gemImage', function () {
            console.log("gem picked");
        });
    });

});