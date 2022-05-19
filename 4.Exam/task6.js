function demo(input) {


  let locationsCount = Number(input[0]);
  let index = 1;
  let command = (input[index])
  
  let currentAverKilos = 0;

  while (true) {

    let expectedAverIncom = Number(command);
    let daysForDigging = Number(input[index]);
    index++;
    let killosPerDay = Number(input[index]);
    index++;
    while(){
      currentAverKilos += killosPerDay;
      if (currentAverKilos < expectedAverIncom) {
        let deff = expectedAverIncom - currentAverKilos;
        console.log(`You need ${deff.toFixed(2)} gold.`);
      } else {
        console.log(`Good job! Average gold per day: ${currentAverKilos.toFixed(2)}.`);
      }
   
    }

    // for (let i = index; i <= index + daysForDigging; i++) {
    //   let killosPerDay = Number(input[i]);
   

      command = input[index];
      index++;
    }
     
  }
 

demo(["2",
  "10",
  "3",
  "10",
  "10",
  "11",
  "20",
  "2",
  "20",
  "10"]);