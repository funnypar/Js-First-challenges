// const price = 350;
// let tip1 = 15/100;
// let tip2 = 20/100

//  price >= 50 && price <= 300 ? console.log(`You must get ${tip1} and pay ${price - (price * tip1)}`) : console.log(`You must get ${tip2} and pay ${price - (price * tip2)}`);


const bill = 470 ;
const tip = bill <= 300 && bill >= 50 ? bill *0.15 : bill * 0.2 ; 
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${tip+bill}`);