'use strict';

// mindig olyan néven kell importálni, amilyen néven exportálták, tehát most a "sum"-ot kell használni
// ha valamit nem fogunk használni, akkor nem is kell importálni sem, tehát a "sub" -t elhagyhatjuk
import {
    sum
} from './utils.js';

// ekkor itt is a "sum"-ot használjuk
console.log(sum(10,20));

/*  lehet importálni is más néven
import {
    sum as sumValues
}
    ekkor ismét sumValues néven használhatom 
console.log(sumValues(10,20));
*/
// lehet átnevezni az export és az import során is, de ennek nem sok értelme van