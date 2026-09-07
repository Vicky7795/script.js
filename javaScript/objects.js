
// const c1 = {
//     name : "BENZ",
//     cost : 45.5,
//     milage : 9.9,

//     start : function() {
//         console.log("BENZ Car is Started");
//     },

//     stop : function() {
//         console.log("Car is Stopping");
//     },

//     accelerating : function() {
//         console.log("Car is Accelerating");
//     },
// };

// const c2 = {
//     name :"BMW",
//     cost : 25.7,
//     mileage : 12.2,

//     start : function() {
//         console.log("BMW car is started")
//     }
// }
// c2.start();
// c1.start();
// c1.stop();
// c1.accelerating();


// const car = new Object();
// car.name = "BMw";
// car.cost = 49.5;
// car.milage = 9.8;

// car.start = function() {
//     console.log("Car is started");
// };

// car.stop = function() {
//     console.log("Car is stopping");
// };

// car.accelerator = function() {
//     console.log("CAR is running");
// };
// // car.name = "Inova";
// // car.break =function(){
// //     console.log("car is stoped")
// // }

// console.log(car);



// const dog = new Object();
// dog.name = "tonny";
// dog.color = "black";
// dog.height = 5.6;
// dog.eat = "Pedigeri";
// dog.sleep = "8hr";

// dog.sleep = function() {
//     console.log("dog is sleeped")
// };

// dog.eat = function(){
//     console.log("Dog is eating")
// };

// dog.running = function(){
//     console.log("Dog is running")
// }

// dog.bark = function(){
//     console.log("dog is barking")
// }
// console.log(dog)
// dog.running();
// dog.sleep();
// dog.bark();
// dog.eat();




// FACTORY FUNCTION

// function createCar(carName, carCost, milage){
//     return{
//         name : carName,
//         cost : carCost,
//         milage : milage
//     };
// }

// const c1 = createCar("BMW", 45.67, 9.8);
// console.log(c1)
// console.log(c1.name)
// const c2 = createCar("Thar", 11.2, 7.8);
// console.log(c2)



// class Demo {
//     name ="vicky";
//     age = 25;
// }
// const d1 = new Demo();
// console.log(d1.name,d1.age);



// OBJECT PROPERTIES AND OPERATION
//ADD DELETE UPDATE


const car = {
    name : "bmw",
    cost : 45.6,
    "car.clr" : "black",
};
// "car.clr" = "black";
car["money"] = car.cost;
console.log(car.money);

console.log(car)
// console.log(car["car clr"])