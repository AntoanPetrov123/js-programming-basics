function demo(input) {

      let videoCardPrice = Number(input[0]);
      let pistonPrice = Number(input[1]);
      let electricityPrice = Number(input[2]);
      let profitForOneCardPerDay = Number(input[3]);
      let otherStuff = 1000;

      let totalPriceVideoCards = videoCardPrice * 13;
      let totalPricePiston = pistonPrice * 13;


      let totalSpend = totalPriceVideoCards + totalPricePiston + otherStuff;
      let profitCard = profitForOneCardPerDay - electricityPrice;
      let totalProfitCard = profitCard * 13;

      let days = totalSpend/totalProfitCard;

      console.log(totalSpend);
      console.log(Math.ceil(days));
}
  demo(["700","15","0.20","2"]);