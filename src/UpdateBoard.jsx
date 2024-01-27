export const UpdateBoard = (index) => {
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