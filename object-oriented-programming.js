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
    this.draw = function(){
        console.log("draw");
    }
}

const another = new Circle(1); 

//Contructor Property
    //all objects have a property called constructor that references fucntion used to create object
    //use .contructor on an object in log to see its constructor

let x = {}; //let x = new object
new String(); //we use literals instead of these contructors for these 3
new Boolean();
new Number();
let y = 50; //f Number( [native code] )

//Functions are objects
