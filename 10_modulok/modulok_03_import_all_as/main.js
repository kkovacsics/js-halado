'use strict';

/*  megtehetem, hogy minden importálok, ami az export utasításnál meg van adva
    de nem adom meg egyesével a neveket, mert pl. túl sok van belőle
*/
import * as MyMath from './utils.js';   // a MyMath objektumba importálok mindent

// ekkor így kell használni
console.log(MyMath.sumValues(10,20));
console.log(MyMath.subtractValues(10,20));
