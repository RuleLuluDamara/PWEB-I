let currentInput = ""; // Menyimpan input yang sedang ditampilkan

// Fungsi untuk menambahkan angka ke tampilan
function appendNumber(number) {
  currentInput += number;
  document.getElementById("display").value = currentInput;
}

function appendOperator(operator) {
  currentInput += operator;
  document.getElementById("display").value = currentInput;
}

function calculateResult() {
  try {
    const result = eval(currentInput);

    document.getElementById("display").value = result;

    currentInput = "";
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}


function deleteLastCharacter() {
  currentInput = currentInput.slice(0, -1);
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("display").value = "";
  document.getElementById("result").textContent = "0"; // Reset hasil ke 0
}

for (let i = 0; i <= 9; i++) {
  const numberButton = document.getElementById(i.toString());
  numberButton.addEventListener("click", function () {
    appendNumber(i);
  });
}

document.getElementById("add").addEventListener("click", function () {
  appendOperator("+");
});

document.getElementById("subtract").addEventListener("click", function () {
  appendOperator("-");
});

document.getElementById("multiply").addEventListener("click", function () {
  appendOperator("*");
});

document.getElementById("divide").addEventListener("click", function () {
  appendOperator("/");
});

document.getElementById("equal").addEventListener("click", function () {
  calculateResult();
});

document.getElementById("delete").addEventListener("click", function () {
  deleteLastCharacter();
});

document.getElementById("clear").addEventListener("click", function () {
  clearDisplay();
});

document.getElementById("result").textContent = result;




