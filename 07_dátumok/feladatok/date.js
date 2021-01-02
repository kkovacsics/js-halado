'use strict';

console.log('----------- 1. feladat -----------');
// Írj egy függvényt, aminek a visszatérési értéke az adott év 01.01. óta eltelt másodperceinek száma!
function getYearSecond() {
    const dateNow = new Date();
    const date20200101 = new Date(dateNow.getFullYear(), 0, 1, 0, 0, 0);  // 2020.01.01 0:00

    return (Date.now() - date20200101.getTime()) / 1000;
}
console.log(getYearSecond());

console.log('----------- 2. feladat -----------');
// Írj egy függvényt, aminek a visszatérési értéke az adott évben eddig eltelt munkanapok (hétfő-péntek) száma!
function getWorkDay() {
    const dateNow = new Date();
    const date = new Date(dateNow.getFullYear() - 0, 0, 1, 0, 0, 0);  // 2020.01.01 0:00

    let workDays = 0;
    while (date < dateNow) {
        if (date.getDay() != 0 && date.getDay() != 6)
            workDays++;
        date.setDate(date.getDate() + 1);
    }
    return workDays;
}
function getWorkDay2() {    // kicsit gyorsabb
    const dateNow = new Date();
    const date = new Date(dateNow.getFullYear() - 0, 0, 1, 0, 0, 0);  // 2020.01.01 0:00

    let estimatedDay = Math.trunc((dateNow.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
    let workDays = Math.trunc(estimatedDay / 7) * 5;

    date.setDate(date.getDate() + Math.trunc(estimatedDay / 7) * 7);
    while (date < dateNow) {
        if (date.getDay() != 0 && date.getDay() != 6)
            workDays++;
        date.setDate(date.getDate() + 1);
    }
    return workDays;
}
const start = Date.now();
console.log(`${getWorkDay()} workdays`);
const stop = Date.now();
console.log(`${stop - start}ms`);
console.log(`${getWorkDay2()} workdays`);
console.log(`${Date.now() - stop}ms`);


console.log('----------- 3. feladat -----------');
/*
Írj egy függvényt, ami paraméterként egy Date objektumot kap, 
a visszatérési értéke pedig egy objektum két tulajdonsággal, 
ami a következő formátumban tartalmazza a paraméterként kapott dátumot
short: 2020. jan. 11. 14:20 (tehát évszám, a hónap neve röviden magyarul, kisbetűkkel a nap száma, 
            majd az idő a másodperc nélkül)
long: 2020. január 11. 14:20:10 (tehát évszám, a hónap neve magyarul, a nap száma, majd az idő)
*/
const months = ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'];
let dateToObject = date => ({
    short: `${date.getFullYear()}. ${months[date.getMonth()].slice(0, 3)}. ${date.getDate()}. ${date.getHours()}:${date.getMinutes()}`,
    long: `${date.getFullYear()}. ${months[date.getMonth()]} ${date.getDate()}. ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
});
console.log(dateToObject(new Date()));

// elegánsabb verzió
function customDateFormats(date) {
    return {
        short: date.toLocaleDateString('hu-HU', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }),
        long: date.toLocaleDateString('hu-HU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }),
    };
}
console.log(customDateFormats(new Date()));