

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const bmiValue = document.getElementById('bmi-value');

    // Ensure weight and height are numbers and positive values
    if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2); // Calculate BMI
        bmiValue.textContent = bmi;  // Update the displayed BMI value
        updateBMIPointer(bmi);  // Move the pointer based on the calculated BMI
    } else {
        bmiValue.textContent = '0';  // Reset the BMI display
        updateBMIPointer(0);  // Reset the pointer
        alert('Please enter valid values for weight and height.');
    }
}

function updateBMIPointer(bmi) {
const pointer = document.getElementById('pointer');
let degree;

// More precise degree mapping based on the image's BMI categories:
if (bmi < 16) {
degree = -90;  // Far left, below underweight
} else if (bmi >= 16 && bmi < 18.5) {
// Map BMI 16 to 18.5 to degrees -90 to -45 (Underweight range)
degree = ((bmi - 16) / (18.5 - 16)) * (-57 - (-73)) + (-73);
} else if (bmi >= 18.5 && bmi < 25) {
// Map BMI 18.5 to 25 to degrees -55 to -15 (Normal range)
degree = ((bmi - 18.5) / (25 - 18.5)) * (-15 - (-55)) + (-55);
} else if (bmi >= 25 && bmi < 30) {
// Map BMI 25 to 30 to degrees 0 to 45 (Overweight range)
degree = ((bmi - 25) / (30 - 25)) * (15 - (-15)) + (-15);
} else if (bmi >= 30 && bmi <= 40) {

degree = ((bmi - 30) / (40 - 30)) * (75 - (16)) + (16);
} else {
degree = 90;  // Far right, above obesity
}

// Rotate the pointer based on the calculated degree
pointer.style.transform = `rotate(${degree}deg)`;
}



