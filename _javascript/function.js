// test();
// 函式陳述式 function statement (提升性)
function test(){
    alert('hello test');
}




// 函式表達式 function expression
const test2 = function(){
    alert('hello test2');
}
// test2()

function calc(x){
    return x;
}

function square(w,h){
    let val = w * h;
    return val;
}

console.log(square(4,3));
console.log(square(5,8));

const total = function(price,tax){
    return price * tax;
}
console.log(total(1000,1.5));

// 箭頭函式 arrow function

// const foo = () => {
//     return 'hello';
// }

// 當函式只有一個參數時，小括號可以省略
// const foo = x => {
//     return x*x;
// }

// 當函式的動作只有return時，大括號與return可以省略

const foo = x => x*x;

console.log(foo(11));

//this

const obj = {
    name : 'normal',
    active : function(){
        return this;
    },
    active2 : ()=>{
        return this;
    }

}

console.log(obj.active());
console.log(obj.active2());

