function beginTest(){
	var name = $('#nameinput').val();
	if(name != ""){
		console.log(name);
		localStorage.setItem("userName", name);
		window.location.href = "question1.html"
	} else {
		alert("Please input a name!");
	}
}

$(document).ready(function() {
	if(localStorage.getItem("userName")){
		var name2 = localStorage.getItem("userName");
		console.log(name);
		var resultsText = document.getElementById("resultsText");
		console.log(resultsText);
		resultsText.append(" " + name2 + "!");
	}
});

	