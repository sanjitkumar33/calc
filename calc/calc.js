// Select the result input field
const result = document.getElementById("result");

// Function to clear the input
function clearFields() {
    result.value = "";
}

// Function to append clicked button values to the input
function appendValue(value) {
    result.value += value;
}

// Function to evaluate the expression
function calculate() {
    try {
        result.value = eval(result.value); // Evaluate the expression
    } catch (error) {
        result.value = "Error"; // Handle invalid expressions
    }
}

// Attach event listeners to buttons dynamically
document.querySelectorAll(".number, .operator, .decimal").forEach(button => {
    button.addEventListener("click", () => appendValue(button.textContent));
});

// Attach event listener to the equals button
document.querySelector(".equal").addEventListener("click", calculate);

// Attach event listener to the clear button
document.querySelector(".clear").addEventListener("click", clearFields);

