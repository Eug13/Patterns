// var obj1 = {
//     name: "test"
// }

// var obj2 = {
//     name: "test"
// }

// console.log(obj1 === obj2);
// console.log(obj1 == obj2);

// var obj3 = obj1;
// console.log(obj3 === obj1);

//SINGLETON

// function universe() {
//     if (typeof universe.instance === 'object') {
//         return universe.instance;
//     }

//     this.name = "Space";
//     this.size = "big";

//     universe.instance = this;

//     return this;
//     // if (!universe.instance) {
//     //     return universe.instance;
//     // }// page 182-183 example
// }


// var space1 = new universe();

// var space2 = new universe();

// var space3 = new universe();
// console.log(space1 === space2);
// console.log(space3);


function Universe() {
    var instance;

    Universe = function () {
        return instance;
    };
    Universe.prototype = this;
    instance = new Universe();

    instance.constructor = Universe;

    this.name = 'bobik';
    this.age = 'old';

   return instance;

}

Universe.prototype.something = true;

var uni = new Universe();

Universe.prototype.nothing = true;

var uni2 = new Universe();

console.log(uni.something);
console.log(uni2.something);
console.log(uni.nothing);
console.log(uni2.nothing);




