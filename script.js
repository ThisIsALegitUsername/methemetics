function calcSkywardCustom(asme, asmt, asie, asit){
  var asmp = asme/asmt*0.8;
  var asip= asie/asit*0.2;
  return asmp + asip;
}

function calcSkyward() {
  var asne = document.getElementById("asne").value;
  var asnt = document.getElementById("asnt").value;
  var asse = document.getElementById("asse").value;
  var asst = document.getElementById("asst").value;
  var fasne = document.getElementById("fasne").value;
  var fasnt = document.getElementById("fasnt").value;

  var astotal = ((asne+fasne)/(asnt+fasnt))*0.2;
  var asstotal = asse/asst*0.8;

  document.getElementById("score").innerText = "Your new grade after that assignment will be " + astotal+asstotal*100 + "%!";
}
