let upperCase = require("upper-case");

let users = [{
    name: "Muhammed",
    lastName: "Smani",
    age: "20",
    city:{
        name: "Prizren",
        postalCode: "20000"
    }
},
{
    name: "Rea",
    lastName: "Krasniqi",
    age: "21",
    city:{
        name: "Prizren",
        postalCode: "20000"
    }
},
{
    name: "Filan",
    lastName: "Fisteki",
    age: "20",
    city:{
        name: "Prishtin",
        postalCode: "10000",
        rruga: "Fehmi Fehmiu"
    }
},
{
    name: "Kërcyll",
    lastName: "Kërcyesi",
    age: "18",
    city:{
        name: "Prizren",
        postalCode: "20000"
    }
},
{
    name: "Istog",
    lastName: "Peja",
    age: "24",
    city:{
        name: "Gjakovë",
        postalCode: "50100"
    }
}]

console.log(users[2]);

// for (let user of users) {
    
// }

for(let user of users){
    // console.log(upperCase.upperCase(user.name));
    user.name = upperCase.upperCase(user.name);
}
console.log(users);