const drinks = ['紅茶','綠茶','奶茶'];
drinks.push('拿鐵');

// console.log(drinks);

// foreach
drinks.forEach(function(drink,idx){
    console.log(drink,idx);
})

// map

const scores = [80,66,92,75,55,68];
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
