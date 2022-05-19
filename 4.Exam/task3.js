
function demo(input){

let mouth = input[0];
let spentHours = Number(input[1]);
let peopleCount = Number(input[2]);
let dayType = input[3];
let costMoney = 0;
let earlyDayPrice = 10.50;
let earlyNightPrice = 8.40;
let lateDayPrice = 12.60;
let lateNightPrice = 10.20;


  if(mouth === "march" || mouth === "april" || mouth === "may"){
    if(dayType === "day"){
      if(peopleCount >= 4 && spentHours >= 5){
        costMoney = peopleCount * (earlyDayPrice*0.90)*0.50 * spentHours;
        console.log(`Price per person for one hour: ${((earlyDayPrice*0.90)*0.50).toFixed(2)}`);
      }else if(peopleCount >= 4 && spentHours < 5){
        costMoney = peopleCount * (earlyDayPrice*0.90) * spentHours;
        console.log(`Price per person for one hour: ${(earlyDayPrice*0.90).toFixed(2)}`);
      }
      else{
        costMoney = peopleCount * earlyDayPrice * spentHours;
        console.log(`Price per person for one hour: ${(earlyDayPrice).toFixed(2)}`);
      }
    }else if(dayType === "night"){
      if(peopleCount >= 4 && spentHours >= 5){
        costMoney = peopleCount * (earlyNightPrice*0.90)*0.50 * spentHours;
        console.log(`Price per person for one hour: ${((earlyNightPrice*0.90)*0.50).toFixed(2)}`);
      }else if(peopleCount >= 4 && spentHours < 5){
        costMoney = peopleCount * (earlyNightPrice*0.90) * spentHours;
        console.log(`Price per person for one hour: ${(earlyNightPrice*0.90).toFixed(2)}`);
      }
      else{
        costMoney = peopleCount * earlyNightPrice * spentHours;
        console.log(`Price per person for one hour: ${(earlyNightPrice).toFixed(2)}`);
      }
      
    }
  }else if(mouth === "june" || mouth === "july" || mouth === "august"){
    if(dayType === "day"){
      if(peopleCount >= 4 && spentHours >= 5){
        costMoney = peopleCount * (lateDayPrice*0.90)*0.50 * spentHours;
        console.log(`Price per person for one hour: ${((lateDayPrice*0.90)*0.50).toFixed(2)}`);
      }else if(peopleCount >= 4 && spentHours < 5){
        costMoney = peopleCount * (lateDayPrice*0.90) * spentHours;
        console.log(`Price per person for one hour: ${(lateDayPrice*0.90).toFixed(2)}`);
      }
      else{
        costMoney = peopleCount * lateDayPrice * spentHours;
        console.log(`Price per person for one hour: ${(lateDayPrice).toFixed(2)}`);
      }
    }else if(dayType === "night"){
      if(peopleCount >= 4 && spentHours >= 5){
        costMoney = peopleCount * (lateNightPrice*0.90)*0.50 * spentHours;
        console.log(`Price per person for one hour: ${((lateNightPrice*0.90)*0.50).toFixed(2)}`);
      }else if(peopleCount >= 4 && spentHours < 5){
        costMoney = peopleCount * (lateNightPrice*0.90) * spentHours;
        console.log(`Price per person for one hour: ${(lateNightPrice*0.90).toFixed(2)}`);
      }
      else{
        costMoney = peopleCount * lateNightPrice * spentHours;
        console.log(`Price per person for one hour: ${(lateNightPrice).toFixed(2)}`);
      }
    }
  }

  console.log(`Total cost of the visit: ${costMoney.toFixed(2)}`);

}
demo(["july",
"5",
"5",
"night"]);
