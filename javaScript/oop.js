let a = {
    name : "vicky",
    grade : "A",
    age : 22,

    coding : function() {
        console.log("Vicky is planning to learn coding....!");
    },

    singing : function(){
        console.log("vicky is trying his best for singing");
    },

    dancing : function() {
        console.log("vicky is planning to learn dancing....!");
    }
};

console.log(a.name);
console.log(a.grade);
console.log(a.age);

a.coding();
a.singing();
a.dancing();

console.log("------------------------------------------------------------------------------------")




let car = {
    name : "BMW",
    model : "M4",
    color : "safron-red",
    seats : 4,

    start : function() {
        console.log("The car has begin startwed...!");
    },

    Running : function() {
        console.log("The car has Running");
    },

    stop : function() {
        console.log("The cars has been stoped")
    }
};

console.log(car.name);
console.log(car.model);
console.log(car.color);
console.log(car.seats);

car.start();
car.Running();
car.stop();
