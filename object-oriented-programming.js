//Encapsulation
    //the idea of related variables and functions into objects

let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};

console.log(employee.getWage());

    //baseSalary, overtime, rate, and the function getWage are all apart of an employee object instead of being independent variables

//Abstraction
    //*think simple interface*
    //reduces the impact of change

//Inheritance
    //eliminates reduntant code

//Polymorphism
    //Get rid of long if else or switch statements
    //having a 'render' function for different objects inherited from an object that does different things dependednt on what the object requires of it
    
//Object Literals

/*
const circle = {
    radius: 1,   //properties
    location: {  //properties
        x: 1,
        y: 1
    },
    draw: function() //method
    {  
        console.log("draw");
    }
};

circle.draw();
*/

//Factories
    //say you want to make another circle, you would have to copy and paste above code
    //Like classes and structs in C++

function createCircle(radius) //factory function
{
    return {
        radius,   //if key and value is same you can remove value
                  //same as radius: radius,
        draw: function()
        {
            console.log("drawing circle");
        }
    };
}

const circle = createCircle(1); //creating a new circle with a radius of 1
circle.draw();

//Constructor Function

function Circle(radius) //start function name with Capital letter
{
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0};  //private
    let computeOptimumLocation = function() { //private
        //code here
    }
    this.draw = function() {
        computeOptimumLocation();
        console.log("draw");
    }

    Object.defineProperty(this,"defaultLocation",{
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x || !value.y)
                throw new Error("Invalid location.");

            defaultLocation = value;
        }
    });
}

const another = new Circle(1); 

Circle.call({}, 1); //same as line above, first argument is target of 'this', other arguments are the parameters
Circle.apply({}, [1]); //same as above except you can pass an array


//Contructor Property
    //all objects have a property called constructor that references fucntion used to create object
    //use .contructor on an object in log to see its constructor

let x = {}; //let x = new object
new String(); //we use literals instead of these contructors for these 3
new Boolean();
new Number();
let y = 50; //f Number( [native code] )

//Value vs Refernce Types
let a = 10;
let b = a;

a = 20;

//a = 20 and b = 10, they are independent

let c = {value: 10};
let d = c;

c.value = 20;

//d and c = 20, since c is an object, the '=' sets the adress, not the value
//primitives (values) are copied by value, Objects are copied by reference

let number = 10;

function increase(number) 
{
    number++;
}

increase(number);
console.log(number);

//the console would show number = 10 bc value is only copied into the parameter
//instead do this

let obj = {value: 10};

function increase(obj)
{
    obj.value++;
}

increase(obj);

//now obj's value is 11 bc we passed its address into the function

//Adding/Removing Properties
    //objects are dynamic, you can add or remove extra properties

//recall this constructor object from earlier

/*
function Circle(radius) //start function name with Capital letter
{
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}
*/

const myCircle = new Circle(10);

myCircle.location = {x: 1}; //added the property of location (an object with an x value)
myCircle["location"] = {x: 2}; //another way to do this, x now = 2

delete myCircle.location; //deletes the location propety , can use bracket notation too

//Enumerating Properties
    //use a for loop to enemurate values

for (let key in myCircle) //cycels through all properties/methods in myCircle
{
    console.log(key,myCircle[key]); //outputs the key
    console.log("end of loop");
}

for (let key in myCircle) //cycels through all properties/methods in myCircle
{
    if(typeof myCircle[key] !== "function") //only executes if the key is a value
    {
        console.log(key,myCircle[key]); //outputs the key
    }
    console.log("end of loop");
}

//checking if property is in an object

if("radius" in myCircle)
    console.log("myCircle has a radius of " + myCircle.radius);

//Abstraction - Private Properties and Methods
    //hide details and complexity and show only the essentials

//recall this contructor with some updated properties

/*
function Circle(radius) //start function name with Capital letter
{
    this.radius = radius;
    this.defaultLocation = {x: 0, y: 0};
    this.computeOptimumLocation = function() {
        //code
    }
    this.draw = function(){
        this.computeOptimimLocation();
        console.log("draw");
    }
}
*/

const newCircle = new Circle(10);

//we dont want the user to have access to the default location or be able to call the compute method
//we will make these private by declaring them using let

/*
function Circle(radius) //start function name with Capital letter
{
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0};  //'private'
    let computeOptimumLocation = function() { //'private'
        //code here
    }
    this.draw = function() { //can access members of its parent function
        computeOptimumLocation();
        console.log("draw");
    }
}
*/

//this is the concept of closure

//Getters/Setters
    //being able to read or set private members
    //need a gettor or setter function

/*
function Circle(radius) //start function name with Capital letter
{
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0};  //private
    let computeOptimumLocation = function() { //private
        //code here
    }
    this.draw = function() {
        computeOptimumLocation();
        console.log("draw");
    }

    Object.defineProperty(this,"defaultLocation",{get: function() {return defaultLocation;} });
    //this line allows you to access the value of default location outside of this object
    //arguments are this, the property name, and the key word 'get' with a function that returns the default Location
}
*/

//add set to be able to set an objects property value as well as check for errors

/*
function Circle(radius) //start function name with Capital letter
{
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0};  //private
    let computeOptimumLocation = function() { //private
        //code here
    }
    this.draw = function() {
        computeOptimumLocation();
        console.log("draw");
    }

    Object.defineProperty(this,"defaultLocation",{
        get: function() { //getter
            return defaultLocation;
        },
        set: function(value) { //setter
            if(!value.x || !value.y)
                throw new Error("Invalid location.");

            defaultLocation = value;
        }
    });
}
*/


console.log(newCircle.defaultLocation); //use getter to see default location
let newLocation = {x: 1, y: 1};
newCircle.defaultLocation = newLocation; //use setter to set new default location
console.log(newCircle.defaultLocation); //use getter to ensure that it has changed


