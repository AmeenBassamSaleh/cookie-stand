'use strict';


let time = ['6 Am ', '7 Am ', '8 Am ', '9 Am ', '10 Am ', '11 Am ', '12 Am ', '1 Pm ', '2 Pm ', '3 Pm ', '4 Pm ', '5 Pm ', '6 Pm ', '7 Pm '];

// this.time = ['6 Am ', '7 Am ', '8 Am ', '9 Am ', '10 Am ', '11 Am ', '12 Am ', '1 Pm ', '2 Pm ', '3 Pm ', '4 Pm ', '5 Pm ', '6 Pm ', '7 Pm '];

function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


function Fish(location, minCust, maxCust, avgCS) {
  this.location = location;
  this.minCust = minCust; // مو بالضرورة يكون الاسم قبل اليساوي نفسه بعده
  this.maxCust = maxCust;
  this.avgCS = avgCS;
  this.numOfCustPerHour = [];
  this.amountPurchEechHour = [];
  this.total = 0;
}
Fish.prototype.ginCustPerH = function () {
  for (let i = 0; i < time.length; i++) {
    let random = getRandomNumber(this.maxCust, this.minCust);
    this.numOfCustPerHour.push(random);
    console.log(random);
    }
  // console.log(this.numOfCustPerHour);

};
Fish.prototype.amountHuor = function () {
  for (let i = 0; i < time.length; i++) {
    // console.log(this.numOfCustPerHour[i]);
    // console.log(this.avgCS);
    let perHour = this.numOfCustPerHour[i] * this.avgCS;
    perHour = parseInt(perHour);
    // let eandom1 = getRandomNumber(this.maxCust,this.minCust);
    this.amountPurchEechHour.push(perHour);
    this.total = this.total + perHour
    console.log(this.amountPurchEechHour);
  }
}

// Fish.prototype.render = function (){
// const container = document.getElementById('select');
// const articlE1 = document.createElement('article');
// container.appendChild(articlE1);
// const pEl = document.createElement('p');
// articlE1.appendChild(pEl);
// pEl.textContent = this.location;
// const ulE1 = document.createElement('ul');
// articlE1.appendChild(ulE1);
// for (let i = 0; i < time.length; i++) {
//   let liE1 = document.createElement('li');
//   ulE1.appendChild(liE1);
//   liE1.textContent = `${time[i]}:${this.amountPurchEechHour[i]}: cookies`;
// }

// const tableEl = document.createElement('table');
// articleEl.appendChild(tableEl);
// const headerRowEl = document.createElement('tr');
// tableEl.appendChild(headerRowEl);
// const th1El = document.createElement('th');
// headerRowEl.appendChild(th1El);
// th1El.textContent = 'location';
// const th2El = document.createElement('th');
// headerRowEl.appendChild(th2El);
// th2El.textContent = `${time[i]}:${this.amountPurchEechHour[i]}: cookies`;


// const p2E1 = document.createElement('li'); 
// p2E1.textContent = `Total: ${this.total}`;
// ulE1.appendChild(p2E1);
// };


Fish.prototype.render = function (){
  const container = document.getElementById('select');
  const articlE1 = document.createElement('article');
  container.appendChild(articlE1);
  // const pEl = document.createElement('p');
  // articlE1.appendChild(pEl);
  // pEl.textContent = this.location;
  // const ulE1 = document.createElement('ul');
  // articlE1.appendChild(ulE1);
  // for (let i = 0; i < time.length; i++) {
  //   let liE1 = document.createElement('li');
  //   ulE1.appendChild(liE1);
  //   liE1.textContent = `${time[i]}:${this.amountPurchEechHour[i]}: cookies`;
  // }
  
  const tableEl = document.createElement('table');
  articleEl.appendChild(tableEl);
  const headerRowEl = document.createElement('tr');
  tableEl.appendChild(headerRowEl);
  const th1El = document.createElement('th');
  headerRowEl.appendChild(th1El);
  th1El.textContent = 'location';
  const th2El = document.createElement('th');
  headerRowEl.appendChild(th2El);
  th2El.textContent = `${time[i]}`;

  const headerRowEl = document.createElement('tr');
  tableEl.appendChild(headerRowEl);
  const th1El = document.createElement('th');
  headerRowEl.appendChild(th1El);
  th1El.textContent = 'seattle';
  const th2El = document.createElement('th');
  headerRowEl.appendChild(th2El);
  th2El.textContent = `${this.amountPurchEechHour[i]}: cookies`;
  
  
  
  // const p2E1 = document.createElement('li'); 
  // p2E1.textContent = `Total: ${this.total} : cookies`;
  // ulE1.appendChild(p2E1);
  // };
}

