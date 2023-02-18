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

  //saving to local storage
  


// make all buttons work seperatly
  const buttons = document.querySelectorAll('.saveBtn')
  buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', function() {

  var currSaveBtn = currentBtn.parentElement;
  var currSaveBtn2 = currSaveBtn[3].value;



  var input = $("this").val();
  localStorage.setItem("Apppointments", JSON.stringify(currSaveBtn));
  console.log("saving...");
  console.log(currSaveBtn);
  console.log(currSaveBtn2);
})
  })
});