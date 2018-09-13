'use strict';

// arguments object - no longer bound with arrow functions
var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(add(39, 1, 99));

// this keyword - no longer bound with arrow functions
var user = {
    name: 'Indra',
    cities: ['Kediri', 'Yogyakarta', 'Depok'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // })
    }
};
console.log(user.printPlacesLived());

// Challenge
var multiplier = {
    numbers: [3, 5, 7, 9, 11, 13, 15, 17],
    by: 2,
    multiple: function multiple() {
        var _this2 = this;

        return this.numbers.map(function (n) {
            return n * _this2.by;
        });
    }
};
console.log(multiplier.multiple());
