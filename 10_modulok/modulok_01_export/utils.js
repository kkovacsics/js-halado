// a pi változót használja a sumValues, de mivel a pi változó nincs exportálva, így kívülről nem látszik
const pi = 3.14;

//  export: az utána álló változót, fv-t, objektumot importálhatom más js fájlba
/* export */ const sumValues = (a, b) => a + b + pi;
/* export */ const subtractValues = (a, b) => a - b;
/*
    valójában a fenti két export eredménye egy objektum, aminek 2 eleme van:
    - sumValues
    - subtractValues
    ezt az objektumot lehet egy másik js fájlba importálni
*/

/*  azt is lehet, hogy nem a deklarációknál adom meg az export-ot, 
    hanem a fájl végén gyűjtöm össze az exportálandókat
*/
export {
    sumValues,
    subtractValues
}