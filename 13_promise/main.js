'use strict';

const jsonUrl = 'https://raw.githubusercontent.com/jokecamp/FootballData/master/EPL%202015%20-%202016/2015-10-15.epl-stats.json';

/* const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('hiba');
        resolve(5);
    }, 3000 );
});

promise1.then(
    data => console.log(data),
    err => console.error(err)
);
 */

console.time('pr');     // timer indítás, pr a timer neve

fetch(jsonUrl).then(
    resp => resp.json()
).then(
    data => {
        console.log(data);
        console.timeEnd('pr');      // a timer leállítása, kiíratása
    }
).catch (
    err => console.error(err)
);