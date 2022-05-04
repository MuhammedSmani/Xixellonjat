// let a = 3;
// let b = 5;
// let c = 13;
// // let d = 59;

// // function mbledhja(num1,num2){
// //     return num1 + num2;
// // }

// // let shuma1 = mbledhja(a,b); 
// // console.log(shuma1)

// // let shuma2 = mbledhja(c,d); 
// // console.log(shuma2);


// let a = 3;
// let b = 5;
// let c = 13;

// function kikiriki(kiki,riki,kikiriki){
//     return kiki+riki+kikiriki;
// }

// console.log(kikiriki(a,b,c));




// let lista = ['otorinolaringolog', 7, ()=>{}, [2, '5']];

// // console.log(lista);

// // console.log(lista[3][1]);

// let student1={id:1,emri:"Muhammed",mbiemri:"Smani"};
// let student2={id:2,emri:"Nuri",mbiemri:"Xhezairi"};

// // console.log(student1.emri);

//  let students = [
//      {id:1,emri:"Muhammed",mbiemri:"Smani"}, //0
//      {id:2,emri:"Nuri",mbiemri:"Xhezairi"} // 1
//     ];

// console.log(students[0].mbiemri);





// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

const arr = ["a", "b", "c"]

// for (const key in arr) {
//     console.log(arr[key]);
// }

// for (const i in arr1) {
//     for (const x in arr2) {
//         if (arr1[i] === arr2[x] {
//     }
//     }
// }

// for (const key of arr) {
//     console.log(key);
// }

const obj = [{
    name: "Mukki",
    age: "20",
},
{
    name: "Rea",
    age: "21"
},
{
    name: "Kiselin",
    age: "22"
},
{
    name: "Kungullesh",
    age: "23"
}];

// console.log(Object.keys(obj));

for (const key of obj) {
    key.name = key.name + "1";
    key.age = key.age + "1";
    console.log(key.name);
    const keys = Object.keys(key);
    // // console.log(keys);
    for(let i of keys) {    
        console.log(i);
        key[i] = key[1] + "1";
    }
}