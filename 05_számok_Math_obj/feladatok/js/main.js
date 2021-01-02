console.log('----------- 1. feladat -----------');
/*
Írj egy függvényt, ami a paraméterként kapott tetszőleges darabszámú, 
tetszőlegesen méretű egész számot összead, és visszatér az összeadás végeredményével! 
A paraméterként kapott értékek egyszerű number típusúak legyenek! 
Amennyiben bármelyik paraméter értéke, vagy a részeredmény meghaladja a biztonságos tartományt, 
automatikusan konvertáljad BigIntbe, és így számoljunk tovább, 
és természetesen a visszatérési érték is BigInt legyen!
*/
const sum = (...nums) => 
    nums.reduce((prev, curr) => Number.isSafeInteger(prev+curr)? prev+curr: BigInt(prev)+BigInt(curr) );

console.log(sum(1,2,3,4));

console.log('----------- 2. feladat -----------');
/*
Módosítsd úgy a függvényed, hogy paraméterként mind number, mind BigInt típusú adatokat is elfogadjon! 
Amennyiben valamelyik paraméter BigInt, úgy a number-eket is automatikusan konvertálja BigInt-é!
*/
const isBigInt = number => typeof number==='bigint';

const sumBigInt = (...nums) => 
    nums.reduce((prev, curr) => 
        !isBigInt(prev) && !isBigInt(curr) && Number.isSafeInteger(prev+curr)? 
            prev+curr: 
            BigInt(prev)+BigInt(curr)
    );

console.log(sumBigInt(1,2,3,4n));

console.log('----------- 3. feladat -----------');
/*
Írj egy függvényt, ami a paraméterként megadott tízes számrendszerbeli számot 
átkonvertálja kettes, nyolcas, és tizenhatos számrendszerbe is! 
Ezeket az értékeket pedig egy objectbe adja vissza! 
A property-k neve legyen: binary, octal, hexa.
*/
const convert = number => ({
    decimal: number.toString(),
    binary: `0b${number.toString(2)}`,
    octal: `0o${number.toString(8)}`,
    hexa: `0x${number.toString(16)}`
});

console.log(convert(112));