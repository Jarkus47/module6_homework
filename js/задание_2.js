function isPrime(n) {
  if (!Number.isInteger(n) || n < 2 || n > 1000) return "данные неверны";
 
    let k = Math.sqrt(n);
    for (let i = 2; i <= k; i++)
      if (n % i === 0) return "не простое число";
 
    return "простое число";
}
 
console.log(isPrime(1001));
console.log(isPrime(53));
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(4));