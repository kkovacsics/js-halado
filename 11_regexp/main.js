'use strict';

document.querySelector('.register-form').addEventListener('submit', ev => {
    ev.preventDefault();

    // name: 5 char length, contains letter and space
    const name = ev.target.querySelector('input[name="name"]').value;
    if(!/^[a-űA-Ű ]{5,}$/.test(name))      // a magyar ÁBC utolsó karaktere a hosszú ű
        alert('hibás név, legalább 5 karakter');
        
    // check password
    // at least 8 characters, a-ű, A-Ű, 0-9
    const passWordRegex = new RegExp('^[a-űA-Ű0-9]{8,}$', 'g');
    const password = ev.target.querySelector('input[name="password"]').value;
    if(!passWordRegex.test(password))
        alert('hibás password, legalább 8 karakter, betűk számok');
});