const seattle = new Fish('seattle', 23, 65, 6.3);
// console.log(seattle);
seattle.ginCustPerH();
seattle.amountHuor();
seattle.render();

const Tokyo = new Fish('Tokyo', 3, 24, 1.2);
// console.log(Tokyo);
Tokyo.ginCustPerH();
Tokyo.amountHuor();
Tokyo.render();

const Dubai	 = new Fish('Dubai	', 11, 38, 3.7);
// console.log(Dubai	);
Dubai	.ginCustPerH();
Dubai	.amountHuor();
Dubai	.render();


const Paris = new Fish('Tokyo', 20, 38, 2.3);
// console.log(Paris);
Paris.ginCustPerH();
Paris.amountHuor();
Paris.render();


const Lima = new Fish('Lima', 2, 16, 4.6);
// console.log(Lima);
Lima.ginCustPerH();
Lima.amountHuor();
Lima.render();












// console.log(seattle.amountPurchEechHour);
// console.log('total', seattle.total);
// seattle.return();


// const seattle = {

//   location: 'seattle',
//   minCust: 23,
//   maxCust: 65,
//   numOfCustPerHour: [],
//   amountPurchEechHour: [],
//   avgCS: 6.3,
//   total: 0,
//   ginCustPerH: function () {
//     for (let i = 0; i < time.length; i++) {
//       let random = getRandomNumber(this.maxCust, this.minCust);
//       this.numOfCustPerHour.push(random);
//     }
//     // console.log(this.numOfCustPerHour);

//   },
//   amountHuor: function () {
//     for (let i = 0; i < time.length; i++) {
//       let perHour = this.numOfCustPerHour[i] * this.avgCS;
//       perHour = parseInt(perHour);
//       // let eandom1 = getRandomNumber(this.maxCust,this.minCust);
//       this.amountPurchEechHour.push(perHour);
//       this.total = this.total + perHour
//       // console.log(this.amountPurchEechHour);
//     }
//   },
//   return: function () {
//     const container = document.getElementById('select');
//     const articlE1 = document.createElement('article');
//     container.appendChild(articlE1);
//     const pEl = document.createElement('p');
//     articlE1.appendChild(pEl);
//     pEl.textContent = this.location;
//     const ulE1 = document.createElement('ul');
//     articlE1.appendChild(ulE1);
//     for (let i = 0; i < time.length; i++) {
//       let liE1 = document.createElement('li');
//       ulE1.appendChild(liE1);
//       liE1.textContent = `${time[i]}:${this.amountPurchEechHour[i]}`;
//     }
//     const p2E1 = document.createElement('li');
//     p2E1.textContent = `Total: ${this.total}`;
//     ulE1.appendChild(p2E1);
//   }


// }

// seattle.ginCustPerH();
// seattle.amountHuor();
// console.log(seattle.amountPurchEechHour);
// console.log('total', seattle.total);
// seattle.return();

// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

// const tokyo = {

//   location : 'tokyo',
//   minCust :23,
//   maxCust :65,
//   numOfCustPerHour:[],
//   amountPurchEechHour:[],
//   avgCS : 6.3,
//   total:0,
//   ginCustPerH:function(){
//     for(let i = 0; i<time.length; i++){
//       let random = getRandomNumber(this.maxCust,this.minCust);
//       this.numOfCustPerHour.push(random);
//     }
//     // console.log(this.numOfCustPerHour);

