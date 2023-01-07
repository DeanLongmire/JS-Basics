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