// let a = new Array();
// a[0] = 'Apple';
// a[1] = 'Banana';
// a[2] = 'Cat';

// let a =  new Array('Apple','Banana','Cat');

let a = ['Apple','Banana','Cat','Dog','Egg'];

// console.log(a);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);

// console.log(a.length);

// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }

// for(let data in a){
//     // console.log(data);
//     console.log(a[data]);
// }

// for(let data of a){
//     console.log(data);
// }

// pop(),push()

// a.pop();
//移除陣列最後一個值


// a.push('Dog');
//新增陣列最後一個值


// shift(),unshift()

// a.shift();
//移除陣列第一個值

// a.unshift('TEST');
//新增陣列第一個值


// toString() 陣列轉字串
// console.log(a.toString());

// join() 陣列轉字串，可更換符號
// console.log(a.join('__'));

// split() 字串轉陣列
let str = 'Responsive_Web_Design';
// console.log(str.split('_'));

// splice() 拼接

// a.splice(1,1,'Bread','Brown');
a.splice(4,1);
a.splice(2,1);
console.log(a);
