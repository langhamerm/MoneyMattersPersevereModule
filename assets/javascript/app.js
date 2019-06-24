var startScreen;
var gameHTML;
var counter = 180;
var questionArray = ["What is the benefit of withdrawing the Extra cash on a vacation?", "Which is not a factor that can decrease your budget?", "Brock's large snake-like rock Pokemon.", "Which Pokemon is not a legendary bird?", "Select the evolve for of Eevee.", "First Pokemon in the show to hatch from an egg?", "The first Pokemon Movie featured the battle of ________ vs. _______.", "Who was the mascot of Team Rocket?"];
var readingArray = ["<h2>Meet Barbra</h2>" + "<p id='texties'>Barbara has it all planned out – a girls’ getaway weekend combined with seeing her son in Michigan. She is leaving in three weeks and she has saved up specifically for the trip.</p>" + "<p id='texties'>Fortunately, Barbara always has been a good saver, putting away some of her paycheck every month for things like emergencies, trips and retirement. Barbara made the following spending plan for her vacation: </p>" + "<h2>How Did She Do It?</h2>" + "<p id='texties'>Barbara’s spending plan allowed her to afford a $957 vacation by spreading out the charges across several months — using some savings, some cash and some credit card charges.</p>" + "<p id='texties'>By taking out cash to cover unexpected costs and “fun” money, Barbara is able to track how much she has left. But she also doesn’t feel like she has to spend it all. Whatever is left over will go back in her savings or will help pay the post-trip credit card bill.</p>", "<h2>Getting Started</h2>" + "<p id='texties'>When Barbara graduated from high school, she went straight to work making an hourly wage. Although her paycheck was pretty slim, she knew she had to start saving a little bit each month. </p>" + "<p id='texties'>To make this happen, she put herself on a spending plan (aka, budget), analyzing her spending to see where she could cut back and putting any leftover funds in savings.</p>" + "<p id='texties'>Barbara has adjusted her spending plan as her income increased and her life circumstances changed – such as when she got divorced and when her son moved out of her house. </p>" + "<p id='texties'>Barbara has a steady job where she puts away money for her retirement in a 401(k) plan. In addition, she has $50 each month automatically transferred from her checking account into her savings account; she watches her monthly expenses and she uses credit to help cover gaps.</p>", ];
var answerArray = [["Shopping money", "Unexpected/Emergency Expenses", "Easy to track your spending", "All of the above"], ["Marital Status", "Children", "Wage/Salary Increase", "Work Commute"], ["Geodude", "Golem", "Machop", "Onyx"], ["Pidgey", "Articuno", "Zapados", "Moltres"], ["Vaporeon", "Jolteon", "Flareon", "All of the Above"], ["Pichu", "Meowth", "Togepi", "Jigglypuff"], ["Lugia vs. Ho-oh", "Mew vs. Mewtwo", "Hitmonchan vs. Hitmonlee", "Trump vs. Hillary"], ["Meowth", "Koffing", "Ekans", "Zubat"]];
var correctAnswers = ["D. All of the above", "C. Wage/Salary Increase", "D. Onyx", "A. Pidgey", "D. All of the Above", "C. Togepi", "B. Mew vs. Mewtwo", "A. Meowth"];
var questionCounter = 0;
var selecterAnswer; 
var Timer;
var correctCounter = 0;
var incorrectCounter = 0;
var timedOutCounter = 0;

// var myMusic = new Audio("assets/Music/Pokémon Theme Song.mp3");

var imageArray = ["<img src='assets/images/Barbara.png'>" + "<img src='assets/images/TripCost.png'>","<img src='assets/images/PigBank.png'>", "<img src='assets/images/onyx.png'>", "<img src='assets/images/PIDGE.png'>", ["<img src='assets/images/vapo.png'>", "<img src='assets/images/flare.png'>", "<img src='assets/images/jolteon.png'>"], "<img src='assets/images/togetoge.png'>", ["<img src='assets/images/MEW.png'>", "<img src='assets/images/mewtwo.png'>"], "<img src='assets/images/MEOWWWTH.png'>"]

