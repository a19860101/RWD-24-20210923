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