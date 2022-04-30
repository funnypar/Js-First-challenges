//Variables

//mass
const johnMass = 72;
const markMass = 80;
//height
const johnHeight = 1.70;
const markHeight = 1.82;
//BMI
const johnBmi = (johnMass/(johnHeight**2));
const markBmi = (markMass/(markHeight**2));

//Functions

const johnHeigherBmi = johnBmi > markBmi;


//Output
console.log(johnHeigherBmi);
