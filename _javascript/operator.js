// 運算子

let x = 10;
let y = 6;

// 算術運算子

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);//求餘數

// 比較運算子

console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);
console.log(x == y);
console.log(x === y);
console.log(x != y);

let a = 10;
let b = '10';
console.log(a == b);
console.log(a === b);//值與資料型態皆須相等

// 指定運算子 //賦值運算子

// console.log(x = y);
// console.log(x += y);//x = x + y
// console.log(x -= y);//x = x - y
// console.log(x *= y);//x = x * y
// console.log(x /= y);//x = x / y
// console.log(x %= y);//x = x % y

// 邏輯運算子 && || !
console.log(x > 0 && y < 0);
console.log(x > 0 || y < 0);
console.log(!x);

// 三元運算子

// 

// let result = x < 0 ? 'success':'error';

let score = 34;

let result = score >= 80 ? 'good': score >= 60 ? 'soso' : 'bad';  

console.log(result);

// 條件 ? 成立 : 不成立
// 條件 ? 成立 : 第二條件 ? 成立 : 不成立