const gretter = (myArray) => {
        for (const name of myArray) {
                console.log(`Hello ${name}`);
        }
}
gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3);




const capitalize = (letter) => {
        const [first, ...theRest] = Array.from(letter);//the three dots are there to add whatever is after first to the array
        return(first.toUpperCase() + theRest.join('').toLowerCase());
}
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));


const colors = ["red", "green", "blue"];
const capitalizedColors = colors.map(capitalize);

console.log(capitalizedColors);

var values =[1,60,34,30,20,5];

const filterLessThan20 = values.filter(value => value < 20);
console.log(filterLessThan20);


var array = [1, 2, 3, 4];
const calculateSum = array.reduce((previousValue, currentValue) => previousValue + currentValue);
const calculateProduct = array.reduce((previousValue1, currentValue1) => previousValue1 * currentValue1);

console.log(calculateSum);
console.log(calculateProduct);



class Car {
        constructor(make, model) {
                this.make = make;
                this.model = model;
        }
        details () {
                return `Model: ${this.make} Engine ${this.model}`;
        }
}
const car2 = new Car('Pontiac Firebird', '1976');
console.log(car2.details());

class Sedan extends Car {
        constructor(make, model, balance) {
                super(make, model);
                this.balance = balance.toFixed(2);
        }
        info () {
                return `${this.make} has a balance of $${this.balance}`;
        }
}

const sedan = new Sedan('Volvo SD', 2018, 30000);


console.log(sedan.info());

