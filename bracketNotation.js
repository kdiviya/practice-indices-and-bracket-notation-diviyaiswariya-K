//Task 1: Create a multi-dimensional array with nine books and/or movies of your choice
let libraryArr = [
    ["Dune", "Dracula", "Hamlet", "Frankenstein", "Beloved", "To Kill a Mockingbird",
        "The Great Gatsby", "Sapiens", "1984"],
        ["Paperman", "The Present", "The Lunchbox", "Toy Story","Lord of the Rings", "Star Wars: A New Hope", "The Dark Knight",
            "Mona", "Guardians of the Galaxy"]
        ];

//Task 2: Access and log all the elements in the array using bracket notation with numbers.
console.log("Book Names: ", libraryArr[0][0], libraryArr[0][1], libraryArr[0][2], libraryArr[0][3], libraryArr[0][4], libraryArr[0][5], libraryArr[0][6], libraryArr[0][7], libraryArr[0][8]);
console.log("Movie Names: ", libraryArr[1][0], libraryArr[1][1], libraryArr[1][2], libraryArr[1][3], libraryArr[1][4], libraryArr[1][5], libraryArr[1][6], libraryArr[1][7], libraryArr[1][8]);

//Task 3: Access and log all the elements in the array using bracket notation with variables as indices. Use the variables row and item.
let row;
let item;
console.log("Variable Representation:");
for (row=0; row<libraryArr.length; row++){
for (item=0; item<libraryArr[row].length; item++){
    console.log(libraryArr[row][item]);
}
}

//Task 4: Write a loop that prints all the items on the second shelf
   for (item=0; item<libraryArr[1].length; item++){
     console.log("Second shelf items:", libraryArr[1][item]);
    }
