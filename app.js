const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenValues = values.filter((even) => {
  if (even % 2 === 0) {
    return even;
  }
});

console.log(evenValues);
