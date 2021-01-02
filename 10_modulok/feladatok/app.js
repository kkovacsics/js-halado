'use strict';

import {storeCookie} from '../../09_web_storage/feladatok/feladat_1.js';
import cookieHandler from '../../09_web_storage/feladatok/feladat_2.js';
import {userObj as userHandle} from '../../09_web_storage/feladatok/feladat_3.js';

console.log('----------- 1. feladat -----------');
// eltárolom a cookie-t
storeCookie();

console.log('----------- 2. feladat -----------');
// kiírom a konzolra a "token" cookie-t
console.log(cookieHandler.getCookie('token'));
// átmozgatom a sessionSorage-ba
cookieHandler.moveToSession('token');

console.log('----------- 3. feladat -----------');
// kiírom a user-eket
userHandle.showList('.container');