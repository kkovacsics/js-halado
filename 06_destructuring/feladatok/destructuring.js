console.log('----------- 1. feladat -----------');
/*
Adott az alábbi objektum:
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    };
Mentsd el külön lastName, firstName, és job változókba a fenti objektum property-jeit!
Ha valamelyik nincs megadva, akkor az érték legyen a “unknown” string!
*/
const user = {
    firstName: 'John',
    lastName: 'Doe'
};
const {lastName = 'unknown', firstName = 'unknown', job = 'unknown'} = user;
console.log( lastName, firstName, job);

console.log('----------- 2. feladat -----------');
/*
Adott az alábbi objektum:
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    };
Ments el külön l, f, és j változókba a fenti objektum lastName, firstName, és job property-jeit! 
Ha valamelyik nincs megadva, akkor az érték legyen a “unknown” string!
*/
let {lastName: l = 'unknown', firstName: f = 'unknown', job: j = 'unknown'} = user;
console.log( l, f, j);

console.log('----------- 3. feladat -----------');
// Ments el külön, tetszőleges nevű változókba az alábbi tömb első, harmadik, és ötödik indexű elemét!
const names = ['John', 'Jane', 'Judith', 'Jennefer', 'Jeremiah', 'Johnny'];
let [,first,,third,,fifth] = names;
console.log(first,third,fifth);

