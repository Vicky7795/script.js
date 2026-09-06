// let a1 = "JavaScript";
// let name = "Roghit";

// let greet = `hi, ${name}`;
// console.log(greet)

// let a1 = "VIVEK";

// let a2 = "vivek";

// let a3 = "VIVEK";

// console.log(a1 == a3); 

// let s1 = "Java";
// let s2 = "JavaAcript";

// let s3 =  s1 + s2;
// let s4 = s1.concat(s2);

// console.log(s4);
// console.log(s3);

// console.log(s1.charAt(0));
// s1 = "b" + s1.slice(1);
// console.log(s1);



let userInput = "Alice Johanson | Alice@gmail.com | javaScript Developer | graduate 2026 at hsit ";

let box = userInput.split("|");
console.log(box)

let name = box[0].trim();
let email = box[1].trim();
let bio = box[3].trim();

console.log(name);
console.log(bio);
console.log(email);

// name = name.toUpperCase();
// console.log(name);

// email=email.toLowerCase();
// console.log(email);

bio = bio.replaceAll("javaScript Developer","typeScript")
console.log(bio.includes("javaScript"));

console.log(bio.length);

email = email.includes("@") && email.endsWith(".com");
console.log(email);

let mark = " *".repeat(15);

let final = `
user pro :
${mark}

name : ${name.trim()}

email : ${email}

profesion : ${bio.trim()}

${mark}
`
console.log(final);