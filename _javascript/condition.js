// if

let x = 0;

if( x > 0 ){
    console.log('success');
}

// if ... else

if(x > 0){
    console.log('success2');
}else{
    console.log('error2');
}

// if ... else if

if(x > 100){
    console.log('>100');
}else if(x > 0){
    console.log('>0');
}

// if ... else if ... else
if(x > 100){
    console.log('>100');
}else if(x > 0){
    console.log('>0');
}else{
    console.log('error3');
}

// switch

let i = 'asdf';
switch(i){
    case 0:
        console.log('星期日');
        break;
    case 1:
        console.log('星期一');
        break;
    case 2:
        console.log('星期二');
        break;
    case 3:
        console.log('星期三');
        break;
    case 4:
        console.log('星期四');
        break;
    case 5:
        console.log('星期五');
        break;
    case 6:
        console.log('星期六');
        break;
    default:
        console.log('請輸入正確的數值');

}