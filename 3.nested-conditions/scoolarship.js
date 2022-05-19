function scolarship(input) {

    let incomes = Number(input[0]);
    let averSuccess = Number(input[1]);
    let minSalery = Number(input[2]);

    if (incomes < minSalery && averSuccess > 5.50) {

        let socialScholarship = 0.35 * minSalery;
        console.log(`You get a Social scholarship ${Math.ceil(socialScholarship)} BGN `);
    } else if (averSuccess >= 5.50) {
        let scholarship = averSuccess * 25;
        console.log(`You get a scholarship for excellent results ${Math.ceil(scholarship)} BGN`);
    } else {
        console.log('You cannot get a scholarship!');
    }

    //     if (socialScholarship > scholarship) {
    //         console.log(`You get a Social scholarship ${Math.ceil(socialScholarship)} BGN `);
    //     } else if (scholarship >= socialScholarship) {
    //         console.log(`You get a scholarship for excellent results ${Math.ceil(scholarship)} BGN`);
    //     }

    // }
    scolarship(['480', '4.60', '450']);