function biggerFont()
{
    document.getElementById("inputText").style.fontSize = "24pt";
}

function fancy()
{
    if(document.getElementById("fancy").checked)
    {
    document.getElementById("inputText").style.fontWeight = "bold";
    document.getElementById("inputText").style.textDecoration = "underline";
    document.getElementById("inputText").style.color = "blue";
    }
    else if(document.getElementById("boring").checked)
    {
    document.getElementById("inputText").style.fontWeight = "normal";
    document.getElementById("inputText").style.textDecoration = "none";
    document.getElementById("inputText").style.color = "black";
    }
}

function moo()
{
    var inputText = document.getElementById("inputText").value;
    inputText.toString();
    var parts = inputText.split(".");

    parts[0]+= "-moo";

    inputText = parts.join(".");
  
    
    document.getElementById("inputText").value = inputText.toUpperCase();

}
