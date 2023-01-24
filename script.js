function numberclick(val)
{
    document.getElementById("screen").value+=val
}
function clearscreen()
{
    document.getElementById("screen").value=""
}
function back() {
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substr(0, value.length - 1);
}