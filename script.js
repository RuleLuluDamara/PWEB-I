// Fungsi untuk menghitung hasil perhitungan
function calculate(operator) {
  let firstNumber = parseFloat(document.getElementById("firstNumber").value);
  let secondNumber = parseFloat(document.getElementById("secondNumber").value);
  let result = document.getElementById("result");

  let calc = 0;

  if (operator == "+") {
    calc = firstNumber + secondNumber;
  } else if (operator == "-") {
    calc = firstNumber - secondNumber;
  } else if (operator == "*") {
    calc = firstNumber * secondNumber;
  } else if (operator == "/") {
    if (secondNumber == 0) {
      calc = "Error (Divide by Zero)";
    } else {
      calc = firstNumber / secondNumber;
    }
  }

  result.innerHTML = calc;
}

//event listener
document.getElementById("add").addEventListener("click", function () {
  calculate("+");
});

document.getElementById("subtract").addEventListener("click", function () {
  calculate("-");
});

document.getElementById("multiply").addEventListener("click", function () {
  calculate("*");
});

document.getElementById("divide").addEventListener("click", function () {
  calculate("/");
});
