let oui = false;

function calculate() {
  let asp = document.getElementById("assignmentpoints").value;
  let ast = document.getElementById("assignmenttotal").value;
  let assp = document.getElementById("assessmentpoints").value;
  let asst = document.getElementById("assessmenttotal").value;

  let ass = asp/ast*0.2;
  let asss = assp/asst*0.8;

  console.log(Math.round((ass+asss)*10000)/100);
  document.getElementById("result").textContent = "Your percent grade is " + Math.round((ass+asss)*10000)/100 + "%";
}

document.addEventListener('keypress', function(event){
  if(event.key == 13){
    calculate();
  }
});
