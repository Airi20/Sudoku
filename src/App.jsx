import React, { useState } from "react"
import SudokuBoard from "./components/SudokuBoard"
import "./App.css"

const initialGrid = [
  [5, 3, null, null, 7, null, null, null, null],
  [6, null, null, 1, 9, 5, null, null, null],
  [null, 9, 8, null, null, null, null, 6, null],
  [8, null, null, null, 6, null, null, null, 3],
  [4, null, null, 8, null, 3, null, null, 1],
  [7, null, null, null, 2, null, null, null, 6],
  [null, 6, null, null, null, null, 2, 8, null],
  [null, null, null, 4, 1, 9, null, null, 5],
  [null, null, null, null, 8, null, null, 7, 9],
]

const solution = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
]

function App() {
  const [grid, setGrid] = useState(initialGrid)
  const [message, setMessage] = useState("")

  const fixedCells = initialGrid.map(row =>
    row.map(cell => cell !== null)
  )

  const checkAnswer = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j] !== solution[i][j]) {
          setMessage("もう一回やってみよう…😭")
          return
        }
      }
    }
    setMessage("正解！🎉")
  }

  return (
    <div className="app">
      <h1>ナンプレ</h1>
      <p>
        9x9の数字を埋めて、各行・列・3x3のブロックに1〜9が一度ずつ入るようにしよう！<br />
        <br />
      </p>
      <p style={{ color: "#888", lineHeight: "1.5" ,fontSize:"10px" }}>
  とにかく就活がめんどくさいし心が折れるからナンプレでもやって気を紛らわせよう。<br />
  期末が近くて鬱だからナンプレでもやって気を紛らわせよう。<br />
  なんか暇だからナンプレでもやって気を紛らわせよう。<br />
  なんか全てやる気が起きないからナンプレでもやって気を紛らわせよう（？）。<br />
  ２限って意外と早いよね起きれん😭。<br />
  できれば午前中はずっと寝てたいんだよなー🥺。<br />
  それにしてもやりたいことって見つからないし、入りたい企業なんてないよね。<br />
  のんびり生きてたいよなー。( っ'-')╮=͟͟͞͞💻💥<br />
</p>

      <SudokuBoard grid={grid} setGrid={setGrid} fixedCells={fixedCells} />
      <button onClick={checkAnswer}>答え合わせ</button>
      <p>{message}</p>
    </div>
  )
}

export default App
