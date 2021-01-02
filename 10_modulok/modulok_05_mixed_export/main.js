'use strict';

// mixed exportnál először mindig a default exportot kell importálni, majd utána a named exportokat
import user, {age, isDead} from './utils.js';

console.log(user, age, isDead);