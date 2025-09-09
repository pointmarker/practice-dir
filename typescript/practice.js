"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "ahmet";
let age = 17;
let isAdult = false;
let uniqueKey = Symbol("gangSymbol");
const profile = {
    [uniqueKey]: "lizard",
    name,
    age,
    isAdult
};
// type casting
let age1 = "25";
let stringToNumber = parseInt(age1);
let age3 = 43;
let numberToString = age3.toString();
let numberToStringBinary = age3.toString(2);
//# sourceMappingURL=practice.js.map