'use strict';

/*
Módosítsd a Storage nevű modul 3. feladatát úgy, 
hogy amennyiben a kérés során bármilyen hiba van, szintén a localStorage-ból olvassa ki az adatokat a program!
Ilyenkor jeleníts meg egy üzenetet, hogy az alkalmazás offline!
Amennyiben a localStorage is üres, jelents meg egy szabadon választott hibaüzenetet, 
és alapértelmezetten 5 másodpercenként ismételd meg újra a kérést összesen 10 alkalommal! 
Ez a két érték paraméterként megadható legyen! 
Ha a 10-ből bármelyik alkalommal sikeres a kérés, akkor aszerint járj el (kiíratás, tárolás, stb.).
*/
const userHandle = {
    getList(resolveFunction) {
        return new Promise((resolve, reject) => {
            resolve = resolveFunction? resolveFunction: resolve;// ha kapott paramétert, akkor az legyen a resolve
            fetch('./users.json')
                .then(response => {
                    if(!response.ok){
                        throw new Error('File not found');
                    } else {
                        return response.json();
                    }
                })
                .then(data => resolve(data.users))
                .catch(error => {
                    console.error(error);
                    if(this.repeatNum<this.repeat){ // még kell próbálkozni
                        setTimeout(() => {
                            this.getList(resolve);// az eredeti getList resolve-jára iratkoztak fel, ezért azt kell majd használni
                            this.repeatNum++;
                        }, this.delay*1000);
                    } else {
                        console.log('Az alkalmazás offline');
                    }
                });
        });
    },
    showList(parent, delay=5, repeat=10) {
        this.delay = delay; this.repeat = repeat; this.repeatNum = 1;
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

userHandle.showList('.container',3,10);
