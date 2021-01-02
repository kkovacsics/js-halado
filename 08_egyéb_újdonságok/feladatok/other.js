'use strict';

console.log('----------- 1. feladat -----------');
/*
Írj egy függvény kifejezést, ami a paraméterként megadott tömbből eltávolítja a duplikált elemeket! 
A függvény visszatérési értéke a duplikált elemektől mentes új tömb!
*/
const removeDuplication = arr => {
    const set = new Set();
    arr.forEach(element => set.add(element));
    return Array.from(set);
};
console.log(removeDuplication([1,2,3,3,4,4,5]));    // [1, 2, 3, 4, 5]

console.log('----------- 2. feladat -----------');
/*
Készíts egy HU nevű objektumot, aminek az alábbi propertijei vannak:
date(): Visszaadja a paraméterként megadott dátumot a magyar dátumírás szabályainak megfelelően
currency(): Visszaadja a paraméterként megadott számot a magyar pénzformátumnak megfelelően 
            a Ft végződéssel együtt
list(): A paraméterként kapott string tömböt visszaadja az alábbi formában: 
        első, második és harmadik" (Tehát vesszőkkel elválasztva az utolsó elem előtt az és szóval)
*/
const hu = {
    date(dateValue){ 
        return new Intl.DateTimeFormat('hu-HU').format(dateValue); 
    },
    currency(currencyValue){ 
        return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(currencyValue);
    },
    list(arrayValue){
        return arrayValue
                .map((item, index, array) => (index==0? '': (index<array.length-1? ', ': ' és '))+item )
                .join('');
    },
};
console.log(hu.date(new Date()));                           // 2020. 12. 29.
console.log(hu.currency(123456789.12));                     // 123 456 789,12 Ft
console.log(hu.list(['első']));                             // első
console.log(hu.list(['első', 'második']));                  // első és második
console.log(hu.list(['első', 'második', 'harmadik']));      // első, második és harmadik

console.log('----------- 3. feladat -----------');
/*
Készíts egy objectConverter nevű objektumot, ami az alábbi metódusokkal rendelkezik:
arrayToMap(array)
arrayToSet(array)
setToMap(set)
setToArray(set)
mapToArray(map)
mapToSet(map)
A fenti metódusok értelemszerűen nem másra szolgálnak, 
mint az egyik összetett adattípusból konvertálják át az adatokat egy másikba. 
Mindegyik metódus visszatérési értéke egy új Array, Map, vagy Set object.
*/
const objectConverter = {
    arrayToMap(array){
        const map = new Map();
        array.forEach((item, index) => map.set(index, item));
        return map;
    },
    arrayToSet(array){
        const set = new Set();
        array.forEach((item, index) => set.add(item));
        return set;
    },
    setToMap(set){
        return this.arrayToMap(Array.from(set));
    },
    setToArray(set){
        return Array.from(set);
    },
    mapToArray(map){
        return Array.from(map.values());
    },
    mapToSet(map){
        return this.arrayToSet(this.mapToArray(map));
    },
}
console.log(objectConverter.arrayToMap([12,'kk',true]));        // Map(3) {0 => 12, 1 => "kk", 2 => true}
console.log(objectConverter.arrayToSet([12,'kk',true]));        // Set(3) {12, "kk", true}
console.log(objectConverter.setToMap(new Set([12,'kk',true]))); // Map(3) {0 => 12, 1 => "kk", 2 => true}
console.log(objectConverter.setToArray(new Set([12,'kk',true]))); // (3) [12, "kk", true]
console.log(objectConverter.mapToArray(objectConverter.arrayToMap([12,'kk',true])));// (3) [12, "kk", true]
console.log(objectConverter.mapToSet(objectConverter.arrayToMap([12,'kk',true])));// Set(3) {12, "kk", true}
