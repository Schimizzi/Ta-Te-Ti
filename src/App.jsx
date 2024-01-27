import './App.css'
import { useState } from 'react'
import { Square } from './Square.jsx'
import { Turns } from './constantes.js'
import { checkGanador } from './checkganador.js'


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(Turns.X)
  const [ganador, setGanador] = useState(null)

  
  const checkFin = (newBoard) => {
    return newBoard.every((square) => square != null)
  }

  const updateBoard = (index) => {
    if (board[index] || ganador) return

    const newBoard = [...board]


    newBoard[index] = turn
    setBoard(newBoard)
    console.log(newBoard)
    const newTurn = turn === Turns.X ? Turns.O : Turns.X
    setTurn(newTurn)
    const nuevoGanador = checkGanador(newBoard)
    if (nuevoGanador) {
      setGanador(nuevoGanador)
    } else if(checkFin(newBoard)){
      setGanador(false)
    }
  }

  const nuevoJuego = () => {
    setBoard (Array(9).fill(null))
    setTurn (Turns.X)
    setGanador (null)
  }

  return (
    <main className='board'>
      <h1> Ta-Te-Ti </h1>
      <button onClick={nuevoJuego}>Empezar de nuevo</button>
      <section className='game'>
        {board.map((square, index) =>
        (
          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
          >
            {square}
          </Square>
          
        ))}
      </section>
      <section className='turn'>
        <Square isSelected={turn === Turns.X} >{Turns.X} </Square>
        <Square isSelected={turn === Turns.O} >{Turns.O} </Square>
      </section>
      <section>
        {
          ganador != null && (
            <section className='winner'>
              <div className='text'>
                <h2>
                  {
                    ganador === false ? 'Empate!' : 'Ganaste!'
                  }
                </h2>
                <header className='win'>
                  {ganador && <Square>{ganador}</Square>}
                </header>
                <footer>
                  <button onClick={nuevoJuego}>Empezar de nuevo</button>
                </footer>
              </div>
            </section>
          )
        }
      </section>
    </main>
  )
}

export default App
