// let a = new Array();
// a[0] = 'Apple';
// a[1] = 'Banana';
// a[2] = 'Cat';

// let a =  new Array('Apple','Banana','Cat');

let a = ['Apple','Banana','Cat','Dog','Egg','Folk'];

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

for(let data of a){
    console.log(data);
}