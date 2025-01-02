//your JS code here. If required.
function change_text() {
	var ele = document.getElementById("division");
	ele.innerHTML = "Bye<br>Good Bye<br>To<br>Your<br>Class<br>";
}

function calculate() {
	var ele = document.getElementById("operator");
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var res = document.getElementById("result"),operator = ele.value,result;
	if (operator === "+") {
                result = num1 + num2;
            } else if (operator === "-") {
                result = num1 - num2;
            } else if (operator === "*") {
                result = num1 * num2;
            } else if (operator === "/") {
                if (num2 === 0) {
                    result = "Cannot divide by zero";
                } else {
                    result = num1 / num2;
                }
            }
	res.innerText = result;
}