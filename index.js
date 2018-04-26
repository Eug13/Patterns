
//Scope

// var a = 1;
// function test() {
//     console.log("test" + a);
//     var a = 50;
//     console.log(a);
// }
// test();
// console.log(a);

//MY OWN SCOPE

// if (typeof app === undefined) {
//     var app = {}
//     console.log("created");
// } else {
//     console.log("exist");
// }


// var App = App || {};

// App.define = function (namespace) {
//     var parts = namespace.split("."),
//         parent = App,
//         i;

//      if (parts[0] == "App") {
//         parts = parts.slice(1);
//         console.log(parts);S
//     }

//         for (i = 0; i < parts.length; i++) {

//         if (typeof parent[parts[i]] == "undefined") {
//             parent[parts[i]] = {};
//         }

//         parent = parent[parts[i]];
//     }
//     return parent;
// }


// var APP = APP || {};  //this way how to create new obj

// APP.utils.calc
// APP.utils.detectIp

// APP.define = function (nameSpace) {
//     var parts = nameSpace.split("."),
//         parent = APP,
//         i;
//     if (parts[0] == "APP") {
//         parts = parts.slice(1);
//     }

//     for (i = 0; i < parts.length; i++) {
//         if (typeof [parent.parts[i]] == undefined) {
//             parent[parts[i]] = {};
//         }
//         parent = parent[parts[i]];
//     }

//     return parent;
// }

// APP.define('utils.calc');



//IT WORKS

// var App = App || {};

// App.define = function (namespace) {
//     var parts = namespace.split("."),
//         parent = App,
//         i;

//     if (parts[0] == "App") {
//         parts = parts.slice(1);
//         console.log(parts);
//     }

//     for (i = 0; i < parts.length; i++) {

//         if (typeof parent[parts[i]] == "undefined") {
//             parent[parts[i]] = {};
//         }

//         parent = parent[parts[i]];
//     }
//     return parent;
// }


// // App.define('utils.calc');
// App.define('utils.show');



// App.utils.calc = (function () {
//     var x, y;
//     return {
//         add: function () {
//             return x + y;
//         },

//         minus: function () {
//             return x - y;
//         },

//         multi: function () {
//             return x * y;
//         },

//         setX: function (val) {
//             x = val;
//         },

//         setY: function (val) {
//             y = val;
//         }
//     };
//     // console.log("utils.calc");
// }());

// (function () {
//     var calc = App.utils.calc;

//     calc.setX(12);
//     calc.setY(3);

//     console.log(calc.add());
//     console.log(calc.minus());
//     console.log(calc.multi());
// }());



// App.utils.show = (function () {
//     // console.log("utils.Show");

//     var screenX, screenY;
//     screenX = screen.width;
//     screenY = screen.height;

//     return {
//         getWidth: function(){
//         console.error("Width :"+ screenX);
//     },
//     getHeight: function() {
//         console.error("Height :"+screenY);

//     }
// }
// }());

// var Show = App.utils.show;
// Show.getWidth();
// Show.getHeight();


// MY OWN MODULE WITH UNIQ NAME SPACES


// var JJ = JJ || {};

// JJ.define = function (namespace) {
//     var parts = namespace.split("."),
//         parent = JJ,
//         i;

//     if (parts[0] == "JJ") {
//         parts = parts.slice(1);
//         console.log(parts);
//     }

//     for (i = 0; i < parts.length; i++) {

//         if (typeof parent[parts[i]] == "undefined") {
//             parent[parts[i]] = {};
//         }

//         parent = parent[parts[i]];
//     }
//     return parent;
// }

// JJ.define('tools.show');

// JJ.tools.show = (function () {
//     console.log("SHOWWWWWWWWWWWWWWWW");
// }());



var ANIMAL = ANIMAL || {};

ANIMAL.define = function (namespace) {
    var parts = namespace.split("."),
        parent = ANIMAL,
        i;

    if (parts[0] == "ANIMAL") {
        parts = parts.slice(1);
        console.log(parts);
    }

    for (i = 0; i < parts.length; i++) {

        if (typeof parent[parts[i]] == "undefined") {
            parent[parts[i]] = {};
        }

        parent = parent[parts[i]];
    }
    return parent;
}

//==========================================

ANIMAL.define('create.cat');
ANIMAL.define('create.dog');

ANIMAL.create.cat = (function () {

    var name, age, beed;

    return {
        setName: function (val) {
            name = val;
        },
        setAge: function (val) {
            age = val;
        },

        setBreed: function (val) {
            breed = val;
        },
        show: function(){
            console.log(name,age,breed);
        }
    }
    //  console.log(name,age,breed);
})();

// ANIMAL.create.dog = (function () {
//     var name, age, beed,barking;


//     return {
//         setName: function (val) {
//             name = val;
//         },
//         setAge: function (val) {
//             age = val;
//         },

//         setBreed: function (val) {
//             breed = val;
//         },
//         setBark: function (val) {
//             barking = val;
//         },
//         show: function(){
//             console.log(name,age,breed,barking);
//         }
//     }
  
// })();

//NEW DOG

ANIMAL.create.dog = (function () {
    var name, age, beed,barking;


         function setName (val) {
            name = val;
        }
        function  setAge(val) {
            age = val;
        }

         function setBreed(val) {
            breed = val;
        }
        function setBark(val) {
            barking = val;
        }
        function  show(){
            console.log(name,age,breed,barking);
        }
        return{

            setName:setName,
            setAge:setAge,
            setBreed:setBreed,
            setBark:setBark,
            show:show
        };
  
})();


// (function () {
//     var cat = ANIMAL.create.cat;
//     cat.setName('Murzik');
//     cat.setAge(2);
//     cat.setBreed('CATYAO');
//     cat.show();
// }());

(function () {
    var dog = ANIMAL.create.dog;
    dog.setName('Bobik');
    dog.setAge(4);
    dog.setBreed('Dvorterjer');
    dog.setBark('Loud');
    dog.show();
}());

