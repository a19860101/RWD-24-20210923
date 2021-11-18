// const user = new Object();
// user.name = 'John';
// user.mail = 'john@gmail.com'

const user = {
    name: 'John',
    mail: 'asdf@gmail.com'
}

// console.log(user);
// console.log(user.name);
// console.log(user.mail);

const books = [
    {
        name: '信義學 ﹕ESG先行者10個有溫度的創新',
        author: '陳建豪',
        price: 450
    },
    {
        name: '轉念的力量（親簽版）：不被念頭綁架，選擇你的人生，讓心靈自由',
        author: '賴佩霞',
        price: 400,
    },
    {
        name:'美麗只是一朵花，女人值得永遠精彩',
        author:'高愛倫',
        price:380
    }
];

for(let book of books){
    console.log(book.name);
    console.log(book.price);
}