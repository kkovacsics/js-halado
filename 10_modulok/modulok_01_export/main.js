/*  mivek az export egy obj-ra mutat, ezért kell az object destructuring
    nem kell minden importálni, ami exportálva van, elég csak azokat, amiket használni fogok
*/
// Minden importnak a file elején kell szerepelnie, nem lehet feltételhez kötni sem.
import {sumValues, subtractValues} from './utils.js';

console.log(sumValues(10,20));

// amit beimportáltam az nem érhető el globálisan, azaz a konzolon nem látszik pl. a sumValues fv
