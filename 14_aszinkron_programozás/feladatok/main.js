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
function xhrRequest(method, url, repeat, resolveFunction, rejectFunction) {
	return new Promise((resolve, reject) => {
		resolve = resolveFunction ? resolveFunction : resolve;
		reject = rejectFunction ? rejectFunction : reject;
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4) {		// done
				if (xhr.status === 200) {		// success
					resolve(JSON.parse(xhr.responseText));
				} else {					// error
					console.error(`${url}: file not found!`);
					if (--repeat) {			// még lehet próbálkozni
						setTimeout(() => {
							xhrRequest(method, url, repeat, resolve, reject);
						}, 3000);
					} else {				// nincs tovább
						reject('Error');
					}
				}
			}
		};
		xhr.open(method, url, true);
		xhr.send();
	});
}
const serial = (num, max) => {
	let users = [];
	xhrRequest('GET', './user1.json', 3)
		.then(data => {
				users = [...users, ...data.users];
				return xhrRequest('GET', './user2.json', 3);
			},
			error => {
				console.error(error);
				return xhrRequest('GET', './user2.json', 3);
			},
		)
		.then(data => {
				users = [...users, ...data.users];
				return xhrRequest('GET', './user3.json', 3);
			},
			error => {
				console.error(error);
				return xhrRequest('GET', './user3.json', 3);
			}
		)
		.then(data => {
				users = [...users, ...data.users];
				return 1;
			},
			error => {
				console.error(error);
				return -1;
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
			xhrRequest('GET', './user1.json', 3),
			xhrRequest('GET', './user2.json', 3),
			xhrRequest('GET', './user3.json', 3)
		])
		.then(results => {
			let users2 = [];
			results.forEach(user => { if (user.status === 'fulfilled') users2 = [...users2, ...user.value.users]; });
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
serial(1, max);		// running: 483.271728515625 ms
//parallel(1, max);	// running: 384.083984375 ms
