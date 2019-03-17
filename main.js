window.onload=function() {

    //creating variables
    var alphabet = [];
    var states = [];
    var startState;
    var acceptStates = [];
    var transitions = [];
    var transitionTable;
    var testStr;
    var isInLanguage;

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

    document.getElementById("btn3").addEventListener("click", () => {
        var input = document.getElementById("start").value;
        startState = input;
    });

    document.getElementById("btn4").addEventListener("click", () => {
        var input = document.getElementById("accept").value;
        for(var i = 0; i < input.length; i++) {
            if(input.substring(i, i+1) == "," || input.substring(i, i+1) == " ") {
                continue;
            } else {
                acceptStates.push(input.substring(i, i+1));
            }
        }
    });

    document.getElementById("btn5").addEventListener("click", () => {
        var input = document.getElementById("transitions").value;
        for(var i = 0; i < input.length; i++) {
            if(input.substring(i, i+1) == "," || input.substring(i, i+1) == " ") {
                continue;
            } else {
                transitions.push(input.substring(i, i+1));
            }
        }

        createTransitionTable();
        fillTransitionTable();
    });

    document.getElementById("btn6").addEventListener("click", () => {
        var input = document.getElementById("testString").value;
        testStr = input;
        checkString();
        if(isInLanguage) {
            document.getElementById("dfaH1").innerHTML = "The string <span>" + testStr + "</span> is in the language.";
        } else {
            document.getElementById("dfaH1").innerHTML = "The string <span>" + testStr + "</span> is not in the language.";
        }

        createTable();
    });

    function createTransitionTable() {
        transitionTable = new Array(states.length);
        for(var i = 0; i < transitionTable.length; i++) {
            transitionTable[i] = new Array(alphabet.length);
        }
    }

    function fillTransitionTable() {
        for(var i = 0; i < transitions.length; i+=3) {
            var state = transitions[i];
            var alpha = transitions[i+1];
            var end = transitions[i+2];
            transitionTable[states.indexOf(state)][alphabet.indexOf(alpha)] = end;
        }
    }

    function checkString() {
        var currentState = startState;
        var nextState;
        for(var i = 0; i < testStr.length; i++) {
            nextState = transitionTable[states.indexOf(currentState)][alphabet.indexOf(testStr.substring(i, i+1))];
            currentState = nextState;
        }
        if(acceptStates.includes(currentState)) {
            isInLanguage = true;
        } else {
            isInLanguage = false;
        }
    }

    function createTable() {
        var td = document.getElementsByClassName("td")[0];
        var insert = "";
        for(var i = 0; i < alphabet.length; i++) {
            if(i == alphabet.length - 1) {
                insert += alphabet[i];
            } else {
                insert += alphabet[i] + ", ";
            }
        }
        td.innerHTML = insert;

        td = document.getElementsByClassName("td")[1];
        insert = "";
        for(var i = 0; i < states.length; i++) {
            if(i == states.length - 1) {
                insert += states[i];
            } else {
                insert += states[i] + ", ";
            }
        }
        td.innerHTML = insert;

        td = document.getElementsByClassName("td")[2];
        insert = startState;
        td.innerHTML = insert;

        td = document.getElementsByClassName("td")[3];
        insert = "";
        for(var i = 0; i < acceptStates.length; i++) {
            if(i == acceptStates.length - 1) {
                insert += acceptStates[i];
            } else {
                insert += acceptStates[i] + ", ";
            }
            
        }
        td.innerHTML = insert;

        td = document.getElementsByClassName("td")[4];
        insert = "";
        for(var i = 0; i < transitions.length; i+=3) {
            insert += "(" + transitions[i] + ", " + transitions[i+1] + ") &rarr; " + transitions[i+2] + "<br>";
        }
        td.innerHTML = insert;
        
    }
}
