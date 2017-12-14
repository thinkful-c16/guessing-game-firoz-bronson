import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {

    // onSubmit = () => {
    //     e.prevent.default();
    //     console.log(this(e.target.value))

    // }

    handle() {
        this.props.currentGuess(this.refs.userInput.value)
        this.refs.userInput.value = ''
    }

    render() {
        return (
            <form >
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" ref="userInput" required 
                    />
                <input type="button" id="guessButton" className="button" name="submit" value="guess"
                onClick={() => this.handle()}
                />
            </form>
        );
    }
   
};


// onSubmit={ 
//     e => props.currentGuess(e.target.value)
//    }