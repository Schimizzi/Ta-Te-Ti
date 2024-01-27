import { combosGanadores } from "./constantes.js"
export const checkGanador = (checkTablero) => {
    for (const combo of combosGanadores) {
      const [a,b,c] = combo
      if ( checkTablero[a] === checkTablero[b] && checkTablero[a] === checkTablero[c])
      {
        return checkTablero[a]
      }
    }
    return null
  }