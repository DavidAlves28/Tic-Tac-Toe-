import React from "react";
import Resultado from "../Resultado/Resultado";
import { ButtonStartGame, ContainerGame, ContainerMain } from "./styles";
import Quadrado from "../Quadrado/Quadrado"
export default function (props) {

    const contadorPonto = () => {

    }

    return (
        <ContainerMain>
        <ContainerGame>
            <Quadrado /><Quadrado /><Quadrado />
            <Quadrado /><Quadrado /><Quadrado />
            <Quadrado /><Quadrado /><Quadrado />
        </ContainerGame>
        <ButtonStartGame onClick={()=>props.startGame()}>Iniciar</ButtonStartGame>

        </ContainerMain>
    )
}