'use strict';

console.log('----------- 2. feladat -----------');
/*
Az alábbi cookie-k vannak a böngésződben tárolva (hozd létre őket):
viewed: 5
uid: 354774631237
ssid: Bx55OWbHJ0Vt_IGIFÍ

Írj egy olyan objectet, az alábbi három metódust megvalósítja: 
- kiolvassa a sütik nevét, és értékét 
- átmenti őket sessionStorage-be 
- törli a sütiket
*/
const cookieHandler = {
    getCookie(name){
        return document.cookie       // "username=Kovacsics Kálmán; job=student"
            .split('; ')
            .find(cookie => cookie.startsWith(`${name}`))      // "username=Kovacsics Kálmán"
            .split('=')[1];
    },
    saveSessionStorage(key, value){
        sessionStorage.setItem(key, value);
    },
    deleteCookie(name){
        const now = new Date();
        now.setTime(now.getTime() - 1 * 60 * 1000); // minus 1 minute
        const expires = now.toUTCString();
        document.cookie = `${name}=; expires=${expires}`;
    },
    moveToSession(name){
        const value = this.getCookie(name);
        this.deleteCookie(name);
        this.saveSessionStorage(name, value);
    },
};
// kiírom a konzolra a "token" cookie-t
console.log(cookieHandler.getCookie('token'));
// átmozgatom a sessionSorage-ba
cookieHandler.moveToSession('token');


export default cookieHandler;