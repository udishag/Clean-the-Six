let typeOfTrashElement = "";
let typeOfTrashValue;


let trashForm = document.getElementById("infoForm");

trashForm.addEventListener("submit", (e) => {
   e.preventDefault();
  
  // get the button element 
 typeOfTrashElement = document.getElementById("typeoftrash");

  // gets the type of trash the user has selected
  typeOfTrashValue = typeOfTrashElement.options[typeOfTrashElement.selectedIndex].value;

  console.log(typeOfTrashValue);

  // if and else stament will call upon whichever method is apporpirate based on what type of trash value is selected

  if (typeOfTrashValue == "paper") {
      isPaper();
  } else if ( typeOfTrashValue == "glass" || typeOfTrashValue == "electronics" || typeOfTrashValue == "batteries") {

    isRecycleCenter();
  } else if (typeOfTrashValue === "plastic" ) {

    isPlastic();
  } else if ( typeOfTrashValue === "wax-coated items") {

      // need to get an event listner once the wax-coated button is clicked it will excute the prompt
    typeOfTrashElement.addEventListener("click", waxHeader ());

    // delay when main function is excuted by 3 seconds; gives enough time for options to run 
    setTimeout(function() {
    isWaxCoated();
}, 5);

    
  } else if ( typeOfTrashValue == "metal"){
    isMetal();
  } else if (typeOfTrashValue == "organic") {

    isOrganic ();

      
  } else {
    console.log("invalid");
  }

})
       

// function will allow user to input answer to respective questions
function commonQuestion() {

  let userAnswer = -1

  while (userAnswer !== 1 && userAnswer !== 2) {

    userTrashans = prompt("Enter your answer: ");

    userAnswer = parseInt(userTrashans);
    
    if (userTrashans !== null && isFinite(userAnswer)) {

          if (userAnswer !== 1 && userAnswer !== 2){

            alert ("Out of range!!");
          }     
    } else if (userAnswer == null) {

        alert("Invalid input!")
        userAnswer = -1;
      }
  }

  return userAnswer;

}


// function will be called if user indicates there item is a wax item
//allow user to select type of wax material
function accessInput(numOne, numTwo, material) {
  let num = -1;

  while (num < numOne || num > numTwo) {
   
    let userNum = prompt("Enter number that describes your " + material + " the best: ");

    num = parseInt(userNum);
    console.log(num);
    
    if (num !== null && isFinite(num) && ( num < numOne || num > numTwo)) {
      console.log("Got Number");
      
      alert ("Out of range!!");
               
    } else if (num == null) {

        alert("Invalid input!")
        num = -1;
  
    } 

    
  }

  return num;
}


// function is called if user indicates there item is metal
function isMetal() {
  alert("Is your item a METAL or Aluminum can:  1 == yes, 2 == no");

  let userResult = commonQuestion();

  if (userResult == 1) {

    alert("Recycle, make sure to wash residue");

  } else {

    alert("Garbage");

  }


}


// function is called if user indicates there item is paper
function isPaper() {

  

   alert("Has your paper item been contaminated:  1 == yes, 2 == no")
  
  let userResult = commonQuestion();

  if (userResult == 1) {

    alert("Recycle if ONLY ink or pencil is on it, throw in garbage if food has been contaminated!");

  } else {

    alert("Has your paper item been mixed with other materials (i.e plastic):  1 == yes, 2 == no");

    userResult = commonQuestion();

    if (userResult == 1) {

      alert("Garbage") 
    } else {
      alert("Recycle")
    }


  }

}

// function is called if user indicates there item is plastic
function isPlastic() {

  alert("Is there any residue on your plastic: 1 == yes, 2 == no");

  let userResult = commonQuestion();


  if (userResult == 1) {

    alert("Garbage, however, if you want to recycle it rinse it thoroughly!");

  } else {

    alert("Is there a recycle symbol on your plastic: 1 == yes, 2 == no");

    userResult = commonQuestion();

    if (userResult == 1) {

      alert("Is the number on your plastic 3 or 7: 1 == yes, 2 == no");

      if (commonQuestion() == 1) {

        alert("Garbage!");

      } else {

        alert("Recycle");
      }


    } else {

      alert("Garbage!");

    }

  }

}

// function is called if user indicates there item is organic
function organicsPic () {

  // obtain your image
 let myImage = document.getElementById("myImage");

  console.log ("Comes to organic");
  myImage.style.display = "block"; // Show the image

  
}


// function is called if user indicates there item is wax, will print out possible wax items to throw out
function waxHeader () {
        // obtain header 1
      let header123 = document.getElementById("header1");
    
      // set new text
      let newText = " 1. Wax paper 2.Waxed Cardboard 3.Wax Carton 4.Car Wax 5.Candle ";
    
      
      // replaces orginal content that was in header with new text
      header123.innerHTML = newText;
 
  
}


// function is called if user indicates there item is wax
function isWaxCoated() {
  let material = "Wax material " 
  
  let userFinalValue = accessInput(1, 5, material);
  console.log (userFinalValue);
  
  console.log("after function");
  
  if (userFinalValue == 1) {
    alert("Garbage");
  } else if (userFinalValue == 2) {
    alert("Garbage");
  } else if (userFinalValue == 3) {
    alert("Recycle");
  } else if (userFinalValue == 4) {
    alert("Go to the Recycle center")
  } else  {
    alert("Recycle");
    console.log ("test if stament")
  }
}

// function is called if user indicates there item is one that needs to go to recycle center
function isRecycleCenter() {
  alert("You can not throw THIS, go to the nearest recycling center")
}


// function is called if user indicates there item is organic
function isOrganic() {

  alert("Is the item you want to throw out on the ORGANICS LIST:  1 == yes, 2 == no");

  let userResult = commonQuestion();

  if (userResult == 1) {

    alert("Organics");

  } else {

    alert("Garbage");

  }
}



