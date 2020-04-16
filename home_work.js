'use strict';


let money = +prompt('Ваш бюджет?' );
let time = prompt('Введите дату в формате YYYY-MM-DD' );


let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    saving: false,
};

/* let oi = 0;
while(oi < 1) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ),
        b = prompt('Во сколько обойдется?', );
        if( (typeof(a) )=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done!');
            appData.expenses[a] = b;
        } else {
    
        }    
    oi++;    
}; */
/* let ob = 0;
do {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ),
        b = prompt('Во сколько обойдется?', );
        if( (typeof(a) )=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done!');
            appData.expenses[a] = b;
        } else {
    
        }
} while (ob < 1) {
    ob++;
}; */

for(let i = 0; i < 1; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ),
        b = prompt('Во сколько обойдется?', );

    
    if( (typeof(a) )=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done!');
        appData.expenses[a] = b;
    } else {

    }
};

appData.moneyPerDay = money / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay); //расход денег в день, за вычетом квартплаты

if( appData.moneyPerDay < 100) {
    alert('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    alert('Средний уровень достатка!');
} else if (appData.moneyPerDay > 2000) {
    alert('Высокий уровень достатка!');
} else {
    alert('Ошибка!');
}
 