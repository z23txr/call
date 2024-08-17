let displayValue = ''; // Holds the current input and expression

// Function to append numbers and operations to the display
function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

// Function to append operators to the display
function chooseOperation(operation) {
    if (displayValue === '') return; // Prevents starting with an operator
    displayValue += operation;
    updateDisplay();
}

// Function to evaluate the expression when '=' is pressed
function compute() {
    try {
        // Evaluate the expression using eval()
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        // Show 'Error' if the expression is invalid
        displayValue = 'Error';
        updateDisplay();
    }
}

// Function to clear the display
function clearDisplay() {
    displayValue = ''; // Reset the display value
    updateDisplay();
}

// Function to update the calculator's display
function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}