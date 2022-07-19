var userplay = prompt("Do you choose rock, paper or scissors?");
var computerplay = Math.random();
if (computerplay < 0.34) {
    computerplay = "rock";
} else if(computerplay <= 0.67) {
    computerplay = "paper";
} else {
    computerplay = "scissors";
}

var compare = function(userplay, computerplay) {
    if(userplay === computerplay) {
    console.log("The result is a tie!");
}
if(userplay === "rock") {
    if(computerplay === "scissors") {
        console.log("rock wins");
    } else {
        console.log("paper wins");
    }
}
if(userplay === "paper") {
    if(computerplay === "rock") {
        console.log("paper wins");
    } else {
        if(computerplay === "scissors") {
            console.log("scissors wins");
    }
}
if(userplay === "scissors") {
    if(computerplay === "rock") {
        console.log("rock wins");
    } else {
        if(computerplay === "paper") {
            console.log("scissors wins");
        }
    }
}
}
};
console.log("User play: " + userplay);
console.log("Computer play: " + computerplay);
compare(userplay, computerplay);