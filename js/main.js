(() => { // eat my ass 
	console.log('loaded');

	var choices = ["rock", "Paper", "Scissors"];
	var computer;
	var player = document.querySelector("#weapon"); //text box
	var trigger = document.querySelector("#play"); // button
	var status = document.querySelector(".winlose"); // result	

function play_game() {
	console.log("called game function")

	computer = choices[Math.floor(Math.random() * choices.length)];
console.log(computer)

var player_choice = player.value;
console.log(player_choice);
if (computer.toLowercase() == player_choice.toLowercase()) {
	console.log("tie");
	status.textContent = "tie boi"
	}
	else if (player_choice.toLowercase() == "rock") {
if (computer.toLowercase() == "scissors") {
	console.log("win");
	status.textContent = `Win! ${player_choice} beats ${computer}`;
	}else {
		console.log("lose");
		status.textContent = `you lose ${computer} beats ${player_choice}`;

	}


	}

	else if (player_choice.toLowercase() == "paper") {
if (computer.toLowercase() == "rock") {
	console.log("win");
	status.textContent = `Win! ${player_choice} beats ${computer}`;
	}else {
		console.log("lose");
		status.textContent = `you lose ${computer} beats ${player_choice}`;

	}


	}

	else if (player_choice.toLowercase() == "scissors") {
if (computer.toLowercase() == "paper") {
	console.log("win");
	status.textContent = `Win! ${player_choice} beats ${computer}`;
	}else {
		console.log("lose");
		status.textContent = `you lose ${computer} beats ${player_choice}`;
	}


	}
}


trigger.addEventListener("click", play_game); //generating random number based on choices



})();