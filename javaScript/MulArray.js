// let ar = [
//     [25,30,22],
//     [15,35,47],
//     [54,63,67]
// ]

// let i;
// let j;
// for(i=0; i<ar.length; i++){
//     for(j=0; j<ar[i].length; j++){
//         console.log(ar[i][j]);
//     }
// }


// let ar =[ 
//     [
//         [50,70],
//         [80,90]
//     ],
//     [
//         [60,70],
//         [50,80]
//     ]
// ]


// let i;
// let j;
// let k;

// for(i=0; i<ar.length; i++){
//     for(j=0; j<ar[i].length; j++){
//         for(k=0; k<ar[i][j].length; k++){
//             console.log(ar[i][j][k]);
//         }
//     }
// }



// let ar1 = [10, 30, 45, 60]
// console.log(ar1);

// let ar2 = ar1.slice()
// console.log(ar2)

// ar1.push(88);
// console.log(ar1);
// console.log(ar2);


//  let ar1 = [[10, 20],[30, 40]];

//  let ar2 = [...ar1]

// console.log(ar1);
// console.log(ar2);

// ar1[1].push(909);
// console.log(ar1);
// console.log(ar2); 
     


// let ar1 = [[34,54],[66,89]];
// console.log(ar1);

// // let ar2 = structuredClone(ar1);
// let ar2 = [...ar1];

// // console.log(ar1);
// console.log(ar2);


// ar1[1].push(67);
// console.log(ar1);
// console.log(ar2);


let ar1 = [{name:"Ana"},{name:"Bean"}];

console.log(ar1);

let ar2 = ar1.slice(ar1);
console.log(ar2);

ar1.push({age:21});

console.log(ar1);
console.log(ar2);