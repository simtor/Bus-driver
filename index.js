const { exec } = require("child_process");
const readline = require('readline');
var log = console.log;
const rl = readline.createInterface({
    input : process.stdin, 
    output : process.stdout
  });

setTimeout(driversTimer, 30000)
setTimeout(reminder, 30000)
// console.log("Driver selector started: ") 

setTimeout(
  () => {
    console.log('Hello after 4 seconds');
  },
  4 * 1000
);

let drivers = []
let timerStopper = 0;


function reminder(){
  console.log("Driver selector started: ");
}

console.log("Please enter the names of the driver below");
console.log("You have 30 seconds to input thr drivers numbers");

let recursiveAsyncReadLine = function () {
  rl.question('Names of the drivers: ', function (answer) {
      drivers.push(answer);
    if (answer == 'exit') 
      return rl.close();
    recursiveAsyncReadLine(); 
  });
};
recursiveAsyncReadLine();

function driversTimer(){
    const driverSelector = Math.floor(Math.random() * drivers.length);
    console.log(drivers[driverSelector]);
    let index = drivers.indexOf(drivers[driverSelector]);
    drivers.splice(index,1);
    timerStopper++;
    if(drivers.length > 0){
        // setTimeout(driversTimer, 300000)
        setTimeout(driversTimer, 6000)
    }
    exec("afplay Left.mp3");
}




//-----------------------------------------------------------


// rl.question(`What's your name? `, (name) => {
//     rl.question(`What are you from? `, (country) => {
//         console.log(`${name} is from ${country}`);
//         rl.close();
//     });
// });

// let i =0;
// rl.question('How many times to you want ot repeat: ', driverData)
// function driverData(driverAmount){
//     while(i < driverAmount){
//         rl.question("Names of the drivers: ",function(answer) {
//             drivers.push(answer);
//             console.log(drivers)
//         });
//         // console.log('Simone Ram');
//         i++;
//     }
// }

// var count = 0;
// while(count < 10){
//     rl.question("What is your favourite food: ",function(answer) {
//         console.log('Oh, so your favorite food is ' + answer);
//     });

//     count ++;
// }

// rl.question("Names of drivers: ", driversInput)
// function driversInput(driversName){
//     drivers.push(driversName);
//     // console.log(drivers)
// }

// driverData();


// let drivers = ["Harman","James","Jessica", "Kacper",'Roheel', "Simone", "Sukh", "Tim"]

