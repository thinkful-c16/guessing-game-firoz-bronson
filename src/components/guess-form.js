import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    // console.log(props.state);
    console.log(props.currentGuess);
    return (
        <form onSubmit={props.onSubmit} >
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required 
                onSubmit={ e => props.currentGuess(e.target.value) }
                 />
                 
            <input type="submit" id="guessButton" className="button" name="submit" value={props.currentGuess} />
        </form>
    );
};

