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

if (johnHeigherBmi){
    console.log(`John BMI is ${johnBmi} and Mark BMI is ${markBmi}. So John is LARGERRRRRRRR !`);
}else{
    console.log(`Mark BMI is ${markBmi} and Mark BMI is ${johnBmi}. So Mark is LARGERRRRRRRR !`);
}
