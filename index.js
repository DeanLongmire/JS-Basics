let variable = "Dean"; //variable creation
const interestRate = 0.3; //constant variable

//cannot be a reserved keyword
//should be meaningful
//cannot start with a number 
//cannot containt ' ' or '-'
//I like to use camel case for variable names
//are case sensitive 
//declare multiple variables by seperating by a comma or each one on a single line (best practice)

let myName = "Dean"; //string literal
let myAge = 21; //number literal
let isApproved = true; // Boolean literal (true/false)
let firstName = undefined; //undefined variable
let lastName = null; //used for clearing a variable

//Java Script is a dynamic language
//  can change variables in the console

//2 different value types
    //Primitives/Value Types
        //strings,numbers,booleans,etc
    //Reference Types
        //Object,Array,Function

let person = { //object literal (kinda like structs in C++ except this is only 1 object)
    name: "Dean",
    age: 21
}; 

//access using dot like normal
person.name = "Jackson";

//or use bracket notation
person["name"] = "Dean";
//bracket can be useful because you can use other variable to access it
let nickName = "name";
person[nickName] = "Deanathan";

console.log(person);

//Arrays
//arrays are objects and can be used witht the dot operator

let selectedColors = ["red","blue"];
selectedColors[2] = "green";
selectedColors[3] = 1; //arrays do not have to all have same variable type
console.log(selectedColors.length);

//Functions

//task performing function
function greet(aName, aLastName) //function definition
{
    console.log("Hello " + aName + " " + aLastName);
}

//calculation function
function square(number)
{
    return number * number;
}

lastName = "Longmire";
greet(myName,lastName); //function call (same as C++)

let myNumber = square(2); //function returns a value
console.log(myNumber);





