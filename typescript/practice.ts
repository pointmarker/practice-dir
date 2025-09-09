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

// type casting //

let age1 : string = "25"
let stringToNumber : number = parseInt(age1)

let age3: number = 43
let numberToString: string = age3.toString()
let numberToStringBinary : string = age3.toString(2)

let agesCount : number = parseInt(age1) + parseInt(numberToStringBinary) 

let scores : number[] = [1,2,4,5]

// explicit && inference types //

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

// but it can be as inference

//you may not prefer to indicate which type will be return, because its correctly guessable
function addd(a: number, b:number){
    return a + b
}

// if you use typeless variables, it will get "any" type automatically unless "strictNullChecks" enables in tsconfig.json file


// object literals //
// there is optional ways to declare object literals

// inline 
const user : {name: string, age:number} = {
    name : "ahmet",
    age : 25,
    // adult: false // it will get error
}

// alias
type aliasUser = {
    name: string,
    age: number
}

const userr: aliasUser={
    name: "ahmet",
    age: 25
}

// interface
interface interfaceUser{
    name: string,
    age:number
}
const userrr: interfaceUser ={
    name:"hasan",
    age: 45
}

// optional property
interface OptionalUser{
    name: string;
    age: number;
    nickname?: string
}

const optionalUser: OptionalUser = {
    name:"hasan",
    age:25,
    // nickname: "pointmarker" // you can leave it empty
}

// readonly property
interface ReadOnlyProp{
    readonly id: number,
    name: string
}

const readonlyUser : ReadOnlyProp ={
    id:1232234,
    name: "hasan"
}

readonlyUser.name ="kemal"
// readonlyUser.id = 23283; // it will get error


/// type :any use ///

const data = JSON.parse(`{name: "hasan",age: 25}`)
// typeof data will be any, because parser not detect types when parses something

let something; // if you declare with nothing, it will not seek any specifig type, it will be any :)
something = "hello"
something = 43
// this use is normal, and it will not get you an error, but avoid it

// any type can be use when migrating JS code to TS code & using dynamic content let

let someAny: any = true
someAny = "someAny"
someAny = 42
// these are ok


/// type :unknown use ///
// unknown typed variable could be any, we say to parser

// differences with any
/**
 * unknown must be type-checked before use
 * you cant access properties on an unknown type before type assertion
 * you cant call or construct values of type unk.
 */

// typescript will prevent unknown types from being used without proper type checking 

let w : unknown = 1
w = "string" // no error
w = {
    runANonExistentMethod:() => {
        console.log('hi')
    }
}as {runANonExistentMethod: () => void}

if(typeof w == "object" && w !== null){
    (w as {runANonExistentMethod: Function}).runANonExistentMethod()
}

// the as keyword is used for type assertion, like: 
let test: unknown = "hello,world"
let len:number = (test as string).length
// let lenAgain:number = test.length // it will get error because we did not declare what type of unknown variable

// we can see here closely

interface employee {
    name: string,
    id: number
}

function getEmployee(){
    let name: string = "joe";
    return{
        name: name,
        id: 1
    }
}

let firstEmployee = getEmployee() as employee

interface Employee1{
    salary():void
}
interface Employee2{
    benefits():void
}

function employee1OrEmployee2(): Employee1 | Employee2{
    let employee1: Employee1 ={
        salary(){
            console.log("salary")
        }
    }

    return employee1
}

function isEmployee1(person: Employee1 | Employee2): person is Employee1{
    return (person as Employee1).salary !== undefined
}

let person = employee1OrEmployee2()
if(isEmployee1(person)){
    (person as Employee1).salary()
}

///////////  simple calculator ////////// 


interface operation{
    name: string,
    operate: number
}

function getOperation(opName: string, opFunc: number){
    let name: string = opName;
    let operate: number = opFunc
}

const addOp = getOperation("add",add)


function add(a:number, b:number):number{
    return a+b
}

function extract(a:number, b:number):number{
    return a-b
}

function multip(a:number, b:number):number{
    return a*b
}

function divide(a:number,b:number):number{
    return a % b
}







