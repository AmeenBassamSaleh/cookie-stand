// 'use strict';


// let time = ['6 Am ', '7 Am ', '8 Am ', '9 Am ', '10 Am ', '11 Am ', '12 Am ', '1 Pm ', '2 Pm ', '3 Pm ', '4 Pm ', '5 Pm ', '6 Pm ', '7 Pm '];

// function getRandomNumber(max, min) {
//   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// }

// function Cookie(location, maxCust, minCust, avgCS) {
//   this.location = location;
//   this.maxCust = maxCust;
//   this.minCust = minCust;
//   this.avgCS = avgCS;
//   this.numOfCustPerHour = [];
//   this.avgUn =[];

// }


// Cookie.prototype.custPurH = function () {
//   for (let i = 0; i < time.length; i++) {
//     let randomCustPurh = getRandomNumber(this.maxCust, this.minCust);
//     this.numOfCustPerHour.push(randomCustPurh);
//   }
// }

// Cookie.prototype.unPurH = function () {
//   for (let i = 0; i < time.length; i++) {
//     let avgUnPurH = this.numOfCustPerHour[i] * this.avgCS;
//     avgUnPurH = parseInt(avgUnPurH);
//     this.avgUn.push(avgUnPurH);
//  }
// }



// const Seattle = new Cookie('Seattle', 23, 65, 6.3);
// console.log(Seattle);
// Seattle.unPurH();

// Seattle.custPurH();
// // Seattle.render();