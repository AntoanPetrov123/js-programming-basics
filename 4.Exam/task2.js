function demo(input){

  let name = input[0];
  let budget = Number(input[1]);
  let beerCount = Number(input[2]);
  let chipsCount = Number(input[3]);

  let beerPrice = 1.20;
  let totalBeerPrice = beerCount * beerPrice;
  let chipsPrice = totalBeerPrice * 0.45;
  let totalChipsPrice = chipsCount * chipsPrice;

  let totalSpent = totalBeerPrice + Math.ceil(totalChipsPrice);

  if(totalSpent <= budget){
    
    console.log(`${name} bought a snack and has ${(budget-totalSpent).toFixed(2)} leva left.`);
  }else{
    console.log(`${name} needs ${(totalSpent - budget).toFixed(2)} more leva!`);
  }
  

}
demo(["George",
"10",
"2",
"3"])
;