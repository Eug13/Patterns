//FABRICA
//fabrica of obj with similar properties.

// var corrola = CarMaker.create('sedan');

//make again fabric in home work

function CarMaker() { };

CarMaker.prototype.drive = function () {
    console.log('I drive ' + this.doors + " doors!");
};

CarMaker.factory = function (type) {

    var constr = type,
    newCar;

    if (typeof CarMaker[constr] !== "function") {
        throw {
                error:'error',
                message: constr + 'does not exist'
        };
    }

    if (typeof CarMaker[constr].prototype.drive !== 'function') {
        CarMaker[constr].prototype = new CarMaker();
    }

    newCar = new CarMaker[constr]();

    return newCar;

};

CarMaker.Compact = function () {
    this.doors = 4;
};
CarMaker.Universal = function () {
    this.doors = 5;
};

var car = CarMaker.factory('Compact');
var car1 = CarMaker.factory('Universal');

car.drive();
car1.drive();

//next iterator