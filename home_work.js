'use strict';


let money = +prompt('Ваш бюджет?' );
let time = prompt('Введите дату в формате YYYY-MM-DD' );

let a = prompt('Введите обязательную статью расходов в этом месяце', );
let b = prompt('Во сколько обойдется?', );
let appData = {
    moneyData: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {
        question: a,
        answer: b,
    },
    income : [],
    saving: false,
};

console.log(appData.optionalExpenses);
alert(appData.optionalExpenses.question + " : " + appData.optionalExpenses.answer);
alert(money / 30);