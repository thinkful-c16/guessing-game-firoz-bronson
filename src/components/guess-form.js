import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {

    
        return (
            
            <form 
            onSubmit={props.onSubmit}
            >
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" 
                    value={props.guess}
                    onChange={props.onChange}
                    required 
                    />
                
                <input className="button" id="guessButton" type="submit" value="Guess"/>
            </form>
            
            
        );
       
};






