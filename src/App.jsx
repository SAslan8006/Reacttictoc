import './App.css'

const Game = () => {
  return (
    <div className='game'>
      <Board />
    </div >
  )
}

const Board = () => {
  return (
    <div className='board' style={{ background: "lightgreen", display: "flex", flexWrap: "wrap", width: "306px" }}>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  )
}
const Box = () => {
  return (
    <div style={{ background: "lightgrey", width: "100px", height: "100px", border: "1px solid black" }}>
    </div>
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
