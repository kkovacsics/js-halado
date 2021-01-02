const pi = 3.14;
const sumValues = (a, b) => a + b + pi;
const subtractValues = (a, b) => a - b;

/* ha más néven szeretnék exportálni */ 
export {
    sumValues as sum,
    subtractValues as sub
}
/* ekkor sum néven kell importálni */
