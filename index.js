let drivers = ["Harman","James","Jessica", "Kacper",'Roheel', "Simone", "Sukh", "Tim"]

// let notSameDriver = []

// setInterval(driversTimer, 300000);
setInterval(driversTimer, 1000);

console.log("Driver selector started: ")

function driversTimer(){
    ranNums = [],
    i = drivers.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    console.log(ranNums)
    ranNums.push(drivers[j]);
    // console.log(ranNums)
    // drivers.splice(j,1);
}
   
}

driversTimer()


 // const driverSelector = Math.floor(Math.random() * drivers.length);
    // notSameDriver.push(driverSelector);
    // console.log(drivers[driverSelector]);
    // // console.log(notSameDriver)
    // if(notSameDriver.includes(driverSelector)){
    //     console.log(notSameDriver)
    //     console.log("Right")
    // }else{
    //     console.log("wrong")
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



