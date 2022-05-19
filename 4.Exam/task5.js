function demo(input){

let index = 0
let command = input[index];
index++;

let kids = 0;
let adults = 0;

let toyPrice = 5;
let poloPrice = 15;



while(command !== "Christmas"){

  let age = Number(command);
  

  if(age <= 16){
    kids++;
   
  }else{
    adults++;
    
  }

    command = input[index];
    index++;
}
let totalSumKids = (kids * toyPrice);
let totalSumAdults = (adults * poloPrice);

console.log(`Number of adults: ${adults}`);
console.log(`Number of kids: ${kids}`);
console.log(`Money for toys: ${totalSumKids}`);
console.log(`Money for sweaters: ${totalSumAdults}`);

}
demo(["16",
"20",
"46",
"12",
"8",
"20",
"49",
"Christmas"]);