import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import GuessForm from './guess-form';

export default class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            currentGuess: '',
            currentFeedback: [],
            guessHistory: [],
            guessCount: ''
        }
    }

    refreshGame() {
        //restart game
    }

    currentGuessF(e) {  
        console.log(e);
        this.setState({
            currentGuess: e 
        })
    }

    //take value from guess input field, use push to add to array in guess history 
    guessHistory() {
        
    }

    guessCount() {
        //count the guess history array
    }

    currentfeedback() {
        //all possible feedback
    }    


    render() {
        
        return (
            <div>
                <Header />
                <GuessSection feedback="Make your guess!" />
                <GuessCount count={3} />
                <GuessList guesses={[10, 15, 25]} />
                <GuessForm currentGuess={e => (this.currentGuessF(e))} />
            </div>
        );
    }
}


