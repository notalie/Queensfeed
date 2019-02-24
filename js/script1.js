var questionNo = 0;
var answerNo = 1;
var selectedAnswers = [];
var title="";
var questions = [{
	title: "Which of these two weapons do you think is more deadly?",
	answers: [
		"images/1.2.gif",
		"images/1.1.gif"
	]
},
{
	title: "If you had a problem at hand, would you:",
	answers: [
		"images/plan.jpg",
		"images/go.jpg"
	] 
},
{
	title: "Are you always in your rush to reach destination?",
	answers: [
		"images/no.jpg",
		"images/yes.jpg"
	]
},{
	title: "What would you rather be?",
	answers: [
		"images/strong.jpg",
		"images/fast.jpg"
	]
},
{
	title: "Pick the image that inspires you the most.",
	answers: [
		"images/5.1.gif",
		"images/5.2.gif"
	]
},
{
	title: "What would you rather be?",
	answers: [
		"images/tree1.jpeg",
		"images/tree2.jpeg"
	]
},{
	title: "What would you rather be?",
	answers: [
		"images/tree1.jpeg",
		"images/tree2.jpeg"
	]
},{
	title: "What would you rather be?",
	answers: [
		"images/tree1.jpeg",
		"images/tree2.jpeg"
	]
},{
	title: "What would you rather be?",
	answers: [
		"images/tree1.jpeg",
		"images/tree2.jpeg"
	]
},{
	title: "What would you rather be?",
	answers: [
		"images/tree1.jpeg",
		"images/tree2.jpeg"
	]
}
];


// var answers1 = 0;
// var answers2 = 0;

function updateQuestion() {
	$("#title").text("Question " + (questionNo + 1) + ": " + questions[questionNo].title);
	$("#qNo").text((questionNo + 1) + " out of 10");
	
	var answers = questions[questionNo].answers;
	$("#ans").html("");	
	for (var i = 0; i < answers.length; i++) {
		var img = $("<img>").attr("src", answers[i]);
		$("#ans").append(img);
		let index = i;
		$(img).click(function() {
			var answerImages = $("#ans").children();
			var firstImage = answerImages[0];
			var secondImage = answerImages[1];

			var imageClicked = $(event.target);

			$(firstImage).removeClass("selected");
			$(secondImage).removeClass("selected");

			imageClicked.addClass("selected");

			selectedAnswers[questionNo] = index;
			console.log(selectedAnswers);
		});

	}
	getResults();

}



function getResults(){
	let result1 = 0;
	let result2 = 0;
	for(var i = 0; i < selectedAnswers.length; i++) {
		if (i < 5) {
			result1 += selectedAnswers[i];
		}
		else {
			result2 += selectedAnswers[i];
		}
	}
	console.log(result1, result2);
	localStorage.setItem("answers1", result1);
	localStorage.setItem("answers2", result2);
}


function checkChecked() {
	var answerImages = $("#ans").children();
	var firstImage = answerImages[0];
	var secondImage = answerImages[1];

	if($(firstImage).hasClass("selected") || $(secondImage).hasClass("selected")) {
		return true;
	} else {
		return false;
	}

}


$(document).ready(function() {
	
	
	//updateImage();
	
	$("#next").click(function(event) {
	    console.log("next button clicked");
	    if (checkChecked()) {

	        if (selectedAnswers[questionNo] == undefined) {
	            selectedAnswers[questionNo] == 0;
	        }
	        if (questionNo + 1 < 10) {
	            questionNo++;
	            answerNo++;
	            updateQuestion();
	        } else {
	            window.location.href = "results.html";
	            //getResults();
	        }
	    } else {
	        alert("Please Choose An Option!!");
	    }
	});
	
	$("#back").click(function(event) {
		console.log("back button clicked");
		if (questionNo > 0) {
			questionNo--;
			answerNo--;
			updateQuestion();
		}
		else {
			window.location.href = "index.html";
		}
	});


updateQuestion();
});