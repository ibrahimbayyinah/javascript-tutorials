let board = '', size = 8, square;

for (let j = 0; j < size; j++) {
  
  // Creating the squares of a row:
  for (let k = 0; k < size; k++) {
    square = (square === ' ') ? '#' : ' ';
    board += square;
  }
  
  // Adding a newline character after each row:
  board += `\n`;
  
  // Alternating the value of the binding ``square`` one time to make the next row start with the same colour as the one with which the previous row ended:
  square = (square === ' ') ? '#' : ' ';
}

console.log(board);
// document.getElementById("output").textContent = board;
// document.write(board);
