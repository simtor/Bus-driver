let drivers = ["Harman","James","Jessica", "Kacper",'Roheel', "Simone", "Sukh", "Tim"]

let notSameDriver = []

// setTimeout(driversTimer, 1500);
// setInterval(driversTimer, 300000);
setInterval(driversTimer, 1000);

console.log("Driver selector started: ")

function driversTimer(){
    const driverSelector = Math.floor(Math.random() * drivers.length);
    notSameDriver.push(driverSelector);
    console.log(drivers[driverSelector]);
    console.log(notSameDriver)
}

// function notDouble(driverSelector){
//     let foundDouble = notSameDriver.includes(driverSelector)
//     if (foundDouble){
//         console.log("You need to change");
//         driversTimer()
//     }else{
//         console.log("failure");
//     }
// }

// notDouble();

driversTimer()


// function driversTimer(){
//     let driverSelector;
//     let lastrandom;
//     while (driverSelector  === lastrandom){
//         driverSelector = Math.floor(Math.random() * drivers.length);
//         notSameDriver.push(driverSelector);
//         console.log(drivers[driverSelector]);
//         console.log(notSameDriver)
//     }
//     lastrandom = driverSelector;
// }

// setTimeout(bye, 3000);

// console.log("hello");

// function bye(){
//     console.log("goodbye")
// }

