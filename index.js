let drivers = ["Harman","James","Jessica", "Kacper",'Roheel', "Simone", "Sukh", "Tim"]


let timerStopper = 0;

console.log("Driver selector started: ")
function driversTimer(){
    const driverSelector = Math.floor(Math.random() * drivers.length);
    console.log(drivers[driverSelector]);
    let index = drivers.indexOf(drivers[driverSelector]);
    drivers.splice(index,1);
    timerStopper++;
    if(timerStopper < 8){
        setTimeout(driversTimer, 300000)
    }

}
driversTimer()