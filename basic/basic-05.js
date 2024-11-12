/** 데이터 타입 확인 */

const num = 100;
console.log(typeof num); // number

console.log(typeof 'Hello'); // string
console.log(typeof 'Hello' === 'string'); // true
console.log(typeof false === 'boolean'); // true
console.log(typeof undefined === 'undefined'); // true
console.log(typeof null === 'null'); // false
// null은 object이기 떄문에 false

console.log(typeof null); // object
console.log(typeof []); // array?

console.log(typeof {}); // object?

console.log([].constructor);
console.log([].constructor === Array); // true
console.log([].constructor === Object); // true

/** null 데이터 어떻게 타입을 확인할 수 있을까? */
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(null).slice(8, -1));

/** 코드 재사용 */
function checkType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}

console.log(checkType(null)); // Null
console.log(checkType([])); // Array
console.log(checkType({})); // Object
console.log(checkType('안녕하세요!')); // String
console.log(checkType(10000)); // Number
console.log(checkType(function () {})); // Function
console.log(checkType(true)); // Boolean
console.log(checkType(undefined)); // Undefined
