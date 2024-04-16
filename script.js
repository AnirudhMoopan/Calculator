function numberclick(val) {
  document.getElementById("screen2").value += val;
}
function clearscreen() {
  document.getElementById("screen2").value = "";
}
function back() {
  var value = document.getElementById("screen2").value;
  document.getElementById("screen2").value = value.substr(0, value.length - 1);
}
function equalclick() {
  var text = document.getElementById("screen2").value;
  var result = eval(text);
  document.getElementById("screen2").value = result;
}
