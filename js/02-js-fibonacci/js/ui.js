var input = document.getElementById("num");
var result = document.getElementById("result");
const btnOutput = document.getElementById("btn-output");
const btnClear = document.getElementById("btn-clear");

btnOutput.addEventListener("click", () => {
	fibonacci();
});

btnClear.addEventListener("click", () => {
	clear();
});

input.addEventListener("keyup", () => {
	handleDisableState();
});

/**
 * display fibonacci order according to input count
 */
function fibonacci() {
	var value = parseInt(input.value);
	var order = [];
	order[0] = 0;
	order[1] = 1;
	if (value > 0) {
		result.classList.remove("error");
		result.innerHTML = "Result:";
		for (var counter = 2; counter < value; counter++) {
			order.push(order[counter - 1] + order[counter - 2]);
		}
		result.innerHTML = `Result: ${order}`;
	} else {
		result.classList.add("error");
		result.innerHTML = "Nur positive Zahlen erlaubt!";
	}
}

/**
 * reset value and result
 */
function clear() {
	input.value = "";
	result.innerHTML = "Result:";
	handleDisableState();
}

/**
 * check disable state of buttons
 */
function handleDisableState() {
	if (input.value != "") {
		btnOutput.disabled = false;
		btnClear.disabled = false;
	} else {
		btnOutput.disabled = true;
		btnClear.disabled = true;
	}
}