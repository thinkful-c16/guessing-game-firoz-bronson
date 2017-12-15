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
            number: '',
            guess: '',
            feedback: [],
            guessHistory: [],
            // guessCount: ''
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

    // guessHistory() {
    //     //take value from guess input field, use push to add to array in guess history 
        
    // }

    // guessCount() {
    //     //count the guess history array
    // }

    currentfeedback() {
        //all possible feedback
    }    

    onChange = (e) => {
        this.setState({
            guess: e.target.value
        }) ;
    }
    onSubmitGuess = (e) => {
        e.preventDefault();
          this.setState({
              guessHistory: [...this.state.guessHistory,this.state.guess],
              guess: ''
          })
    }


    render() {
        
        return (
            <div>
                <Header />
                <GuessSection feedback="Make your guess!" />
                <GuessCount count={this.state.guessHistory.length} />
                <GuessList guesses={this.state.guessHistory} />
                <GuessForm guess={this.state.guess}
                onChange={this.onChange}
                onSubmit={this.onSubmitGuess} />
            </div>
        );
    }
}


//}currentGuess={e => (this.currentGuessF(e))}

