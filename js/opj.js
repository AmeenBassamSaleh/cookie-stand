'use strict';

 


function branch() {
let tam=5;
let tpm =0;
let cooks=0;
for (let i = 0; i < 12; i++){
if(i>=5){
  tam=tam+1;
  function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
let rabdom = (getRandomNumber(50, 5));
  let cook = (rabdom + ' cookies');
  console.log(tam+' Am '+cook);
  cooks=cooks+rabdom;
}
}
for(let i = 0 ; i<7;i++){
if ( tpm >= 0){
  tpm = tpm + 1;
  function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
let rabdom = (getRandomNumber(50, 5));
  let cook = (rabdom + ' cookies');
  console.log(tpm+' Pm '+cook);
  cooks=cooks+rabdom

}
}
console.log('Total: '+cooks);
}
branch();



// document.write('ameen');
render: function(){
  const art =document.createElement(ameen);
container.appendchild('ul');


}




// function sales (){
//   let ulel =document.createElement('ul');
//   pel.textcontent =this.location;
//   let 

// } 