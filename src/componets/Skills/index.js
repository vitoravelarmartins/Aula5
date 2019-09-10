import React from 'react';
import LinearDeterminate from '../ProgressBar';


import "./styles.css";

function Skills(props) {
    return <div>
        <div id="skills">
            <p>{props.habilidade1}< LinearDeterminate value='20' /></p>
            <p>{props.habilidade2}< LinearDeterminate value='30' /></p>
            <p>{props.habilidade3}< LinearDeterminate value='90' /></p>
            <p>{props.habilidade4}< LinearDeterminate value='60' /></p>
            <p>{props.habilidade5}< LinearDeterminate value='85' /></p>


        </div>
    </div >
}

export default Skills;