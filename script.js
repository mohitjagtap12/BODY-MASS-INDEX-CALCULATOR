function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let result = document.getElementById("result");

  result.className = "";

  if (weight > 0 && height > 0) {
    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);
    let category = "";
    let cssClass = "";

    if (bmi < 18.5) {
      category = "Underweight";
      cssClass = "underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
      cssClass = "normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
      cssClass = "overweight";
    } else {
      category = "Obesity";
      cssClass = "obesity";
    }

    result.innerHTML = `Your BMI is <b>${bmi.toFixed(2)}</b> (${category})`;
    result.classList.add(cssClass);
  } else {
    result.innerHTML = "⚠️ Please enter valid values!";
  }
}