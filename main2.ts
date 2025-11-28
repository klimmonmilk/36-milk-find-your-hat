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

function generateBoard(rows: number, cols: number) {
  const field = [];

  for (let r = 0; r < rows; r++) {
    const row: Tile[] = [];
    for (let c = 0; c < cols; c++) {
      row.push(EMPTY);
    }
    field.push(row);
  }

  return field;
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
let board: Board = generateBoard(5, 5);


printBoard(board);
const input:string = prompt("Which way? (w/a/s/d): ");
// console.log(input);

};