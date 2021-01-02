'use strict';

console.log('----------- 3. feladat -----------');
/*
Adott egy json file, ami valójában egy tömb, lastName, firstName propertyket tartalmazó objektumokkal.
Írj egy függvényt, ami indít egy ajax kérést, ami elkéri a json tartalmát, 
és a firstName, lastName párosokat egymás alá beleírja egy div-en belüli p-tagekbe, 
és létrehoz egy users nevű bejegyzést a localStorage-be, ahol a json tartalmát letárolja.
Módosítsd a függvényt úgy, hogy amennyiben a localStorage-ba van users bejegyzés, 
úgy onnan olvassa ki az adatokat, ha nincs csak akkor küldjön ajax kérést.
*/
// json server indítás: json-server ./users.json -w
const userHandle = {
    getList() {
        //                return fetch('http://localhost:3000/users')   // json server-rel
        return fetch('./users.json')     // local 
            .then(response => response.json())
            .then(
                data => data.users,
                err => console.error(err)
            );
    },
    showList(parent) {
        parent = document.querySelector(parent);
        if (localStorage.users && localStorage.users !== "[]") {
            const list = JSON.parse(localStorage.users);
            this.generateList(parent, list);
        } else {
            this.getList().then(list => {
                localStorage.setItem('users', JSON.stringify(list));
                this.generateList(parent, list);
            });
        }
    },
    generateList(parent, list) {
        list.forEach(item => {
            const p = document.createElement('p');
            p.classList.add('user-row');
            p.textContent = `${item.firstName} ${item.lastName}`;
            parent.appendChild(p);
        });
    }
};

userHandle.showList('.container');

export { userHandle as userObj };