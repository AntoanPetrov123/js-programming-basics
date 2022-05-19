function sumseconds(input) {

    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    let totalTime = first + second + third;

    let timeInMinutes = Math.floor(totalTime / 60);
    let timeInSeconds = totalTime % 60;
    if (timeInSeconds < 10) {
        console.log(`${timeInMinutes}:0${timeInSeconds}`);
    } else {
        console.log(`${timeInMinutes}:${timeInSeconds}`);
    }

}
sumseconds(["35", "45", "44"])