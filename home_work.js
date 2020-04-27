'use strict';

let money;
let time;


function start() {
    money = +prompt('Ваш бюджет?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет?', '');
    }
}
start();


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
        for(let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ""),
                b = prompt('Во сколько обойдется?', "");
        
            
            if( (typeof(a) ) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                console.log('done!');
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay + " рублей");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            alert ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            alert ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            alert ("Это высокий уровень достатка!");
        } else {
            alert ("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if(appData.savings == true) {
            let save = +prompt('Какова сумма накоплений', '');
            let percent = +prompt('Под какой процент', '');
    
            appData.mounthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита ' + appData.mounthIncome);
        }
    },
    chooseOptExpenses: function() {
        for( let i = 0; i < 3; i++) {
            let a = prompt('Номер статьи необязательных расходов', '');
            let b = prompt('Сколько тратите?', '');
    
    
            if( (typeof(a) ) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                appData.optionalExpenses[a] = b;
            } else {
                i--;
            }
        }
    },
    choseIncome: function() {
        for(let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход (Перечислите через запятую)','');
            appData.income = items.split(', ');
            if(typeof(items) === 'string' && typeof(items) != null && items != '') {
                appData.income.push = prompt('Может какие то еще дохоты?','');
                appData.income.sort();
                appData.income.forEach(function(items, i) {
                alert('Способы доп.заработка :' + ' ' + (i+1) +' : ' + items);
            }); 
            } else {
                alert("Не верно введенные данные, попробуйте еще раз!");
                i--;
            }
             
        }     
    }
};
for (let key in appData) {
    console.log('Наша программа включает в себя данные : ' + key);
}