var firstInput = document.getElementById("first");
var secondInput = document.getElementById("second");
var answer = document.getElementById("answer");
const btnAdd = document.getElementById("btn-add");
const btnClear = document.getElementById("btn-clear");

btnAdd.addEventListener("click", () => {
    add();
});

btnClear.addEventListener("click", () => {
    clear();
});

firstInput.addEventListener("keyup", () => {
    handleDisableState();
});

secondInput.addEventListener("keyup", () => {
    handleDisableState();
});

/**
 * calculate input values and append result
 */
function add() {
    var numOne, numTwo, sum;
    numOne = parseInt(firstInput.value);
    numTwo = parseInt(secondInput.value);
    sum = numOne + numTwo;
    answer.innerHTML = `Result: ${sum}`;
}

/**
 * reset value and result
 */
function clear() {
    firstInput.value = "";
    secondInput.value = "";
    answer.innerHTML = "Result:";
    handleDisableState();
}

/**
 * check disable state of buttons
 */
function handleDisableState() {
    if (firstInput.value != "" && secondInput.value != "") {
        btnAdd.disabled = false;
        btnClear.disabled = false;
    } else {
        btnAdd.disabled = true;
        btnClear.disabled = true;
    }
}