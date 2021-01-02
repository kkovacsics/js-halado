'use strict';
/*
Írj egy olyan függvényt, mely paraméterként kap egy tömböt. A függvény visszatérési érték egy Promise.
A Promise resolved lesz, amennyiben a tömb minden eleme string, és sikeresen nagybetűssé alakíthatók. 
Ebben az esetben a Promise resolved lesz és visszaad egy új tömböt, 
ami az eredeti tömb összes elemét nagybetűssé alakítva tartalmazza. 
Ellenkező esetben a Promise rejected lesz, a visszatérési érték: 
Error: Not all items in the array are strings!
*/
function arrayToUpper(array){
    return new Promise((resolve, reject) => {
        const isString = array.every(item => typeof item === 'string');
        if(!isString){
            reject('Error: Not all items in the array are strings!');
        } else {
            resolve(array.map(item => item.toLocaleUpperCase()));
        }
    });
}
arrayToUpper(['aa','bb','cc'])
    .then(console.log)
    .catch(console.error);

/*
Írj egy másik függvényt, mely paraméterként szintén egy tömböt kap. A függvény visszatérési érték egy Promise.
A Promise resolved lesz, amennyiben a tömb minden eleme string, és visszatér az ABC szerinti rendezett tömbbel.
Ha nem minden elem string, akkor a Promise rejected lesz, és kiírja a konzolra: 
Error: Not all items in the array are strings!
Ha a sorba rendezés során hiba történik akkor is rejected lesz a Promise, a visszatérési érték:
Error: Something went wrong with sorting words.
*/
function arrayToSort(array){
    return new Promise((resolve, reject) => {
        const isString = array.every(item => typeof item === 'string');
        if(!isString){
            reject('Error: Not all items in the array are strings!');
        } else {
            try {
                const sortedArray = array.sort(/*a => ln(a)*/);
                resolve(sortedArray);
            } catch {
                reject('Error: Something went wrong with sorting words!');
            }
        }
    });
}
arrayToSort(['kaa','zbb','fcc'])
    .then(console.log)
    .catch(console.error);
