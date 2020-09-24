let drivers = ["Harman","James","Jessica", "Kacper",'Roheel', "Simone", "Sukh", "Tim"]

// let notSameDriver = []

// setInterval(driversTimer, 300000);
// setInterval(driversTimer, 1000);
let timerStopper = 0;

console.log("Driver selector started: ")
// console.log(drivers)
function driversTimer(){
    const driverSelector = Math.floor(Math.random() * drivers.length);
    // notSameDriver.push(driverSelector);
    console.log(drivers[driverSelector]);
    let index = drivers.indexOf(drivers[driverSelector]);
    drivers.splice(index,1);
    console.log(drivers)
    timerStopper++;
    if(timerStopper < 8){
        setTimeout(driversTimer, 1000)
    }
    console.log(timerStopper);

    // drivers.splice(drivers[driverSelector])
    // if(notSameDriver.includes(driverSelector)){
    //     const driverSelector2 = Math.floor(Math.random() * drivers.length);
    //     console.log(drivers[driverSelector], "changed");
    // }else{
    //     console.log(drivers[driverSelector], "not changed");
    // }
    // console.log(notSameDriver

}
driversTimer()



// function driversTimer(){
//     ranNums = [],
//     i = drivers.length,
//     j = 0;
// while (i--) {
//     j = Math.floor(Math.random() * (i+1));
//     ranNums.push(drivers[j]);
//     console.log(ranNums)
//     // console.log(ranNums)
//     // drivers.splice(j,1);
// }
   
// }

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



