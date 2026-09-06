// fetch("https://catfact.ninja/fact")
// .then((res) => res.json()) 
// .then(txt => console.log(txt))
// .catch(() => console.log("api failed"));

// async function getCatFact() {
//     const data = await fetch("https://catfact.ninja/fact")
//     // console.log(data)
//     const txt = await data.json();
//     console.log(txt);
// }
// getCatFact();





// const data = await fetch("https://api.restful-api.dev/objects", {method : 'GET'});
// let txt = await data.json();
// console.log(txt)


// async function test() {

// let exmp = { 
//   name: "Apple MacBook Pro 16", 
//   data: { 
//     year: 2019, 
//     price: 1849.99, 
//     "CPU model": "Intel Core i9", 
//     "Hard disk size": "1 TB" 
//   } 
// }; 

// const data = await fetch("https://api.restful-api.dev/objects", { 
//   method: "POST", 
//   headers: { 
//     "Content-Type": "application/json", 
//     "Accept": "application/json" 
//   }, 
//   body: JSON.stringify(exmp) 
// }); 

// let txt = await data.json(); 
// console.log(txt);

// }

// test();




async function test() {

let exmp = { 
  name: "Apple MacBook Pro 16", 
  data: { 
    year: 2019, 
    price: 1849.99, 
    "CPU model": "Intel Core i9", 
    "Hard disk size": "1 TB" 
  } 
}; 

let data = await fetch("https://api.restful-api.dev/objects/9", 
    { method: 'DELET' }); 
    console.log(data)
    let txt = await data.json(); 
    console.log(txt);

}

test();