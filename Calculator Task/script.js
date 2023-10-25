let displayValue = '';

function appendToDisplay(value) {
    if (value === 'DEL') {
        deleteLastCharacter();
        return;
    }
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function deleteLastCharacter() {
    const display = document.getElementById('display');
    const currentValue = display.value;

    if (currentValue.length > 0) {
        if (currentValue.slice(-1) === '%') {
            display.value = currentValue.slice(0, -1);
        } else if (currentValue.slice(-3) === 'DEL') {
            display.value = currentValue.slice(0, -3);
        } else {
            display.value = currentValue.slice(0, -1);
        }
        displayValue = display.value;
    }
}

function calculateResult() {
    try {
       let expression = displayValue.replace(/x/g, '*').replace(/÷/g, '/');
        let result = eval(expression);

        if (Number.isFinite(result)) {
            displayValue = result;
            document.getElementById('display').value = result;
        } else {
            document.getElementById('display').value = 'Error';
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
