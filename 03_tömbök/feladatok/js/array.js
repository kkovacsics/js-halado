/*
1. Feladat
Írj egy olyan függvény kifejezést, ami paraméterként vár egy egész számokat tartalmazó tömböt! 
(Input ellenőrzést nem kell végezni.)
A függvény szorozza meg tömbelemek értékét 1.27-el, majd pedig térjen vissza az elemek összegével!
*/
const sumMultiply = function(arr){
    return arr
            .map(item => item * 1.27)
            .reduce((previous, current) => previous+current);
}
console.log('1. Feladat')
console.log(sumMultiply([1,2,3,4]));        // 12.7

/*
2. Feladat
Írj egy olyan függvénykifejezést, 
ami paraméterként kap egy tetszőleges típusú elemeket tartalmazó tömböt, 
és egy tetszőleges primitív értéket!
A függvény visszatérési értéke egy objektum, ami a következő propertyket tartalmazza
exists: Értéke true/false attól függően, hogy a második paraméterként megadott érték megtalálható e a tömbben
index: Értéke egy szám, ha második paraméterként megadott érték megtalálható a tömbben, 
        akkor a tömbben lévő indexe, hanem akkor -1 legyen az értéke
allElementIsANumber: Értéke true/false attól függően, hogy a tömb minden eleme number típusú e vagy sem
someElementIsANumber: Értéke true/false attól függően, hogy a tömbben van e number típusú elem vagy sem
*/
const task_2 =  (arr, value) => ({
        exists: arr.includes(value),
        index: arr.findIndex(item => item===value),
        allElementIsANumber: arr.every(item => typeof item === 'number'),
        someElementIsANumber: arr.some(item => typeof item === 'number'),
});
console.log('2. Feladat')
console.log(task_2([1,2,3,'1','2'], '1'));
// {exists: true, index: 3, allElementIsANumber: false, someElementIsANumber: true}

/*
3. Feladat
Írj egy olyan függvénykifejezést, ami paraméterként egy stringeket tartalmazó tömböt kap 
(Input ellenőrzést nem kell végezni.), és visszaad egy html template-et (string)! 
A html template egy felsorolt lista, aminek a listaelemei a kapott tömb értékeit tartalmazzák.

Pl. ha ez a tömb:
const content = ['első', 'második', 'harmadik'];

akkor ez legyen a visszatérési érték:
<ul>
    <li>első</li>
    <li>második</li>
    <li>harmadik</li>
</ul>
*/
const generateList = function(arr){
    return arr.reduce((previous, current) => previous+'\t<li>'+current+'</li>\n', '<ul>\n') + '</ul>';
}
console.log(generateList(['első', 'második', 'harmadik']));

const generateList2 = function(arr){
    return arr
        .map(item => `\t<li>${item}</li>\n`)
        .reduce((previous, current) => `${previous}${current}`, '<ul>\n') + '</ul>';
}
console.log(generateList2(['első', 'második', 'harmadik']));