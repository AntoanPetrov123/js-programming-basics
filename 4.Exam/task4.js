function demo(input){

  let catsCount = Number(input[0]);
  let smallCats = 0;
  let bigCats = 0;
  let hugeCats = 0;
  let totalKilos = 0;
  
  for(let i=0; i<=catsCount; i++){

    let foodForEachCat = Number(input[i]);

    if(foodForEachCat >= 100 && foodForEachCat < 200){
        smallCats++;
        totalKilos+=foodForEachCat;
    }else if(foodForEachCat >= 200 && foodForEachCat < 300){
      bigCats++;
      totalKilos+=foodForEachCat;
    }else if(foodForEachCat >= 300 && foodForEachCat < 400){
      hugeCats++;
      totalKilos+=foodForEachCat;
    }

  }

  let totalPrice = 12.45 * totalKilos/1000;
  console.log(`Group 1: ${smallCats} cats.`);
  console.log(`Group 2: ${bigCats} cats.`);
  console.log(`Group 3: ${hugeCats} cats.`);
  console.log(`Price for food per day: ${totalPrice.toFixed(2)} lv.`);

}
demo(["6",
"102",
"236",
"123",
"399",
"342",
"222"]);
