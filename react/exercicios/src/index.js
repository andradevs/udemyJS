import React from "react"
import ReactDom from "react-dom"

// import Primeiro from "./components/Primeiro"
// import BomDia from "./components/BomDia"

// import Multi, { BoaNoite } from './components/Multiplos'
// import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDom.render(
    <>
        <Pai nome='João' sobrenome="Silva">
            <Filho nome="Pedro"/>
            <Filho nome="Paulo"/>
            <Filho nome="Carla"/>
            
        </Pai>
    </>
, document.getElementById('root'))