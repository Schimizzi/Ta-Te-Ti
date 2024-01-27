import './App.css'
import { useState } from 'react'

const Turns = {
  X: 'X',
  O: 'O',
}


const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )

}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(Turns.X)
  console.log(turn)
  const updateBoard = (index) => {
    if (board[index]) return

    const newBoard = [...board]


    newBoard[index] = turn
    setBoard(newBoard)
    console.log(newBoard)
    const newTurn = turn === Turns.X ? Turns.O : Turns.X
    setTurn(newTurn)
  }

  return (
    <main className='board'>
      <h1> Ta-Te-Ti </h1>
      <section className='game'>
        {board.map((_, index) =>
        (
          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
          >
            {board[index]}
          </Square>
          
        ))}
      </section>
      <section className='turn'>
        <Square isSelected={turn === Turns.X} >{Turns.X} </Square>
        <Square isSelected={turn === Turns.O} >{Turns.O} </Square>
      </section>
    </main>
  )
}

export default App
