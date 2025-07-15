import React, { useState } from "react";
import SudokuBoard from "./components/SudokuBoard";
import "./App.css";

export default function App() {
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
  ];

  const [grid, setGrid] = useState(initialGrid);
  const [message, setMessage] = useState("");
  const [showComment, setShowComment] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const fixedCells = initialGrid.map(row => row.map(cell => cell !== null));

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
  ];

  const checkAnswer = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j] !== solution[i][j]) {
          setMessage("もう一回やってみよう…😭");
          return;
        }
      }
    }
    setMessage("正解！🎉");
  };

  return (
    <div className="app">
      <h1 style={{ fontSize: "20px" }}>ナンバーパニック</h1>
      <p>
        9x9の数字を埋めて、各行・列・3x3のブロックに1〜9が一度ずつ入るようにしよう！
      </p>

      {/* 盤面表示 */}
      <SudokuBoard grid={grid} setGrid={setGrid} fixedCells={fixedCells} />

      {/* メッセージ表示 */}
      <p>{message}</p>

      {/* ボタン並べる */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          marginTop: "10px",
        }}
      >
        <button onClick={checkAnswer}>答え合わせ</button>
        <button
          onClick={() => setShowComment(!showComment)}
          style={{
            fontSize: "12px",
            padding: "6px 10px",
            backgroundColor: "#ccc",
            color: "#333",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {showComment ? "隠す" : "コメント"}
        </button>
      </div>

      {/* コメント */}
      {showComment && (
        <p
          style={{
            color: "#888",
            fontSize: "10px",
            lineHeight: "1.8",
            margin: "20px auto",
            maxWidth: "320px",
            textAlign: "left",
            fontStyle: "italic",
            opacity: 0.8,
          }}
        >
          とにかく就活がめんどくさいし心が折れるからナンプレでもやって気を紛らわせよう。
          <br />
          期末が近くて鬱だからコーヒー飲みながらナンプレでもやろう。
          <br />
          なんか暇だからナンプレでもやってダラダラしよう。
          <br />
          なんか全てやる気が起きないからナンプレでもやってゆったり過ごそう（？）。
          <br />
          ２限って意外と早いよね起きれん😭。
          <br />
          それにしても新棟のパリピ率は異常だよな。
          <br />
          みんな家だと思ってる笑
          <br />
          私もソファでごろ寝したーい。
          <br />
          今日雨降っててまだ帰れないし
          <br />
          それにしてもやりたいことはまだ見つからないけど、
          <br />
          ゆるっと超小規模の音ゲーの管理人とかならやってみたいかもしれん（あーでも判定とか著作権とかめんどうだしすぐ重くなるかorz）。
          <br />
          個人事業しか勝たんけどそれで生きてく自信がなさすぎる。
          <br />
          のんびり生きてたいよなー。( っ'-')╮=͟͟͞͞💻💥
          <br />
        </p>
      )}

      {/* 解答表示ボタン */}
      <div style={{ textAlign: "center", marginTop: "12px" }}>
        <button
          onClick={() => setShowSolution(!showSolution)}
          style={{
            fontSize: "12px",
            padding: "6px 10px",
            backgroundColor: "#ccc",
            color: "#333",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {showSolution ? "解答を隠す" : "解答を見る"}
        </button>

        {/* 解答表示 */}
        {showSolution && (
          <pre
            style={{
              marginTop: "6px",
              fontSize: "14px",
              background: "#f0f0f0",
              padding: "8px",
              borderRadius: "4px",
              color: "rgba(0, 0, 0, 0.3)", // うっすら文字色
              userSelect: "none",
              whiteSpace: "pre-wrap",
              maxWidth: "320px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {solution.map(row => row.join(" ")).join("\n")}
          </pre>
        )}
      </div>
    </div>
  );
}
