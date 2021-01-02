console.log('----------- 1. feladat -----------');
/*
Írj egy függvényt, ami paraméterként tetszőleges darabszámú objektumot merge-öl össze, 
majd visszatér ezzel az objektummal! Az összefűzést úgy hajtsa végre, 
hogy az új objektum property-jei egyszerű indexek legyenek (0, 1, 2, stb.) 
amik tartalmazzák a részobjektumokat!
*/
const merge = (...obj) => ({...obj});

const johnDoe = { 
    firstName: 'Jonh',
    lastName: 'Doe'
};

const janeDoe = { 
    firstName: 'Jane',
    lastName: 'Doe'
}
console.log(merge(johnDoe, janeDoe));

console.log('----------- 2. feladat -----------');
/*
Írj egy olyan függvényt (tagged template) 
ami a paraméterként kapott texts, values értékeket úgy adja vissza egy strigben, 
hogy a text értékek dőltek, a value-k félkövérek legyenek, 
ha beillesztjük a html-be, tehát a megfelelő tagekkel kiegészített stinget adjon vissza!
*/
const tagged = (texts, ...values) =>
    texts.map((text, index) => 
        `${`<em>${text}</em>`} ${values[index] ? `<strong>${values[index]}</strong>` : ''}`
    ).join('');

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: '30'
}
document.body.innerHTML = tagged`My name is ${user.firstName} ${user.lastName}, and I'm ${user.age} years old.`;

console.log('----------- 3. feladat -----------');
/*
Írj egy függvényt, ami első paraméterként egy karaktert kap, 
a többi paraméter pedig tetszőleges számú tömb, amik stringeket tartalmaznak
A függvény:
összefűzi egy tömbbe az összes elemet,
eltávolítja az ismétlődő elemeket,
eltávolítja az összes olyan stringet, ami tartalmazza az első paraméterként megadott karaktert,
eltávolítja a stringek végén lévő white space karaktert
visszaadja ezt az új tömböt.
*/
const fuggveny = (char, ...arrays) => 
    //let arr = [char, ...arrays].flat();     // összefűzi egy tömbbe az összes elemet
    arrays
        .flat()     // összefűzi egy tömbbe az összes elemet
        .filter((item, index, array) => array.indexOf(item)===index)  // eltávolítja az ismétlődő elemeket
        .filter(item => !item.includes(char)) // eltávolítja az összes olyan stringet, ami tartalmazza az első paraméterként megadott karaktert,
        .map(item => item.trimRight());    // eltávolítja a stringek végén lévő white space karaktert

console.log(fuggveny('a',['aa','bb  ','cc'],['aa','dd','ee  ','ff']));


console.log('----------- 4. feladat -----------');
/*
Alakítsd át úgy az előző feladatot, hogy ne egy függvényed legyen, 
hanem minden egyes részfeladat legyen külön függvénybe szervezve, tehát:
függvény: első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb, 
            amik stringeket tartalmaznak!
            A függvény összefűzi egy tömbbe az összes elemet és visszaadja ezt az új tömböt
függvény: egy paraméterként kapott tömbből eltávolítja az ismétlődő elemeket és visszaadja az új tömböt
függvény: egy paraméterként kapott tömb összes elem elejéről és végéről levágja a space karaktereket,
            visszaad egy új tömböt
*/
const merge2 = (char, ...arrays) => [char, ...arrays].flat();
const unique = arr => arr.filter((item, index, array) => array.indexOf(item)===index);
const trim = arr => arr.map(item => item.trimRight()); 
console.log(trim(unique(merge2('a',['aa','bb  ','cc'],['aa','dd','ee  ','ff']))));
