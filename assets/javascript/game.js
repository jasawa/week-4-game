
// Declare global variables
var wins = 0;
var losses = 0;
var sum = 0;
var matchNum = 1;
// note: in crystal array [0] is amethyst, [1] is blue, [2] is quartz, [3] is ruby 
var crystalNum = [0, 0, 0, 0];




function startNewGame() {
        // reset sum to 0 and display 0 for user
        sum = 0;
        $("#sum").text(sum);
        // Computer assigns a random number between 19 and 120 inclusive that the user will try to match
        matchNum = Math.floor(Math.random() * 102) + 19;
        console.log(matchNum);
        $("#number-to-match").text(matchNum);

        // Computer assigns different random numbers between 1 and 12 inclusive to each of the crystals 
        for (var i=0; i<4; i++) {
            crystalNum[i] = Math.floor(Math.random() * 12) + 1;
        }
        console.log(crystalNum);

}


function playGame() {
    if (sum === matchNum) {
            wins = wins + 1;
            console.log("wins are " + wins);
            $("#win-or-lose").text("You win!");
            $("#Wins").html("Wins: " + wins);
            startNewGame();
    }
    if (sum > matchNum) {
            losses = losses + 1;
            console.log("losses are " + losses);
            $("#win-or-lose").text("Sorry, you lose.");
            $("#Losses").html("Losses: " + losses);
            startNewGame();
    } 
} 


        // a crystal is clicked and add its value to the sum
        $("#amethyst").on("click", function () {
            sum = sum + crystalNum[0];
            console.log("amethyst " + crystalNum[0] + " Sum is " + sum);
            $("#sum").text(sum);
            playGame();
        });

        $("#blue").on("click", function () {
            sum = sum + crystalNum[1];
            console.log("blue " + crystalNum[1] + " Sum is " + sum);
            $("#sum").text(sum);
            playGame();
        });

        $("#quartz").on("click", function () {
            sum = sum + crystalNum[2];
            console.log("quartz " + crystalNum[2] + " Sum is " + sum);
            $("#sum").text(sum);
            playGame();
        });

        $("#ruby").on("click", function () {
            sum = sum + crystalNum[3];
            console.log("ruby " + crystalNum[3] + " Sum is " + sum);
            $("#sum").text(sum);
            playGame();
        });


playGame();
startNewGame();


