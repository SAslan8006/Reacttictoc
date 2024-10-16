import { useState } from 'react';
import './App.css';
import { winningCombinations } from './wc';  // Kazanma kombinasyonları dosyasını ekleyin

const isGameOver = (values) => {
  let gameOver = false;
  let winner = "";
  winningCombinations.forEach((wc) => {
    let current = values[wc[0]];
    let counter = 0;

    wc.forEach((i) => {
      if (values[i] !== "" && values[i] === current) counter++;
      if (counter === 3) {
        gameOver = true;
        winner = current;
        return;
      }
    });
    if (gameOver) return;
  });

  return { winner, gameOver };
};

const Game = () => {
  return (
    <div className="game">
      <Board />
    </div>
  );
};

const Board = () => {
  const ResetBoard = () => {
    return Array(9).fill("");
  };
  const [values, setValues] = useState(ResetBoard());
  const [current, setCurrent] = useState("O");

  const setSpecificValue = (index, value) => {
    values[index] = value;
    setValues([...values]);

    const { winner, gameOver } = isGameOver(values);
    if (gameOver) {
      alert(`${winner} kazandı`);
    } else {
      console.log("Oyun Devam Ediyor");
    }
  };

  return (
    <div>
      <button style={{ marginBottom: "50px" }} onClick={() => setValues(ResetBoard())}>
        Restart
      </button>
      <div className="board">
        {values.map((item, i) => (
          <Box
            key={i}
            index={i}
            value={values[i]}
            current={current}
            setCurrent={setCurrent}
            setSpecificValue={setSpecificValue}
          />
        ))}
      </div>
    </div>
  );
};

const Box = ({ index, value, current, setCurrent, setSpecificValue }) => {
  const ChangeCurrent = () => {
    if (current === "O") setCurrent("X");
    else setCurrent("O");
  };

  return (
    <div
      className="box"
      onClick={() => {
        if (value === "") {
          setSpecificValue(index, current);
          ChangeCurrent();
        }
      }}
    >
      {value}
    </div>
  );
};

function App() {
  return (
    <>
      <Game />
    </>
  );
}

export default App;
