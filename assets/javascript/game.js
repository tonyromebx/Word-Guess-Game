var randomWords = [
["R", "O", "C", "K", "Y"],
  ["D","I","S","C","0"],
  ["S","T","A","R","W","A","R","S"],
  ["B","E","E","G","E","E","S"],
  ["R","O","L","L","E","R","S","A","T","E"],
  ["A","F","R","O"]
]
var random = Math.floor((Math.random()*(randomWords.length-1))); 

var choosenWord = randomWords[random];
var newWord = new Array(choosenWord.length);
var error = 0;

for (var i = 0; i < newWord.length; i++){
	newWord[i] = "_ ";
}

function printRightWord(){
	for (var i = 0; i < newWord.length; i++){
	var guessedLetters = $("#guessedLetters");
	var prntGuessList = guessedLetters.append(newWord[i]);
	guessedLetters.append(prntGuessList);
	}
}
var checkPlayerLetters = function(){
	var f = document.letterForm; 
	var b = f.elements["letterIput"]; 
	var letterProvided = b.value; 
	letterProvided = letterProvided.toUpperCase();
	for (var i = 0; i < choosenWord.length; i++){
		if(choosenWord[i] === letterProvided){
			newWord[i] = letterProvided + " ";
			var letterCorrect = true;
		}
	b.value = "";
	}
	
	var guessedLetters = $("#guessedLetters");
	guessedLetters.empty(); 
	printRightWord();
	
	
	if(!letterCorrect){
		var wrongLetters = document.getElementById("wrongLetters");
		var prntGuessList = document.createTextNode(" " + letterProvided);
		wrongLetters.appendChild(prntGuessList); 
		
	}
	
	var lettersAreGood = true;
	for (var i = 0; i < newWord.length; i++){
		if(newWord[i] === "_ "){
			lettersAreGood = false;
		}
	}
	if(lettersAreGood){
		alert("DYNAMITE!!!");
	}
	
	if(error === 6){
		alert("TRY AGAIN");
	}
}
	printRightWord();