$(document).ready(function(){
    function screenStart() {
        startScreen = "<p class='text-center main-button-container'><a class='btn start-button' href='#' role='button'><img src='assets/images/MoneyButton.png'>Begin Module</a></p>";
        $(".gameContent").html(startScreen);
    }
    screenStart();
});

$("body").on("click", ".start-button", function(event){ 
	gameStart();

	countdown();

	// myMusic.play();


});

// $("body").on("click", ".reading-button", function(event){ 
// 	readStart();

// 	countdown();



// });

$("body").on("click", ".answer", function(event){
    selecterAnswer = $(this).text();
    if (selecterAnswer === correctAnswers[questionCounter]) {
        clearInterval(Timer);
        winner();
    }
    else {
        clearInterval(Timer);
        loser();
    }
});
$("body").on("click", ".reset-button", function(event){
	resetGame();
});

function timeUpLoss() {
	timedOutCounter++;
	gameHTML = "<p id='texties' class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p id='texties' class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".gameContent").html(gameHTML);
	setTimeout(wait, 2000);
}

function winner() {
	correctCounter++;
	gameHTML = "<p id='texties' class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p id='texties' class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>";
	$(".gameContent").html(gameHTML);
    setTimeout(wait, 2000);
}

function loser() {
    incorrectCounter++;
	gameHTML = "<p id='texties' class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p id='texties' class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>";
	$(".gameContent").html(gameHTML);
    setTimeout(wait, 2000);
}

function gameStart() {
	gameHTML = "<p id='texties' class='text-center timer-p'>Time Remaining: <span class='timer'>180</span></p><p id='texties' class='text-center'>" + readingArray[questionCounter] + imageArray[questionCounter] + `<p id='texties'>${questionArray[questionCounter]}</p>` + "</p><p id='texties' class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p id='texties' class='answer'>B. "+answerArray[questionCounter][1]+"</p><p id='texties' class='answer'>C. "+answerArray[questionCounter][2]+"</p><p id='texties' class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".gameContent").html(gameHTML);
	
}

// function readStart() {
// 	gameHTML = "<p id='texties' class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p id='texties' class='text-center'>" + readingArray[questionCounter] + "</p><p id='texties' class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p id='texties' class='answer'>B. "+answerArray[questionCounter][1]+"</p><p id='texties' class='answer'>C. "+answerArray[questionCounter][2]+"</p><p id='texties' class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
// 	$(".gameContent").html(gameHTML);
	
// }

function wait() {
	if (questionCounter < 7) {
        questionCounter++;
        gameStart();
        counter = 180;
        countdown();
	}
	else {
		finalScreen();
	}
};


function countdown() {
	Timer = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(Timer);
			timeUpLoss();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

// function readingCountdown() {
// 	Timer = setInterval(threeMinutes, 1000);
// 	function threeMinutes() {
// 		if (counter === 0) {
// 			clearInterval(Timer);
// 			timeUpLoss();
// 		}
// 		if (counter > 0) {
// 			counter--;
// 		}
// 		$(".timer").html(counter);
// 	}
// }

function finalScreen() {
	gameHTML = "<p id='texties' class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p id='texties' class='text-center'>Your Score:" + "</p>" + "<p id='texties' class='summary-correct'>Correct Answers: " + correctCounter + "</p>" + "<p id='texties'>Wrong Answers: " + incorrectCounter + "</p>" + "<p id='texties'>Unanswered: " + timedOutCounter + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-danger btn-lg btn-block reset-button' href='#' role='button'>Restart!</a></p>";
	$(".gameContent").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctCounter = 0;
	incorrectCounter = 0;
	timedOutCounter = 0;
	counter = 180;
	gameStart();
    countdown();
}