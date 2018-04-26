
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

var App = App || {};

App.define = function (namespace) {
    var parts = namespace.split("."),
        parent = App,
        i;

    if (parts[0] == "App") {
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


// App.define('utils.calc');
App.define('utils.show');



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



App.utils.show = (function () {
    // console.log("utils.Show");

    var screenX, screenY;
    screenX = screen.width;
    screenY = screen.height;

    return {
        getWidth: function(){
        console.error("Width :"+ screenX);
    },
    getHeight: function() {
        console.error("Height :"+screenY);

    }
}
}());

var Show = App.utils.show;
Show.getWidth();
Show.getHeight();


