//FABRICA
//fabrica of obj with similar properties.

// var corrola = CarMaker.create('sedan');

//make again fabric in home work

// function CarMaker() { };

// CarMaker.prototype.drive = function () {
//     console.log('I drive ' + this.doors + " doors!");
// };

// CarMaker.factory = function (type) {

//     var constr = type,
//     newCar;

//     if (typeof CarMaker[constr] !== "function") {
//         throw {
//                 error:'error',
//                 message: constr + 'does not exist'
//         };
//     }

//     if (typeof CarMaker[constr].prototype.drive !== 'function') {
//         CarMaker[constr].prototype = new CarMaker();
//     }

//     newCar = new CarMaker[constr]();

//     return newCar;

// };

// CarMaker.Compact = function () {
//     this.doors = 4;
// };
// CarMaker.Universal = function () {
//     this.doors = 5;
// };

// var car = CarMaker.factory('Compact');
// var car1 = CarMaker.factory('Universal');

// car.drive();
// car1.drive();


//WATER FACTORY 


function Water() { };

Water.prototype.test = function () {
    console.log('I taste ' + this.name +" "+ this.bottle + " Bottle and have " + this.label + " label !");
};

Water.factory = function (type) {

    var constr = type,
    newWater;

    if (typeof Water[constr] !== "function") {
        throw {
                error:'error',
                message: constr + 'does not exist'
        };
    }

    if (typeof Water[constr].prototype.test !== 'function') {
        Water[constr].prototype = new Water();
    }

    newWater = new Water[constr]();

    return newWater;

};

Water.Pepsi = function () {
    this.name = "PEPSI";
    this.water = "dark";
    this.bottle = "1-liter";
    this.label ="BLUE";
};
Water.Cola = function () {
    this.name = "COCA-COLA"; 
    this.water = "darker";
    this.bottle = "2-liter";
    this.label ="RED";
};

var pepsi = Water.factory('Pepsi');
var cola = Water.factory('Cola');

pepsi.test();
cola.test();

//next iterator pattern