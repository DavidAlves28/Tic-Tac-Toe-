import styled from "styled-components"

export const ContainerMain = styled.main`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 60vh;
    width: 100vw;

    `
export const ContainerGame = styled.section`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    height:300px;
    width: 300px;
`
export const ButtonStartGame = styled.button`

    height: 30px;
    width: 20%;
    border-radius: 10px;
&:hover{
    color: white;
    background-image: linear-gradient(45deg, #ffff, #222);
}
`
