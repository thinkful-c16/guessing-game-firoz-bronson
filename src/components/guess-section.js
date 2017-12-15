import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    return (
        <section>
            <div className="gamebox">
            <h2 id="feedback">{props.feedback}</h2>
            </div>
        </section>
    );
}

           
            