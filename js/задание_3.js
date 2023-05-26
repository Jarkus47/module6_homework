function sum(x) {
    return function(y) {
        return x + y;
    };
}

let a = sum(1);
console.log( a(0), a(1), a(2) );

console.log( sum(1)(1), sum(2)(3), sum(5)(6) );