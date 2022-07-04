// Author: August Frisk
// Course: Free Code Camp - Algorithms & Data Structures - Fall 2018
// Project: Phone Number Validator

function phoneCheck (){
 
  // Grabs text input
  var inputText = document.getElementById("phoneNumber").value;
  var regButton = document.getElementById('submit');
  // strips out non-numbers to check length
  var inputStripped = inputText.replace(/\D/g,'');;
  // Grabs the Results div
  var res = document.getElementById("container");
  
  // RegEx Stuff
  var phoneReg = /^[0-9()-.\s]+$/
  
  // Pulls out class for Validation Check
  res.className = "";
  console.log(regButton);
  // Checks type and length
  if (phoneReg.test(inputText) && inputStripped.length >= 10) {
      res.className = "yup";
      regButton.innerHTML = "Go!";
    } 
    else {
      res.className = "nope";
      regButton.innerHTML = "Try Again?";
    }
  }