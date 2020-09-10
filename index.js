let drivers = ["Harman","James","Jessica", "Kacper",'Roheel', "Simone", "Sukh", "Tim"]

setTimeout(driversTimer, 1500);

console.log("Simone Ram")

function driversTimer(){
    const driverSelector = Math.floor(Math.random() * drivers.length);
    console.log(drivers[driverSelector]);
}




// setTimeout(bye, 3000);

// console.log("hello");

// function bye(){
//     console.log("goodbye")
// }

