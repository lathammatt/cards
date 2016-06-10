//make connect to userinput
//make connect to output div
//make event handler to create
//make event handle to delete
//made remove function

var userInfo = document.getElementById("userInput");
var sendCard = document.getElementById("output");
var createButton = document.getElementById("create");
var counter = 0;

var deleteButtonArray = []
createButton.addEventListener("click",function addText(){
	counter = deleteButtonArray.length;
	sendCard.innerHTML += "<div id='card'>" + "<span='display:block'>" + `${userInfo.value}` + "</span>" + `<button type='submit' id='delete-${counter}' class='float'>Delete</button>` + "</div>";
	deleteButtonArray[counter] = document.getElementById(`delete-${counter}`);
//----------works for main button--------
// deleteButton.addEventListener("click", function deleteCard(){
// 	output.removeChild(card);
// });

	// deleteButton.addEventListener("click", function deleteCard(){
		//-------parameter 1 error for Node--------
	// var sendCard = document.getElementById("output");
	console.log("deleteButtonArray", deleteButtonArray);
	console.log("deleteButtonArray[counter]", deleteButtonArray[counter]);
	console.log("counter", counter);
	deleteButtonArray[counter].addEventListener("click", function deleteCard (event){
		// sendCard.removeChild(event.target.parentNode)});
		// var newCard = document.getElementById('card');
		// var trash = sendCard.removeChild(card);
		//-------deletes only first delete card------
		// var node = document.getElementById("card");
		// if (sendCard.parentNode) {
  // 		node.parentNode.removeChild(event.target.parentNode);}
  		console.log("hello" );
  		});
		
	});