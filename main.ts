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
let board: Board = [
	[PLAYER, EMPTY, HOLE],
	[EMPTY, HOLE, EMPTY],
	[EMPTY, HAT, EMPTY],
];

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


// จริงๆ board ตอนแรกเขียนแบบนี้
// for (let i = 0; i < board.length; i++) {
// const row = board[i];
// console.log(row.join(" "));
// }
// แต่หาวิธีไปมาไปเจอ for of ถ้าใช้ก็จะโล่งกว่ามาก ไม่ต้องประกาศ i=<+ ด้วย

//อันนี้ก็ง่ายเหมือนกัน มาจากพี่โบ๊ท555555
// let test = board.map(board => board.join("")).join("\n");
}

// Game play loop

while (true) {

printBoard(board);	
const input:string = prompt("Which way? (w/a/s/d): ");	
// console.log(input);


// สร้างตัวแปรตำแหน่ง ดึงจาก game state มา
let newRow = playerRow;
let newCol = playerCol;

if (input === "w") newRow--;
if (input === "s") newRow++;
if (input === "a") newCol--;	
if (input === "d") newCol++;

// กำหนดเงื่อนไขแต่ละอัน ถ้า... จะเกิดอะไรขึ้นด้วย if else
if  (newRow < 0 || newRow >= board.length || newCol < 0 || newCol >= board[0].length) {
	console.log("Out of bounds! You lose!");
	break;
} else if 
	(board[newRow][newCol] === HOLE) {
	console.log("You fell into a hole! Game over!");
	break;
} else if
	(board[newRow][newCol] === HAT) {
	console.log("You found the hat! You win!");
	break;
}

// update board กับ player position จะได้เป็น *
board[playerRow][playerCol] = EMPTY;

playerCol = newCol;
playerRow = newRow;

board[playerRow][playerCol] = PLAYER;


printBoard(board);
}
