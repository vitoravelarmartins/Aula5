import React from 'react';


import "./styles.css";

export default function Nome(props) {
    return <div>
        <div id="estudos">
            <h2>{props.curso}</h2>
            <h4>Instituição: {props.inst}</h4>
            <h4>Horas: {props.horas}</h4>
            <p>{props.descricaoCurso}</p>

        </div>
    </div>
}


