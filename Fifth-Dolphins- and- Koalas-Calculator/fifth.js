//Variables
'use strict'
//Functions
const calAverage = (score1, score2, score3) => {
   const avg = (score1 + score2 + score3)/3;
   return avg
}

function checkWinner() {
    const avgDolphins = calAverage(85,54,41);
    const avgKoalas = calAverage(23,34,27);
    
    if(avgDolphins >= (avgKoalas* 2)){
        console.log(`Dolphins get ${avgDolphins} and winner !`);
    }else if(avgKoalas >= (avgDolphins * 2)){
        console.log(`Koalas get ${avgKoalas} and winner !`);
    }else{
        console.log(`Dolphins get ${avgDolphins} points and Koalas get ${avgKoalas} points !
        but the rule is not success !!!`);
    }
    
}
checkWinner()