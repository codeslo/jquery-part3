var employee = {
    firstName: "Joe",
    lastName: "Partier",
    phone: "805.111.1111",
    email: "joep@gmail.com"
};

var prop1 = employee.firstName;
var prop2 = employee.lastName;

// var dynamicProperty = employee[variableName];

for(var key in employee){
    console.log(key + ": "+employee[key]);
    // example output: firstName: "Matt"
}

console.log("fml");