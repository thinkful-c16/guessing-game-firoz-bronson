import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    console.log(props.feedback);
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            {/* <GuessForm />  */}
        </section>
    );
}

