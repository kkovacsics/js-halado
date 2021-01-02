'use strict';

const getCurrentTime = () => {
    // 1. létrehozok egy dátum objektumot
    const currentDate = new Date();

    // 2. kiolvasom a szükséges részeket
    const year = currentDate.getFullYear();
    const month = padNumbers(currentDate.getMonth()+1);
    const day = padNumbers(currentDate.getDate());
    const hours = padNumbers(currentDate.getHours());
    const minutes = padNumbers(currentDate.getMinutes());
    const seconds = padNumbers(currentDate.getSeconds());

    return `${[year, month, day].join('-')} ${[hours, minutes, seconds].join(':')}`;
}

// 10-nél kisebb számok kiegészítése 0-val
const padNumbers = num => num<10? `0${num}`: `${num}`;

// meghívom a getCurrentTime függvényt másodpercenként
const clockFace = document.querySelector('.clock-face');
setInterval(() => {
    clockFace.textContent = getCurrentTime();
}, 1000);


// stopper óra
let stopperTime = 0;
let stopperIsRunning = false;
const stopperFace = document.querySelector('.stopper-face');
setInterval(() => {
    if(!stopperIsRunning)
        return;

    stopperTime++;
    const seconds = padNumbers(stopperTime % 60);
    const minutes = padNumbers(Math.floor(stopperTime / 60) % 60);
    const hours = padNumbers(Math.floor(stopperTime / 3600));
    stopperFace.textContent = `${[hours, minutes, seconds].join(':')}`;
}, 1000);
document.querySelector('.start-stop-btn').addEventListener('click', () => {
    if(stopperIsRunning){
        stopperIsRunning = false;
        stopperTime = 0;
    } else {
        stopperIsRunning = true;
    }
});