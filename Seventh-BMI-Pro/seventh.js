'use strict'
//Functions
const mark = {
    firstName : "Mark",
    lastName : "Miller",
    fullName : `${this.firstName} ${this.lastName}`,
    mass : 78,
    height : 1.69, 
    Bmi : function () {
        return this.mass / (this.height ** 2)
    }
}

const john = {
    firstName : "John",
    lastName : "Smith",
    fullName : `${this.firstName} ${this.lastName}`,
    mass : 92,
    height : 1.95, 
    Bmi : function () {
        return this.mass / (this.height ** 2)
    }
}

const heigherBmi = mark.Bmi() > john.Bmi() ? console.log(`${mark.firstName}'s BMI is (${mark.Bmi()}) and this is heigher than John because he gets (${john.Bmi()}) !!! `) : console.log(`${john.firstName}'s BMI is (${john.Bmi()}) and this is heigher than Mark because he gets (${mark.Bmi()} !!! `)
