let Words = [
    "apple",
    "bannana",
    "java",
    "ice",
    "dog",
    "dinosaur",
    "pineapple",
    "champion",
    "teacher"
];

function randomWord() {
    return Words[
      Math.floor(Math.random() * Words.length)
    ];
  }
  
  export { randomWord };