import React from "react";

import "./styles.css";

function Nome(props) {
    return <div>
        <div id="cap">
            <h1>{props.name}</h1>
        </div>
        <div id="dados">
            <br></br>

            <h5>Idade: {props.idade} anos</h5>
            <h5>Telefone: {props.telefone}</h5>
            <h5>Endereço: {props.endereco}</h5>
        </div><br></br>
        <div id="habi">
            <h3>Skills</h3>
        </div>
        <div id="skills">
            <p>{props.habilidade1} • {props.habilidade2} • {props.habilidade3} • {props.habilidade4} • {props.habilidade5}</p>

        </div><br></br>
        <div id="exp">
            <h2>{props.funcao}</h2>
            <h4>Empresa: {props.empresa}</h4>
            <h4>De {props.data} a {props.dataf}</h4>
            <p>{props.descricao}</p>
            <br></br>
            <h2>{props.funcao}</h2>
            <h4>Empresa: {props.empresa}</h4>
            <h4>De {props.data} a {props.dataf}</h4>
            <p>{props.descricao}</p>
            <br></br>
        </div>
        <br></br>
        <div id="habi">
            <h3>Linguas</h3>
        </div>
        <div id="skills">
            <p>{props.l1} • {props.l2} • {props.l3} • {props.l4} • {props.l5}</p>

        </div><br></br>
        <div id="estudos">
            <h2>{props.curso}</h2>
            <h4>Instituição: {props.inst}</h4>
            <h4>Horas: {props.horas}</h4>
            <p>{props.descricaoCurso}</p>
            <br></br>
            <h2>{props.curso}</h2>
            <h4>Instituição: {props.inst}</h4>
            <h4>Horas: {props.horas}</h4>
            <p>{props.descricaoCurso}</p>
            <br></br>
        </div>






        <div>

        </div>


    </div>
}




export default Nome;
