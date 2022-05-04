let det = require("upper-case");

let users = [{
    name: "Muhammed",
    surname: "Smani",
    age: "20",
    city:{
        name: "Prizren",
        postalCode: "20000"
    }
},
{
    name: "Rea",
    surname: "Krasniqi",
    age: "21",
    city:{
        name: "Prizren",
        postalCode: "20000"
    }
},
{
    name: "Filan",
    surname: "Fisteki",
    age: "20",
    city:{
        name: "Prishtin",
        postalCode: "10000",
        rruga: "Fehmi Fehmiu"
    }
},
{
    name: "Kërcyll",
    surname: "Kërcyesi",
    age: "18",
    city:{
        name: "Prizren",
        postalCode: "20000"
    }
},
{
    name: "Istog",
    surname: "Peja",
    age: "24",
    city:{
        name: "Gjakovë",
        postalCode: "50100"
    }
}]

console.log(users[2]);

for(let i of users){
    console.log(det.upperCase(i.name));
}