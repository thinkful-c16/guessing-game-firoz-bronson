import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

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

    feedback() {
        //all possible feedback
    }    

    guessHistory() {
        //take value from guess input field, use push to add to array in guess history
    }

    guessCount() {
        //count the guess history array
    }


    render() {
        
        return (
            <div>
                <Header />
                <GuessSection feedback="Make your guess!" />
                <GuessCount count={3} />
                <GuessList guesses={[10, 15, 25]} />
            </div>
        );
    }
}


