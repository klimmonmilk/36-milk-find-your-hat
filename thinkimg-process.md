# Thinking Process Guidelines

## Table of Contents

- [Thinking Process Guidelines](#thinking-process-guidelines)
  - [Table of Contents](#table-of-contents)
  - [1. Workflow Planning](#1-workflow-planning)
  - [2.1. Board Functions (Hardcoded)](#21-board-functions-hardcoded)
  - [2.2. Board Functions (Generated)](#22-board-functions-generated)
  - [3. Input Functions](#3-input-functions)
  - [4. Movement Functions](#4-movement-functions)
  - [5. Game Rule Functions](#5-game-rule-functions)
  - [6. Game Play Loop](#6-game-play-loop)
- [WRITE YOUR THINKING PROCESS BELOW. ](#write-your-thinking-process-below)

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">1. Workflow Planning</span>

↳ Draw a flowchart or write steps describing:

<p style="display: flex; align-items: center; gap: 1rem;">
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Game start</span>
<span style="color: wheat; font-weight:bold; font-size:2rem; ">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Read input</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Update position</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Check rules</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">End/Continue</span>
</p>

↳ Must include:

- Input/output of each function.
- Edge cases (invalid input, boundaries, hole/hat tiles).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem; margin-top: 1rem; border-buttom: none;">2.1. Board Functions (Hardcoded)</span>

↳ Prints the hardcoded board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">2.2. Board Functions (Generated)</span>

↳ Creates a random board with player, hat, and holes.
↳ Prints the board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).
- How random placement avoids overlaps.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">3. Input Functions</span>

↳ Reads and validates user input (w, a, s, d).
↳ Logs invalid input.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">4. Movement Functions</span>

↳ Updates playerRow / playerCol based on the move.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">5. Game Rule Functions</span>

↳ Checks for out-of-bounds, falling into a hole, or finding the hat.

<span style="font-weight:bold; color: pink;">&nbsp;Game Rules:&nbsp;</span>

- Wins by finding the hat.
- Loses by landing in a hole.
- Loses by moving outside the board.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">6. Game Play Loop</span>

↳ Combine all functions into a playable loop.
↳ Ensure messages appear correctly, board prints at start, and invalid input is handled.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions
- How to update the board when the player moves.

---

# <p style="display: flex; align-items: center; gap: 0.5em;"><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 2rem;">WRITE YOUR THINKING PROCESS BELOW.</span><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 0;">&nbsp;</span></p>

Thinking Process
1. Workflow Planning

สิ่งที่ต้องทำ
- เดินออกนอกขอบ
- ตกหลุม
- เจอหมวก

ทางโค้ดจะต้องมี
- player เดิน + - 
- ตั้งคำสั่ง w a s d
- เชื่อม array ด้วย string
- update board ตามช่องที่ player เดิน
- อัพเดต board ในแต่ละครั้งที่ player เดินไป
- ใช้ loop ทำให้ board รัน + อัพเดต 
- ถ้าตกแมพจะเกิด ""
- ถ้าตกหลุมจะเกิด ""
- ถ้าเจอหมวกจะเกิด ""
- ถ้าเป็นคำสั่งอื่นนอกเหนือจากที่กำหนดจะเกิด ""

2.1. Board Functions (Hardcoded)

ฝั่ง map
- ใช้ board เดิมแล้วเชื่อม array เป็น string ให้ติดกันไม่มี ""[]
- เก็บ function printBoard กับ console.clear ไว้ แล้วค่อยเพิ่ม loop for of กับ .join("") เพื่อให้เปลี่ยนเป็น string ทีละแถว

ฝั่ง gameplay
- ทำให้เกมเป็น loop ใช้ while (playing) แล้วถ้าเกิดเงื่อนไขอะไรขึ้นค่อย เปลี่ยน playing เป็น false
- ประกาศ newrow/newcol ออกมาเพิ่มให้ใช้งานง่ายขึ้น
- แล้วใช้ if ว่าจะให้เดินด้วยตัวแปรตัวไหนที่ + ตัวไหน - เช่น "w" row--
- แล้วก็ใช้ if else กำหนดเงื่อนไขต่อ ถ้าต่ำกว่า 0 = ตกขอบ กับถ้ามากกว่าความยาวของ array กับมากกว่าความยาวของ element = ตกขอบ
- และก็ถ้าตำแหน่ง row/col ของผู้เล่นไป === hole/hat จะเกิด___
- ทุกอันตรงจบด้วย break เพราะถ้าตรงเงื่อนไขจะได้ออกจาก loop

update player position
- ทำให้ playerRow playerCol เป็น EMPTY จะได้ลบออกจากตำแหน่งเดิม แล้วเปลี่ยนค่าให้เป็นตำแหน่งใหม่ ใช้ playerCol = newCol จะได้เปลี่ยนค่าให้เป็นอันเดียวกับ newCol แล้วค่อยให้ตำแหน่งใหม่ = PLAYER (*)


2.2. Board Functions (Generated)

อยู่ใน main2.ts ใช้วิธีรันด้วย tsx main2.ts
- สร้าง function generate board ที่มี parameter เป็น rows cols holePercentage ละให้ทั้ง 3 มีค่าเป็น number
แล้วก็ประกาศ board เป็น array ว่าง แล้วก็เขียน loop ว่าถ้า r น้อยกว่าค่า rows ให้สร้าง array ว่าง จากนั้นใช้ math.random สุ่มเลขตั้งแต่ 0-1 ว่าถ้ามีค่าน้อยกว่า holePercentage จะ push หลุมเข้า array แต่ถ้าสุ่มได้ค่ามากกวว่าก็ให้เป็น empty จากนั้นก็ push row ที่สร้างเสร็จเข้าไปใน board แล้วก็วนลูป r rows จนกว่าจะเป็นเท็จแล้วให้ return ออกมาเป็น board

3. Input Functions

input คือตัวนี้ const input:string = prompt("Which way? (w/a/s/d): "); และถ้าต้องการระบุว่าให้ wasd เป็นตัวไปทางซ้ายทางขวาก็ใช้ให้ = playerRow/playerCol ได้ แต่ว่าของหนูอยากทำเผื่ออัพเดตแมพด้วย เลยจะสร้าง var ใหม่ คือ newRow กับ newCol แล้วก็จะกำหนดว่า ปุ่ม w คือขึ้น ก็คือ newRow-- และปุ่มอื่นๆก็เหมือนกัน

4. Movement Functions

พอรับ input มาแล้วก็มาใส่เงื่อนไขว่า ถ้า row/col น้อยกว่า 0 = อยู่นอกเขต ก็จะ = lose แล้ว break; ออก แล้วก็ใช้ else if มาดูว่า newCol/newRow ถ้าตอนไหนที่มีค่า = HAT, HOLE ก็จะ console.log ว่าตกหลุม/เจอหมวก แล้วก็ break; ออกลูปเหมือนเดิม

5. Game Rule Functions

เดินตก = แพ้(ตก)
เดินเข้าหลุม = แพ้(ตกหลุม)
เดินชนหมวก = ชนะ(เจอหมวก)

6. Game Play Loop

ใช้ while (playing) คลุมตั้งแต่ printboard-if else อันสุดท้าย เพราะเมื่อ playing เป็น false จะได้ไปหยุดที่ while (playing)

[Back to Table of Contents](#table-of-contents)

---