//   },
//   amountHuor:function(){
//     for(let i = 0; i<time.length; i++){
//       let perHour =this.numOfCustPerHour[i]*this.avgCS; 
//       perHour=parseInt(perHour);
//       // let eandom1 = getRandomNumber(this.maxCust,this.minCust);
//       this.amountPurchEechHour.push(perHour);
//       this.total=this.total+perHour
//       // console.log(this.amountPurchEechHour);
//     }
//   },
//   return: function(){
//     const container = document.getElementById('select');
//     const articlE1 =document.createElement('article');
//     container.appendChild(articlE1);
//     const pEl = document.createElement('p');
//     articlE1.appendChild(pEl);
//     pEl.textContent =this.location;
//     const ulE1=document.createElement('ul');
//     articlE1.appendChild(ulE1);
//     for(let i=0; i< time.length;i++){
//       let liE1 = document.createElement('li');
//       ulE1.appendChild(liE1);
//       liE1.textContent = `${time[i]}:${this.amountPurchEechHour[i]}`;
//     }
//     const p2E1 = document.createElement('li');
//     p2E1.textContent = `Total: ${this.total}`;
//     ulE1.appendChild(p2E1);
//   }


// }

// tokyo.ginCustPerH();
// tokyo.amountHuor();
// console.log(tokyo.amountPurchEechHour);
// console.log('total',tokyo.total);
// tokyo.return();


// // bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
// const dubai = {

//   location : 'dubai',
//   minCust :23,
//   maxCust :65,
//   numOfCustPerHour:[],
//   amountPurchEechHour:[],
//   avgCS : 6.3,
//   total:0,
//   ginCustPerH:function(){
//     for(let i = 0; i<time.length; i++){
//       let random = getRandomNumber(this.maxCust,this.minCust);
//       this.numOfCustPerHour.push(random);
//     }
//     // console.log(this.numOfCustPerHour);

//   },
//   amountHuor:function(){
//     for(let i = 0; i<time.length; i++){
//       let perHour =this.numOfCustPerHour[i]*this.avgCS; 
//       perHour=parseInt(perHour);
//       // let eandom1 = getRandomNumber(this.maxCust,this.minCust);
//       this.amountPurchEechHour.push(perHour);
//       this.total=this.total+perHour
//       // console.log(this.amountPurchEechHour);
//     }
//   },
//   return: function(){
//     const container = document.getElementById('select');
//     const articlE1 =document.createElement('article');
//     container.appendChild(articlE1);
//     const pEl = document.createElement('p');
//     articlE1.appendChild(pEl);
//     pEl.textContent =this.location;
//     const ulE1=document.createElement('ul');
//     articlE1.appendChild(ulE1);
//     for(let i=0; i< time.length;i++){
//       let liE1 = document.createElement('li');
//       ulE1.appendChild(liE1);
//       liE1.textContent = `${time[i]}:${this.amountPurchEechHour[i]}`;
//     }
//     const p2E1 = document.createElement('li');
//     p2E1.textContent = `Total: ${this.total}`;
//     ulE1.appendChild(p2E1);
//   }


// }

// dubai.ginCustPerH();
// dubai.amountHuor();
// console.log(dubai.amountPurchEechHour);
// console.log('total',dubai.total);
// dubai.return();

// //ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc

// const paris = {

//   location : 'paris',
//   minCust :23,
//   maxCust :65,
//   numOfCustPerHour:[],
//   amountPurchEechHour:[],
//   avgCS : 6.3,
//   total:0,
//   ginCustPerH:function(){
//     for(let i = 0; i<time.length; i++){
//       let random = getRandomNumber(this.maxCust,this.minCust);
//       this.numOfCustPerHour.push(random);
//     }
//     // console.log(this.numOfCustPerHour);

//   },
//   amountHuor:function(){
//     for(let i = 0; i<time.length; i++){
//       let perHour =this.numOfCustPerHour[i]*this.avgCS; 
//       perHour=parseInt(perHour);
//       // let eandom1 = getRandomNumber(this.maxCust,this.minCust);
//       this.amountPurchEechHour.push(perHour);
//       this.total=this.total+perHour
//       // console.log(this.amountPurchEechHour);
//     }
//   },
//   return: function(){
//     const container = document.getElementById('select');
//     const articlE1 =document.createElement('article');
//     container.appendChild(articlE1);
//     const pEl = document.createElement('p');
//     articlE1.appendChild(pEl);
//     pEl.textContent =this.location;
//     const ulE1=document.createElement('ul');
//     articlE1.appendChild(ulE1);
//     for(let i=0; i< time.length;i++){
//       let liE1 = document.createElement('li');
//       ulE1.appendChild(liE1);
//       liE1.textContent = `${time[i]}:${this.amountPurchEechHour[i]}`;
//     }
//     const p2E1 = document.createElement('li');
//     p2E1.textContent = `Total: ${this.total}`;
//     ulE1.appendChild(p2E1);
//   }


