
// Declare global variables
var wins = 0;
var losses = 0;
sum = 0;
var crystal = [0, 0, 0, 0];



// Computer assigns a random number between 19 and 120 inclusive that the user will try to match
var matchNum = Math.floor(Math.random() * 102) + 19;
console.log(matchNum);

// Computer assigns different random numbers between 1 and 12 inclusive to each of the crystals 
for (var i=0; i<4; i++) {
    crystal[i] = Math.floor(Math.random() * 12) + 1;
    console.log(crystal[i]);
}

