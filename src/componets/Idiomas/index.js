import React from 'react';
import LinearDeterminate from '../ProgressBar';


import "./styles.css";

function Idiomas(props) {
    return <div>
        <div id="skills">
            <p>{props.l1}< LinearDeterminate value='25' /></p>
            <p>{props.l2}< LinearDeterminate value='55' /></p>
            <p>{props.l3}< LinearDeterminate value='12' /></p>
            <p>{props.l4}< LinearDeterminate value='31' /></p>
            <p>{props.l5}< LinearDeterminate value='9' /></p>


        </div>
    </div >
}

export default Idiomas;