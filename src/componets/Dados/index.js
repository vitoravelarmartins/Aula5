import React from 'react';


import "./styles.css";

function Dados(props) {
    return <div>
        <div id="Dados">

            <h2>Dados Pessoais</h2>
            <br></br>
            <h3>Idade: {props.idade} anos</h3>
            <br></br>
            <h3>Telefone: {props.telefone}</h3>
            <br></br>
            <h3>Endereço: {props.endereco}</h3>
        </div>
    </div>
}

export default Dados;