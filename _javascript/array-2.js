const drinks = ['紅茶','綠茶','奶茶'];
drinks.push('拿鐵');

console.log(drinks);

// foreach
drinks.forEach(function(drink,idx){
    console.log(drink,idx);
})

// map

const scores = [66,80,92,75,55,68];
const scores_map = scores.map(function(data){
    if(data >= 60){
        return '及格'
    }else{
        return '不及格';
    }
})

// console.log(scores_map);

// filter
const scores_filter = scores.filter(function(data){
    if(data >= 60){
        return data;
    }
})

console.log(scores_filter);

const drinks_filter = drinks.filter(function(data){
    return data != '綠茶'
})

console.log(drinks_filter);

//find (無論結果有幾個值，最終只會有一個值被回傳)

const drinks_find = drinks.find(function(data){
    return data == '拿鐵';
})
console.log(drinks_find);

const scores_find = scores.find(function(data){
    return data >= 60;
})
console.log(scores_find);


//findIndex (無論結果有幾個值，最終只會有一個值被回傳)
const drinks_findIndex = drinks.findIndex(function(data){
    return data == '拿鐵';
})
console.log(drinks_findIndex);

const scores_findIndex = scores.findIndex(function(data){
    return data >= 80;
})
console.log(scores_findIndex);

// reduce

const price = [100,199,239,999];
const total = price.reduce(function(a,b){
    return a + b;
});
console.log(total);