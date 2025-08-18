// Objects are a way to store data in key-value pairs.
// Example: bird = {
//   name: "Sparrow",
//   age: 1,
//   sings: true,
// };

// Exercises:

// 1. Simple object
// Make an object 'cat' with 'name', 'color', and 'age'.
let prompt = require("prompt-sync")();
cat = {
    name: "Atena",
    color: "tabby",
    age: 7
}

let sex = 'O'; // Initial placeholder value
let flag = 0;

while (flag === 0) {
    console.log("Choose F if the cat is female and M if the cat is male: ");
    sex = prompt(); // Get user input

    if (sex.toUpperCase() === 'F') {
        console.log(`My cat is called ${cat.name}, she is a ${cat.color} and has ${cat.age} years old.`);
        flag = 1; // Exit the loop
    } else if (sex.toUpperCase() === 'M') {
        console.log(`My cat is called ${cat.name}, he is a ${cat.color} and has ${cat.age} years old.`);
        flag = 1; // Exit the loop
    } else {
        console.log("Please enter F or M."); // Prompt the user again for valid input
    }
}

// 2. Add and change
// Add 'toy' to the cat object.
// Change the 'age' to another number.

cat.toy = "Box"
cat.age = 7;

// 3. Object with method
// Make an object 'dog' with 'name', 'breed',
// and a method 'bark()' that prints "Woof!".

let dog = {
    name: "Maria",
    breed: "Vira lata",
    bark: function (){
        console.log(`Woof!`)
    }
}

dog.bark()

// 4. Array of objects
// Make an array 'market' with 3 products.
// Each product has 'name' and 'price'.
// Print the name of each product along with its price.

let market = {
    name: ["Sabão em pó", "Coca-cola", "Massa"],
    price: [21, 7, 12]
}

for (i = 0; i < market.name.length; i++){
    console.log(`Objeto: ${market.name[i]}, preço: R$${market.price[i]}`)
} 

// 5. Object inside object
// Make an object 'movie' with 'title' and 'director'.
// Inside it, add 'review' with 'rating' and 'comment'.
// Print the rating and comment.

movie = {
    title: "2 Fast 2 Furious",
    director: "John Singleton",
    review: {
        rating: 3,
        comment: "Muito divertido. Roteiristas esqueceram de justificar tipo 50% do filme tho"
    }
}

console.log(`Movie: ${movie.title}, director: ${movie.director}, rating: ${movie.review.rating} out of 5: "${movie.review.comment}"`)

// 6. For...in to sum values
// We have an object 'scores' with points from 3 players.
// Use a for...in loop to add all the points together
// and print the total.

let scores = {
  Alice: 5,
  Bob: 7,
  Charlie: 4,
};

let scores2 = {
    name: ["Alice", "Bob", "Charlie"],
    points: [scores.Alice, scores.Bob, scores.Charlie]
}

let total = 0;

for (i = 0; i < scores2.name.length; i++){
    total += scores2.points[i]
}

console.log(`Total de pontos: ${total}`)