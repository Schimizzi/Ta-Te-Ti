export const GanadorModal = () => {
    if(ganador === null) return null
    return (
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