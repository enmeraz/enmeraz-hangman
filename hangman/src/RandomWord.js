let Random_Word = [
    "cat",
    "dog",
    "apples",
    "bananas",
    "soda",
    "science",
    "engineering",
    "nike",
    "java",
    "javascript",
    "subway",
    "monster",
    "angle",
    "degree",
    "cool",
    "hot",
    "pineapple",
    "buffalo",
    "zebra",
    "mexico",
    "computer"
];

function randomWord() {
    return Random_Word[
        Math.floor(Math.random() * Random_Word.length)
    ];
}

export{randomWord};