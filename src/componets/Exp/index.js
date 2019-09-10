
import React from 'react';


import "./styles.css";
function Exp(props) {
    return <div>
        <div id="exp">
            <h2>{props.funcao}</h2>
            <h4>Empresa: {props.empresa}</h4>
            <h4>De {props.data} a {props.dataf}</h4>
            <p>{props.descricao}</p>
            <br></br>
        </div></div>
}
export default Exp;
