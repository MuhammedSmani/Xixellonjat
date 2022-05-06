let arr = [1, 5, 3, 2, 4];

let users = [
    {
        name: "Ibrahim",
        lastName: "Gerbiqi",
        age: 23,
        city: [{
            name: "Prizren",
            postalCode: 20000,
            major: "mr.Haskuka",
        },{
            name: "Paris",
            postalCode: 20001,
        },
    ],
    },
    {
        name: "John",
        lastName: "Doe",
        age: 27,
        city: [{
            name: "Paris",
            postalCode: 20001,
        },
        {
            name: "Paris",
            postalCode: 20001,
        },
    ],
    },
    {
        name: "Doe",
        lastName: "John",
        age: 18,
        city: [{
            name: "London",
            postalCode: "123321f",
        },{
            name: "Paris",
            postalCode: 20001,
        },
    ],
    },
    {
        name: "Doe2",
        lastName: "John2",
        age: 18,
        city: [{
            name: "London",
            postalCode: "123321f",
        },{
            name: "Paris",
            postalCode: 20001,
        },
    ],
    },
    {
        name: "Doe1",
        lastName: "John1",
        age: 18,
        city: [{
            name: "London",
            postalCode: "123321f",
        },{
            name: "Paris",
            postalCode: 20001,
        },
    ],
    },
];

// let array = [];

// console.log(arr.pop());

// arr.pop();              // hek elementin ne fund
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift(0);      //shton element ne fillim
// console.log(arr);

// array.push(1);    // shton element ne fund

// console.log(array);

// for (let index = 0; array.length<=100; index++) {
//     array.push(index);
// }
// console.log(array);


// arr.splice(2, 1);    
// console.log(arr);

// arr.slice(1, 2);   

// console.log(arr.slice(1, 3));

// console.log(arr.reverse());

// console.log(arr.includes(3));  // true
// console.log(arr.includes(6));  // false

// console.log(arr.indexOf(5));   // tregon poziten e elementit

// console.log(arr.concat(2)); // bashkon dy arrays

// users.forEach(user => {
//     console.log(user);
// });

// users.forEach(user => {
//     user.city.forEach((city) => {
//         console.log(city);
//     })
// });

// for (let i in users) {
//     for (let x in users[i].city) {
//         console.log(users[i].city[x]);
//     }
// }

// for (let user of users) {
//     for (let cities of user.city){
//         console.log(cities);
//     }
// }