import React from "react"
import "./SudokuBoard.css"

export default function SudokuBoard({ grid, setGrid, fixedCells }) {
  const handleChange = (row, col, value) => {
    if (fixedCells[row][col]) return
    const newGrid = grid.map(r => [...r])
    const intVal = parseInt(value)
    if (!isNaN(intVal) && intVal >= 1 && intVal <= 9) {
      newGrid[row][col] = intVal
    } else if (value === "") {
      newGrid[row][col] = null
    }
    setGrid(newGrid)
  }

  return (
    <div className="board">
      {grid.map((row, i) => (
        <div className="row" key={i}>
          {row.map((cell, j) => (
            <input
              key={`${i}-${j}`}
              className={`cell ${fixedCells[i][j] ? "fixed" : ""}`}
              type="text"
              maxLength="1"
              value={cell || ""}
              onChange={(e) => handleChange(i, j, e.target.value)}
              disabled={fixedCells[i][j]}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
