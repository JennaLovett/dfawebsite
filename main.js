window.onload=function() {

//creating variables
var alphabet = [];
var states = [];
var startState;
var acceptStates = [];
var transitions = [];

//adding event listeners and getting input
document.getElementById("btn1").addEventListener("click", () => {
    var input = document.getElementById("alphabet").value;
    for(var i = 0; i < input.length; i++) {
        if(input.substring(i, i+1) == "," || input.substring(i, i+1) == " ") {
            continue;
        } else {
            alphabet.push(input.substring(i, i+1));
        }
    }
});

document.getElementById("btn2").addEventListener("click", () => {
    var input = document.getElementById("states").value;
    for(var i = 0; i < input.length; i++) {
        if(input.substring(i, i+1) == "," || input.substring(i, i+1) == " ") {
            continue;
        } else {
            states.push(input.substring(i, i+1));
        }
    }
});
}
