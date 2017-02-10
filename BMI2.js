const height = 1.62;
const weight = 50;

const BMICompute = (height, weight) => {
	let A = weight / (height * height)
    return A
}

let bmi = bmiCompute(height, weight)
let cl;

if (bmi < 18.5) {
 cl = 0
} else if ((bmi >= 18.5) && (bmi <= 24.9)){
 cl = 1
} else if ((bmi >= 25) && (bmi <= 29.9)){
 cl = 2
} else {
 cl = 3
}

switch(cl){
  case 0: console.log("underweight boi")
    break;
  case 1: console.log("u a healthy boi")
    break;
  case 2: console.log("u a little overweight boi")
    break;
  case 3: console.log("yo mama so fat")
    break;
}
