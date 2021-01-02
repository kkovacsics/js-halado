'use strict';
/*
Hozz létre három json filet users1, users2, és users3 névvel.
Mindegyik fájl felhasználók nevét, és életkorát tartalmazza az alábbi formában:

	{
		"users": [
			{
				"name": "John Doe", 
				"age": 30, 
			}
		]
	}
Mindegyik fájlban legalább 3 felhasználói adat legyen.

Írj egy függvényt, ami paraméterként vár egy http metódust, és egy útvonalat. 
Ezután xmlHttp kérést indít az adott erőforrás elérésére az adott metódussal.
Hibakezelés is legyen megvalósítva. 
Ha az adott erőforrás nem elérhető, próbálja meg még két alkalommal, tehát összesen háromszor elérni azt. 
Két hívás között legyen 5 másodperc várakozási idő. 
Ha harmadszorra sem lehet elérni az erőforrást, elég a konzolra kiírni a hibaüzenetet.

Indíts egymás után három kérést mind a 3 json file elérésére GET metódussal. 
A kérések EGYMÁS UTÁN sorban fussanak le, tehát ha az első file tartalma elérhető már (lefutott a callback) 
akkor indítsd a második kérést, és így tovább. 
A 3 json file tartalmát egyetlen JavaScript objektumba merge-öld össze. 
Ha bármelyik file nem volt elérhető, akkor csak az adott file tartalma ne szerepeljen az objektumban, 
a többié még igen.
Nem szabad callback hell-nek lennie!
*/
async function fetchRequest(method, url, repeat) {
    let response;
    while(repeat){
        try {
            response = await fetch(url, {method: method});
            if(!response.ok){
                throw 'not found'
            }
            return await response.json();
        } catch(e) {
            await new Promise(resolve => setTimeout(resolve, 3000, 'mehet'));
            repeat--;
        }
    }
    console.log('Error');
}    
const serial = (num, max) => {
	let users = [];
	fetchRequest('GET', './user1.json', 3)
		.then(data => {
				users = data? [...users, ...data.users]: users;
				return fetchRequest('GET', './user2.json', 3);
			}
		)
		.then(data => {
                users = data? [...users, ...data.users]: users;
                return fetchRequest('GET', './user3.json', 3);
			}
		)
		.then(data => {
                users = data? [...users, ...data.users]: users;
                return 1;
			}
		)
		.finally(() => {
			console.log(`serial(${num})`, users);
			if (num < max) {
				serial(++num, max);
			} else {
				console.timeEnd('running');
			}
		});
}
//serial();
/*
Készíts egy új verziót az előbbi feladatból. 
A különbség most csupán annyi, hogy a kérések nem egymás után, 
hanem egyszerre (“párhuzamosan”) legyenek elküldve.
*/
const parallel = (num, max) => {
	Promise
		.allSettled([
			fetchRequest('GET', './user1.json', 3),
			fetchRequest('GET', './user2.json', 3),
			fetchRequest('GET', './user3.json', 3)
		])
		.then(results => {
			let users2 = [];
			results.forEach(user => {users2 = user? [...users2, ...user.value.users]: users2;} );
			console.log(`parallel(${num})`, users2);
			if (num < max) {
				parallel(++num, max);
			} else {
				console.timeEnd('running');
			}
		});
}
//parallel();
/*
Nézz utána, hogyan lehetne megmérni, hogy az első, és a második esetben mennyi a program lefutásának az ideje! 
Logold ki konzolra táblázatos formában (Egy console metódus lesz ez is, nézz utána), 
mennyi lesz a futási idő, az első és a második megoldás esetében, 
ha a programot egyszer, tízszer, százszor, és ezerszer futtatod le.
*/
let max = 10;
console.time('running');
//serial(1, max);		// running: 630.02294921875 ms
parallel(1, max);	// running: 561.684814453125 ms
