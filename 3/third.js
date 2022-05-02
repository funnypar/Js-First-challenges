const avgDolphins = 113//(96 + 108 + 89)/3;
const avgKoalas = 113//(88 + 91 + 110)/3;

if(avgDolphins > avgKoalas && (avgDolphins,avgKoalas) > 100){
    console.log(`Dolphins get ${avgDolphins} points and they winner !`);
}else if(avgKoalas > avgDolphins && (avgDolphins,avgKoalas) > 100){
    console.log(`Koalas get ${avgKoalas} points and they winner !`);
}else if(avgDolphins === avgKoalas && (avgDolphins,avgKoalas) > 100){
    console.log(`Dolphins get ${avgDolphins} points and Koalas get ${avgKoalas} points and they are draw !`);
}
