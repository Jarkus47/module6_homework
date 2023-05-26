function funcName() {
var numbers = [2, 2, 3, 4, 5, 6, 7, 8, 9, 10, '!', '?', 0, 0, Null];
numbers = numbers.filter(function(item){
    return typeof item === 'number';
});

var isOdd0 = (num) => num % 2 == 0;
var odd0 = numbers.filter(isOdd0);
var isOdd1 = (num) => num == 0;
var odd1 = numbers.filter(isOdd1);
console.log(odd0.length - odd1.length);

var isOdd2 = (num) => num % 2 !== 0;
var odd2 = numbers.filter(isOdd2);
console.log(odd2.length);
console.log(odd1.length)
}
funcName();