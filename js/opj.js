'use strict';

let totof = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


let time = ['6 Am ', '7 Am ', '8 Am ', '9 Am ', '10 Am ', '11 Am ', '12 Am ', '1 Pm ', '2 Pm ', '3 Pm ', '4 Pm ', '5 Pm ', '6 Pm ', '7 Pm ', '     total'];

function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
const container = document.getElementById('select');
const table = document.createElement('table');
container.appendChild(table);
const tr1 = document.createElement('tr');
container.appendChild(tr1);
const th0 = document.createElement('th');
container.appendChild(th0);
th0.textContent = `location`;
for (let i = 0; i < time.length; i++) {
  const th1 = document.createElement('th');
  container.appendChild(th1);
  th1.textContent = `${time[i]}`;
};








function Fish(location, minCust, maxCust, avgCS) {
  this.location = location;
  this.minCust = minCust; // مو بالضرورة يكون الاسم قبل اليساوي نفسه بعده
  this.maxCust = maxCust;
  this.avgCS = avgCS;
  this.numOfCustPerHour = [];
  this.amountPurchEechHour = [];
  this.total = 0;
  this.tot = 0;
}
Fish.prototype.ginCustPerH = function () {
  for (let i = 0; i < time.length; i++) {
    let random = getRandomNumber(this.maxCust, this.minCust);
    this.numOfCustPerHour.push(random);
    console.log(random);
  }

};
Fish.prototype.amountHuor = function () {
  for (let i = 0; i < time.length; i++) {
    // if( i== ;)
    let perHour = this.numOfCustPerHour[i] * this.avgCS;
    perHour = parseInt(perHour);
    this.amountPurchEechHour.push(perHour);
    this.total = this.total + perHour
    console.log(this.amountPurchEechHour);
    totof[i]=totof[i]+perHour; // جمع بالعرض 
  }
}

Fish.prototype.render = function () {
  const tr2 = document.createElement('tr');
  container.appendChild(tr2);
  const th3 = document.createElement('th');
  container.appendChild(th3);
  th3.textContent = this.location;
  for (let i = 0; i < time.length; i++) {
    const th4 = document.createElement('td');
    container.appendChild(th4);
    th4.textContent = `${this.amountPurchEechHour[i]}`;
  }

  const th5 = document.createElement('td');
  container.appendChild(th5);
  th5.textContent = `${this.total}`;
};

//  function totoft(){
//   const tr7 = document.createElement('tr');
//   container.appendChild(tr7);
//   const th7 = document.createElement('th');
//   container.appendChild(th7);
//   th7.textContent = `totaloftotal`
//   for (let i = 0; i < time.length; i++) {
//     const th8 = document.createElement('td');
//     container.appendChild(th8);
//     th8.textContent = this.totalof[i];
//   };
// };console.log(totoft)


const seattle = new Fish('seattle', 23, 65, 6.3);
console.log(seattle);
seattle.ginCustPerH();
seattle.amountHuor();
seattle.render();

const Tokyo = new Fish('Tokyo', 3, 24, 1.2);
console.log(Tokyo);
Tokyo.ginCustPerH();
Tokyo.amountHuor();
Tokyo.render();

const Dubai = new Fish('Dubai	', 11, 38, 3.7);
console.log(Dubai);
Dubai.ginCustPerH();
Dubai.amountHuor();
Dubai.render();


const Paris = new Fish('Tokyo', 20, 38, 2.3);
console.log(Paris);
Paris.ginCustPerH();
Paris.amountHuor();
Paris.render();


const Lima = new Fish('Lima', 2, 16, 4.6);
console.log(Lima);
Lima.ginCustPerH();
Lima.amountHuor();
Lima.render();


const tr88 = document.createElement('tr');
container.appendChild(tr88);
const th88 = document.createElement('th');
container.appendChild(th88);
th88.textContent = `TotalsPerH`;
for (let i = 0; i < time.length; i++) {
  const th99 = document.createElement('th');
  container.appendChild(th99);
  th99.textContent = `${this.totof[0]}`;
};

//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

console.log(totof);
seattle.total();