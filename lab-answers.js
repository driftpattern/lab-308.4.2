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

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (const turtle of ninjaTurtles) {
    const capitalizedTurtle = turtle.toUpperCase();
    console.log(capitalizedTurtle);
}


////////////////////////////////
// Methods Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf("Titanic"));

favMovies.sort();
favMovies.pop();
favMovies.push('Guardians of the Galaxy');
// console.log(favMovies);

// favMovies == favMovies.shift();
// favMovies == favMovies.unshift();

const index = favMovies.indexOf('Django Unchained');

if (index !== -1) {  // if 'Django Unchained' exists in the array
  favMovies.slice(index, 1, 'Avatar');  // replace 'Django Unchained' with 'Avatar'
  console.log(favMovies);
}

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];

// remove Eggbert
whereIsWaldo.splice(1, 1);

// change "Neff" to "No One"
whereIsWaldo[2][2] = "No One";

console.log(whereIsWaldo);
*/

////////////////////////////////
// Excited Kittens
////////////////////////////////
const kittyTalk = [
    "...human... why you taking pictures of me...?",
    "...the catnip made me do it...",
    "...why does the red dot always get away...?"
  ];
  
  for (let i = 1; i <= 20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
  
    if (i % 2 === 0) {
      let randomIndex = Math.random();
      let multipliedIndex = randomIndex * kittyTalk.length;
      let roundedIndex = Math.floor(multipliedIndex);
      console.log(kittyTalk[roundedIndex]);
    }
  }
