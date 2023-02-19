// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  var savebtn = document.querySelector(".saveBtn");
  var textsave = document.querySelector(".description");
  var textTest = document.querySelector('.col-8 col-md-10 description');
  var textInput = $(textTest).val();
  var time = moment().format("h");
  var saveBtnParent = document.getElementById('#hour')
 
  //displays current date
  var weekDay = moment().format("dddd, MMMM Do");
  $("#currentDay").text(weekDay); 

//Adds Local storage information to Dom
  for (var i = 8; i <= 17; i++) {
  let key = JSON.parse(localStorage.getItem("hour-" + i));
    if (key !== null) {
     const currSaveBox = $('#hour-' + i).children('textarea');;
     console.log(currSaveBox);
     currSaveBox.text(key);
    }
 }

 //Looping through All boxes changing based on time
  for (var i = 9; i <= 17; i++) {
    if (i > time) {  
      $('#hour-' + i).addClass("future");
    }
    else if (i < time) {
      $('#hour-' + i).addClass("past");
    }
    else {
      $('#hour-' + i).addClass("present");
    }
  }

  // make all buttons work seperatly
  const buttons = document.querySelectorAll('.saveBtn')
  buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', function() {
  //saving to local storage
  var currSaveBtn = currentBtn.parentElement.children[1].value;
  var currSaveBtnId = currentBtn.parentElement.id;

  localStorage.setItem(currSaveBtnId, JSON.stringify(currSaveBtn));
  console.log("saving...");
  console.log(currSaveBtn);
  console.log("to " + currSaveBtnId + " key");
  $('.localStorageContainer').text("Saved To Local Storage!");
  })
 })
});