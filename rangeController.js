//New distance

function newDistance0(val) {
  document.getElementById("newDistance0val").innerHTML = val;
}

function newDistance1(val) {
  document.getElementById("newDistance1val").innerHTML = val;
}

function newDistance2(val) {
  document.getElementById("newDistance2val").innerHTML = val;
}

function newDistance3(val) {
  document.getElementById("newDistance3val").innerHTML = val;
}

//Modernised distance

function modernisedDistance0(val) {
  document.getElementById("modernisedDistance0val").innerHTML = val;
}

function modernisedDistance1(val) {
  document.getElementById("modernisedDistance1val").innerHTML = val;
}

function modernisedDistance2(val) {
  document.getElementById("modernisedDistance2val").innerHTML = val;
}

function modernisedDistance3(val) {
  document.getElementById("modernisedDistance3val").innerHTML = val;
}

//Overall distance

function overallDistance0(val) {
  document.getElementById("overallDistance0val").innerHTML = val;
}

function overallDistance1(val) {
  document.getElementById("overallDistance1val").innerHTML = val;
}

function overallDistance2(val) {
  document.getElementById("overallDistance2val").innerHTML = val;
}

function overallDistance3(val) {
  document.getElementById("overallDistance3val").innerHTML = val;
}

//Resetowanie outputu kontrolek range

function resetAllRange() {
  //Pierwszy rząd
  document.getElementById("newDistance0val").innerHTML = "0";
  document.getElementById("newDistance1val").innerHTML = "0";
  document.getElementById("newDistance2val").innerHTML = "0";
  document.getElementById("newDistance3val").innerHTML = "0";

  //Drugi rząd
  document.getElementById("modernisedDistance0val").innerHTML = "0";
  document.getElementById("modernisedDistance1val").innerHTML = "0";
  document.getElementById("modernisedDistance2val").innerHTML = "0";
  document.getElementById("modernisedDistance3val").innerHTML = "0";

  //Trzeci rząd
  document.getElementById("overallDistance0val").innerHTML = "0";
  document.getElementById("overallDistance1val").innerHTML = "0";
  document.getElementById("overallDistance2val").innerHTML = "0";
  document.getElementById("overallDistance3val").innerHTML = "0";
}
