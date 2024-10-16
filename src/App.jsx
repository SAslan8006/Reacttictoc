import { useState } from 'react'
import './App.css'

const Game = () => {
  return (
    <div className="game">
      <Board />
    </div >
  )
}

const Board = () => {
  const [values, setValues] = useState(Array(9).fill(""));
  const [current, setCurrent] = useState("O");

  const setSpecificValue = (index, value) => {
    values[index] = value;
    setValues((values) => [...values])
  }
  return (
    <div className="board" >
      {values.map((item, i) => {
        <Box
          key={i}
          index={i}
          value={values[i]}
          current={current}
          setCurrent={setCurrent}
          setSpecificValue={setSpecificValue} />
      })}
    </div>
  )
}
const Box = ({ index, value, current, setCurrent, setSpecificValue }) => {
  const ChangeCurrent = () => {
    current === "O" ? setCurrent("X") : setCurrent("O")


  }
  return (
    <div className="box" onClick={() => {
      if (current === "") {
        setSpecificValue(index, current)
        ChangeCurrent();
      }
    }}>{value}</div>
  )
}


function App() {

  return (
    <>
      <Game />

    </>
  )
}

export default App
