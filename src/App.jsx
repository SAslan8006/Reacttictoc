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
    <div className='board' >
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
    <div className='box'>
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
