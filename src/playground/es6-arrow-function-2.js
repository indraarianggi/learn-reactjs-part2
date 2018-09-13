// arguments object - no longer bound with arrow functions
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(39, 1, 99));


// this keyword - no longer bound with arrow functions
const user = {
    name    : 'Indra',
    cities  : ['Kediri', 'Yogyakarta', 'Depok'],
    printPlacesLived: function() {

        return this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // })
    }
}
console.log(user.printPlacesLived());


// Challenge
const multiplier = {
    numbers : [3, 5, 7, 9, 11, 13, 15, 17],
    by     : 2,
    multiple: function() {
        return this.numbers.map((n) => {
            return n * this.by;
        });
    }
}
console.log(multiplier.multiple());
