 function ClearScreen()
{
document.getElementById("res").value = "";
}
 function show(value)
{
document.getElementById("res").value += value;
}
function cal()
{
    var p = document.getElementById("res").value;
    var q=eval(p);
    document.getElementById("res").value = q;
}
