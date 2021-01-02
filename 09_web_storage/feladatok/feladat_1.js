'use strict';

console.log('----------- 1. feladat -----------');
/*
Tárold el az alábbi értéket egy token nevű, httpOnly cookie-ba, ami 15 perc után lejár: 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
*/
export const storeCookie = () => {
    const now = new Date();
    now.setTime(now.getTime() + 15*60*1000); // + 15 minutes
    const expires = now.toUTCString();
    document.cookie = `token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; expires=${expires};`;
}

storeCookie();
