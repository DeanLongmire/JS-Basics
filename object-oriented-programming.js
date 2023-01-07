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

//Factories (constructor function)
    //say you want to make another circle, you would have to copy and paste above code
    //Like classes and structs in C++

function createCircle()
{

}