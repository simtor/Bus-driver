let drivers = ["Harman","James","Jessica", "Kacper",'Roheel', "Simone", "Sukh", "Tim"]

// setTimeout(driversTimer, 1500);
// setInterval(driversTimer, 300000);
setInterval(driversTimer, 1000);

console.log("Driver selector started: ")

function driversTimer(){
    const driverSelector = Math.floor(Math.random() * drivers.length);
    console.log(drivers[driverSelector]);
}
driversTimer()




// setTimeout(bye, 3000);

// console.log("hello");

// function bye(){
//     console.log("goodbye")
// }

