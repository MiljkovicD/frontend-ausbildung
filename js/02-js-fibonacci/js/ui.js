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
 * calculate input values and append result
 */
function fibonacci(){
	var x = 0;
	var value = input.value;
	var order = [];
	value = parseInt(value);
	for (x; x<value; x++){
		if(x==0){
			order.push(0);
		}
		else if(x==1){
			order.push(1);
		}
		else{
			order.push(order[x-1]+order[x-2]);
		}
	}
	result.innerHTML = `Result: ${order}`;
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