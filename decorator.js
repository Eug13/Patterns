// Sale.prototype.decorate = function (decorator) {
//     var F = function () { },
//         overrides = this.constructor.decorators[decorator],
//         i, newobj;
//     F.prototype = this;
//     newobj = new F();
//     newobj.uber = F.prototype;
//     for (i in overrides) {
//         if (overrides.hasOwnProperty(i)) {
//             newobj[i] = overrides[i];
//         }
//     }
//     return newobj;
// };





// function Sale(price) {
//     this.price = price || 100;
// }
// Sale.prototype.getPrice = function () {
//     return this.price;
// };

// Sale.decorators.fedtax = {
//     getPrice: function () {
//         var price = this.uber.getPrice();
//         price += price * 5 / 100;
//         return price;
//     }
// };

// Sale.decorators.quebec = {
//     getPrice: function () {
//         var price = this.uber.getPrice();
//         price += price * 7.5 / 100;

//         return price;
//     }
// };

// Sale.decorators.money = {
//     getPrice: function () {
//         return '$' + this.uber.getPrice().toFixed(2);
//     }
// };
// Sale.decorators.cdn = {
//     getPrice: function () {
//         return 'CDN$ ' + this.uber.getPrice().toFixed(2);
//     }
// };


//second variant



function Sale(price) {
    this.price = (price > 0) || 100;
    this.decorators_list = [];
};


Sale.prototype.decorate = function (decorator) {
    this.decorators_list.push(decorator);
};
Sale.prototype.getPrice = function () {
    var price = this.price, i, max = this.decorators_list.length, name;
    for (i = 0; i < max; i += 1) {
        name = this.decorators_list[i];
        price = Sale.decorators[name].getPrice(price);
    }
    return price;
};


Sale.decorators = {};
Sale.decorators.fedtax = {
    getPrice: function (price) {
        return price + price * 5 / 100;
    }
};
Sale.decorators.quebec = {
    getPrice: function (price) {
        return price + price * 7.5 / 100;
    }
};

Sale.decorators.money = {
    getPrice: function (price) {
        return '$' + price.toFixed(2);
    }
};


var sale = new Sale(100); // цена 100 долларов 
sale.decorate('fedtax');  // добавить федеральный налог 
sale.decorate('quebec');  // добавить местный налог 
sale.decorate('money');   // форматировать как денежную сумму 
sale.getPrice();          // “$112.88”