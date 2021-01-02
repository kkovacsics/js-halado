'use strict';

/*  a sima (a named) exportot akkor használom, ha a fájlból egy vagy több dolgot szeretnék exportálni
    export default: akkor használom, ha az adott modulból csak EGY dolgot szeretnék exportálni
                    csak EGY darab export default lehet egy fájlban
*/
const person = {
    firstName: 'John',
    lastName: 'Doe'
}
export default person;

/*   lehet használni az export default-ot így is
export default {
    firstName: 'John',
    lastName: 'Doe'
}
    ekkor mintegy név nélkül exportálok
    az importnál adom meg a nevet, ami már bármi lehet
*/
