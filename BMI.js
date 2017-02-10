const height = 1.6;
const weight = 50;

let bmiCompute = (height, weight) => {
  /* let A = weight / (height * height)
  return A */

  let h2 = height * height
  let A = weight / h2

  return A
}

let bmi = bmiCompute(height, weight)

if (bmi < 18.5) {
 console.log("Underweight");
} else if ((bmi >= 18.5) && (bmi <= 24.9)){
 console.log("Normal");
} else if ((bmi >= 25) && (bmi <= 29.9)){
 console.log("Overweight");
} else {
 console.log("Obese");
}
