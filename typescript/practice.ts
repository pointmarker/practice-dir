const name : string = "ahmet"
let age : number = 17
let isAdult : boolean  = false
let uniqueKey : symbol = Symbol("gangSymbol")

const profile = {
    [uniqueKey]: "lizard",
    name,
    age, 
    isAdult
}

// type casting

let age1 : string = "25"
let stringToNumber : number = parseInt(age1)

let age3: number = 43
let numberToString: string = age3.toString()
let numberToStringBinary : string = age3.toString(2)

let agesCount : number = parseInt(age1) + parseInt(numberToStringBinary) 

let scores : number[] = [1,2,4,5]

// explicit && inference types

/// explicit :you declare types like above
    // use when func params and return types & object literals & when initial value might not be the final type

// inference: typescript auto detect types
    // simple  variable declarations with immadiate assignment
    // when the type is obvious from the context



// functions with expilicit typing:
function greet(name: string): string{
    return `hi ${name}`
}

// for inference , you can use like this 

let yas1 = "26" // its obvious its string
let yas = 25 // its obvious

let result = yas1 + yas // its not obvious, it can turn string or number