// }

// paris.ginCustPerH();
// paris.amountHuor();
// console.log(paris.amountPurchEechHour);
// console.log('total',paris.total);
// paris.return();


// //ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd

// const lima = {

//   location : 'lima',
//   minCust :23,
//   maxCust :65,
//   numOfCustPerHour:[],
//   amountPurchEechHour:[],
//   avgCS : 6.3,
//   total:0,
//   ginCustPerH:function(){
//     for(let i = 0; i<time.length; i++){
//       let random = getRandomNumber(this.maxCust,this.minCust);
//       this.numOfCustPerHour.push(random);
//     }
//     // console.log(this.numOfCustPerHour);

//   },
//   amountHuor:function(){
//     for(let i = 0; i<time.length; i++){
//       let perHour =this.numOfCustPerHour[i]*this.avgCS; 
//       perHour=parseInt(perHour);
//       // let eandom1 = getRandomNumber(this.maxCust,this.minCust);
//       this.amountPurchEechHour.push(perHour);
//       this.total=this.total+perHour
//       // console.log(this.amountPurchEechHour);
//     }
//   },
//   return: function(){
//     const container = document.getElementById('select');
//     const articlE1 =document.createElement('article');
//     container.appendChild(articlE1);
//     const pEl = document.createElement('p');
//     articlE1.appendChild(pEl);
//     pEl.textContent =this.location;
//     const ulE1=document.createElement('ul');
//     articlE1.appendChild(ulE1);
//     for(let i=0; i< time.length;i++){
//       let liE1 = document.createElement('li');
//       ulE1.appendChild(liE1);
//       liE1.textContent = `${time[i]}:${this.amountPurchEechHour[i]}`;
//     }
//     const p2E1 = document.createElement('li');
//     p2E1.textContent = `Total: ${this.total}`;
//     ulE1.appendChild(p2E1);
//   }


// }

// lima.ginCustPerH();
// lima.amountHuor();
// console.log(lima.amountPurchEechHour);
// console.log('total',lima.total);
// lima.return();





// //   for(let i = 0; i<time.length; i++) {
// //     let randomFinal = getRandomCuc(this.minCust, this.maxCust); //why
// // this.amountPurchEechHour.push(randomFinal);
// // totat = total + randomFinal;
// // console.log(randomFinal);
// //   }
// // console.log(this.amountPurchEechHour);
// // console.log(total);
// // }
// // console.log(seattie);

// // Seattie();

// // cooks =
// // function getRandomNumber(max, min) {
// //   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive  
// // }
// // let ranNC = console.log(getRandomNumber(max, min));





// // function branch() {
// //   let tam = 5;
// //   let tpm = 0;
// //   // let cooks = 0;
// //   for (let i = 0; i < 12; i++) {
// //     if (i >= 5) {
// //       tam = tam + 1;
// //       function getRandomNumber(max, min) {
// //         return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// //       }
// //       let rabdom = (getRandomNumber(50, 5));
// //       let cook = (rabdom + ' cookies');
// //       console.log(tam + ' Am ' + cook);
// //       cooks = cooks + rabdom;
// //     }
// //   }
// //   for (let i = 0; i < 7; i++) {
// //     if (tpm >= 0) {
// //       tpm = tpm + 1;
// //       function getRandomNumber(max, min) {
// //         return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// //       }
// //       let rabdom = (getRandomNumber(50, 5));
// //       let cook = (rabdom + ' cookies');
// //       console.log(tpm + ' Pm ' + cook);
// //       cooks = cooks + rabdom

// //     }
// //   }
// //   console.log('Total: ' + cooks);
// // }
// // branch();




// // // document.write('ameen');
// // render: function(){
// //   const art =document.createElement(ameen);
// // container.appendchild('ul');


// // }




// // function sales (){
// //   let ulel =document.createElement('ul');
// //   pel.textcontent =this.location;
// //   let 

// // } 