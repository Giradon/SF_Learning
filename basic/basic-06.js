/** 산술 연산자 */
console.log(10 + 20); // 30
console.log(20 - 10); // 10
console.log(10 * 20); // 200
console.log(20 / 10); // 2

/** 나머지 연산자를 통해 짝수/홀수를 구분지을 수 있다, */
console.log(20 % 3); // 2 -> 나머지 값을 반환하고, 이를 나머지 연산자라 한다.

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(5));
console.log(isEven(20));

/** 증감 연산자(Increment & Decrement)*/
let c = 30;
console.log(c++); // 30
console.log(c); // 31

let d = 30;
console.log(++d); // 31
console.log(d); // 31

let e = 30;
console.log(e--); // 30
console.log(e); // 29

let f = 30;
console.log(--f); // 29
console.log(f); // 29
