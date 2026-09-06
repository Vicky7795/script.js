// function task1() {
//     console.log("task1 started....")

//     let start = Date.now();
//     let delay = 5000;
//     let end = start + delay;

//     while(Date.now() <= end)
//     {


//     }
//     console.log("task1 completed");
// }

// function task2() {
//     console.log("task2 started....")

//     let start = Date.now();
//     let delay = 3000;
//     let end = start + delay;

//     while(Date.now() <= end)
//     {


//     }
//     console.log("task2 completed");
// }

// function task3() {
//     console.log("task3 started....")

//     let start = Date.now();
//     let delay = 6000;
//     let end = start + delay;

//     while(Date.now() <= end)
//     {


//     }
//     console.log("task3 completed");
// }

// task1();
// task2();
// task3();


// function fun1() {

//     console.log("Fun1 executed")
    


// }

// function fun2() {
//     console.log("fun2 executed");
//     let start = Date.now();
//     let delay = 50000;
//     let end = start + delay;
//     while(Date.now() <= end){

//     }

    
// }

// function fun3() {
//     console.log("fun3 executed");
//     let start = Date.now();
//     let delay = 90000;
//     let end = start + delay;
//     while(Date.now() <= end){

//     }
    
// }

// fun1();
// setTimeout(fun2, 5000);
// fun3();



// function loadDashBoard(id,callback) { 
//     let error;
//     setTimeout(()=>{
//         if(error){
//             return callback(error);
//         }
//         console.log("Fetching user data");

//         setTimeout(()=>{
//             console.log("user friend list")

//             setTimeout(()=>{
//                 // error = "fetching error : ";
//                 if(error){
//                     return callback(error)
//                 }
//                 console.log("fetching user post")
            
//             setTimeout(()=>{
//                  if(error){
//                     return callback(error)
//                 }
//                 console.log("fetching user comments")

//             },2000)
                
//             },2000)

//         },2000)
//     },2000);
// }


// function errorHandler(error){
//     console.log("something went wrong")
// }

// loadDashBoard("101",errorHandler)



// let prm = new Promise((resolve) => {
//     console.log("Executon started");
//     resolve("failure");
     
// })
// // console.log(prm);

// prm.then((result)=>{
//     console.log(result )
// })



// const prm = new Promise(
//     function executorFun(resolve,reject){
//         console.log("Inside execute func1...!")
//         setTimeout(()=>{
//             console.log("Inside executed func2...!")
//             reject();
//         },3000)
//     }
// );

// prm.then(() => {
//     console.log("promise fullfilled")
// })
// .catch(() => {
//    console.log("promise unfullfilled")  
// })



function exm(){
    return Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Task complete...!")
            resolve();
        },3000)
    });
}

async function run() { 
  try {

    await exm(); 
    console.log("Promise fulfilled"); 
  } catch (error) 
  { 
    console.log("Promise failed"); 
  } 
}


run();