import promptSync from "prompt-sync";

// Types
type Tile = "*" | "░" | "O" | "^";
type Board = Tile[][];

const prompt = promptSync({ sigint: true });

// Board tiles
const PLAYER: Tile = "*";
const EMPTY: Tile = "░";
const HOLE: Tile = "O";
const HAT: Tile = "^";

// Hardcoded board
// let board: Board = [
// 	[PLAYER, EMPTY, HOLE],
// 	[EMPTY, HOLE, EMPTY],
// 	[EMPTY, HAT, EMPTY],
// ];

function generateBoard(rows: number, cols: number, holePercentage:number) {
  const board = [];

  for (let r = 0; r < rows; r++) {
    const row: Tile[] = [];
    for (let c = 0; c < cols; c++) {
      const randomValue = Math.random(); 
      if (randomValue < holePercentage) {
        row.push(HOLE);
      } else {
      row.push(EMPTY);
      }
    }
    board.push(row);
  }
  return board;
}


while (true) {
//  Game state 
let playerRow: number = 0;
let playerCol: number = 0;
let playing: boolean = true;

// Print board
function printBoard(board: Board): void {
	console.clear();
	for (const row of board) {
    console.log(row.join(" "));
  }
}

// Game play loop
let board: Board = generateBoard(10, 10, 0.1);


printBoard(board);
const input:string = prompt("Which way? (w/a/s/d): ");
// console.log(input);

};