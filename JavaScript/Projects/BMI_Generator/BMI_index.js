
// window.onload = () => {
//     const button = document.querySelector("#btn");
//     button.addEventListener("click", calculateBmi);
// }

window.onload = () => {
    const button = document.querySelector("#btn");
    button.addEventListener("click", calculateBmi);
}

function calculateBmi() {
    const height = parseFloat(document.querySelector("#height").value); // Convert to float
    const weight = parseFloat(document.querySelector("#weight").value); // Convert to float
    const result = document.querySelector("#result");

    if (!height || isNaN(height) || height < 0) {
        result.innerText = "Please provide a valid height in centimeters";
        return;
    } else if (!weight || isNaN(weight) || weight < 0) {
        result.innerText = "Please provide a valid body weight in kilograms";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
        result.innerText = `Underweight: ${bmi}`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Normal weight: ${bmi}`;
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText = `Overweight: ${bmi}`;
    } else if (bmi >= 30 && bmi < 34.9) {
        result.innerText = `Obesity (Class I): ${bmi}`;
    } else if (bmi >= 35 && bmi < 39.9) { // Corrected range
        result.innerText = `Obesity (Class II): ${bmi}`;
    } else {
        result.innerText = `Obesity (Class III): ${bmi}`; // Corrected label
    }
}