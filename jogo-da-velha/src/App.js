import React, { useState } from "react";
import ContainerJogo from "./Components/ContainerJogo/ContainerJogo"

import {GlobalStyle}  from "./GlobalStyled/GlobalStyled"
function App() {
// Jogador X 
const [jogadorX,setJogadorX] = useState([])

// Jogador O
const [jogadorO,setJogadorO] = useState([])


  // PONTOS JOGADOR X 
  const [pontoX, setPontoX] = useState(0)
  const mudaPontoX =()=>{
  setPontoX(1)
  }
  
  // PONTOS JOGADOR O
  const [pontoO, setPontoO] = useState(0)
  const mudaPontoO =()=>{
    setPontoO(1)
    }
//  INICIO JOGO
const startGame =()=>{
    
}


  return (
    <ContainerJogo pontoX={pontoX} pontoY={pontoO} startGame={startGame}>
    <GlobalStyle/>
    </ContainerJogo>
   
 
  );
}

export default App;
