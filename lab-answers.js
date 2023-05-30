/*
////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
  
////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i <= 200; i += 2) {
    console.log(i);
  }
  

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 1; i <= 100; i++) {
    let output = "";
  
    if (i % 3 === 0) {
      output += "Fizz";
    }
  
    if (i % 5 === 0) {
      output += "Buzz";
    }
  
    if (output === "") {
      output = i;
    }
  
    console.log(output);
  }
*/
////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = "5001";
console.log(plantee[2]);

wolfy[3] = "Gotham City";
console.log(wolfy[3]);

dart.push("Hawkins");
console.log(dart);

wolfy[0] = "Gameboy";
console.log(wolfy);
