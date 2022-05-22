//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers =5;
        this.passenger =0;
        this.numberOfWheels =4;
        this.maxSpeed =160;
        this.fuel =10;
        this.scheduleService = false;
    }

    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }

    start() {
        if (this.fuel > 0) {            
            console.log('engine has started.');
            return this.started = true
        } else {
            console.log('no fuel');
            return this.started = false;
        }
    }

    loadPassenger(num) {
        if (this.passenger<this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " don't have enough space to take all passengers.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }
}

let myCar = new Car('Mercury', 'rad_sedan', '2002', 'white', 50000)
    myCar.start()
    myCar.loadPassenger(5)
    myCar.stop()
    myCar.checkService()
console.log(myCar)

let mySecondCar = new Car('Chevy', 'Spark', '2016', 'cerulean', 32000)
    mySecondCar.start()
    mySecondCar.loadPassenger(3)
    mySecondCar.stop()
    mySecondCar.checkService()
    mySecondCar.scheduleService()
console.log(mySecondCar)